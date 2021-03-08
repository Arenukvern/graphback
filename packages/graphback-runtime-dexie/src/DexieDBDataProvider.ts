import {
  buildModelTableMap,
  FieldDescriptor,
  FieldTransformMap,
  FindByArgs,
  getDatabaseArguments,
  getFieldTransformations,
  GraphbackDataProvider,
  GraphbackOrderBy,
  GraphbackPage,
  ModelDefinition,
  ModelTableMap,
  NoDataError,
  QueryFilter,
  TableID,
} from '@graphback/core';
import Dexie from 'dexie';
import { Maybe } from 'graphql/jsutils/Maybe';
import { buildQuery, DexieQueryMap, runQuery } from './dexieQueryBuilder';
import { findAndCreateIndexes } from './utils/createDexieIndexes';
import { isNotNull } from './utils/isNotNull';
var ObjectID = require('bson-objectid');

type PushSelectedResults<TType> = (data: TType, objectsForId: TType[]) => void;

/**
 * Graphback provider that connnects to the Dexie database
 */
export class DexieDBDataProvider<Type = any>
  implements GraphbackDataProvider<Type> {
  protected db: Dexie;
  protected tableName: string;
  protected tableMap: ModelTableMap;

  // FIXME: what is it and why it needed?
  protected fieldTransformMap: FieldTransformMap;

  public constructor(model: ModelDefinition, db: Dexie) {
    this.verifyMongoDBPrimaryKey(model.graphqlType.name, model.primaryKey);
    this.db = db;
    this.tableMap = buildModelTableMap(model.graphqlType);
    this.tableName = this.tableMap.tableName;

    // FIXME: what is it and why it needed?
    this.fieldTransformMap = getFieldTransformations(model.graphqlType);
    findAndCreateIndexes({
      baseType: model.graphqlType,
      db,
      tableName: this.tableName,
    }).catch((e: Error) => {
      throw e;
    });
  }

  public async create(data: Type): Promise<Type> {
    const { data: createData, idField } = getDatabaseArguments(
      this.tableMap,
      data,
    );
    if (idField == null) throw Error('no idField found');
    this.fixObjectIdForDexie(createData, idField);
    const table = this.getTable();
    const maybeId: Maybe<string> = await table.add(createData);
    if (maybeId) {
      const createdType = await table.get(maybeId);
      if (createdType) return createdType;
    }

    throw new NoDataError(`Cannot create ${this.tableName}`);
  }

  public async update(
    data: Partial<Type>,
    selectedFields?: string[],
  ): Promise<Type> {
    const { idField, data: updateData } = getDatabaseArguments(
      this.tableMap,
      data,
    );

    if (idField?.value == null)
      throw new NoDataError(
        `Cannot update ${this.tableName} - missing ID field`,
      );

    this.fixObjectIdForDexie(updateData, idField);

    const table = this.getTable();
    const maybeId = await table.put(updateData);

    if (maybeId) {
      const result = await (async () => {
        if (selectedFields) {
          return await table.get(maybeId, (value) => {
            return value
              ? this.getSelectedFieldsFromType(selectedFields, value)
              : null;
          });
        } else {
          return await table.get(maybeId);
        }
      })();

      if (result) return result;
    }
    throw new NoDataError(`Cannot update ${this.tableName}`);
  }

  public async delete(
    data: Partial<Type>,
    selectedFields?: string[],
  ): Promise<Type> {
    const { idField } = getDatabaseArguments(this.tableMap, data);

    if (idField?.value == null)
      throw new NoDataError(
        `Cannot delete ${this.tableName} - missing ID field`,
      );

    this.fixObjectIdForDexie(data, idField);

    try {
      const table = this.getTable();
      const id = data[idField.name];
      const dbType = await (async () => {
        const dbObj = await table.get(id);
        if (selectedFields && dbObj) {
          return this.getSelectedFieldsFromType(selectedFields, dbObj);
        }
        return dbObj;
      })();
      await table.delete(id);
      if (dbType) return dbType;
      throw Error();
    } catch (error) {
      throw new NoDataError(
        `Cannot delete ${this.tableName} with ${JSON.stringify(data)}`,
      );
    }
  }

  public async findOne(
    filter: Partial<Type>,
    selectedFields?: string[],
  ): Promise<Type> {
    const table = this.getTable();

    const data = await table.where(filter).first();

    if (data) {
      return selectedFields
        ? this.getSelectedFieldsFromType(selectedFields, data)
        : data;
    }

    throw new NoDataError(
      `Cannot find a result for ${this.tableName} with filter: ${JSON.stringify(
        filter,
      )}`,
    );
  }

  public async findBy(
    args?: FindByArgs,
    selectedFields?: string[],
  ): Promise<Type[]> {
    /**
     * How it should work:
     * - If the search in indexed field, then
     * it uses Dexie WhereCause
     * - If the search in non indexed field, then
     * it uses Dexie Filter
     *
     * For now it uses only Filter
     *
     */
    const { idField } = getDatabaseArguments(this.tableMap);
    if (idField == null) throw Error('cannot find idField');
    const filterQuery: Maybe<DexieQueryMap> = buildQuery<Type>({
      filter: args?.filter as Maybe<QueryFilter<Type>>,
      idField,
      provider: this,
    });

    const result = await (async () => {
      if (filterQuery == null || Object.keys(filterQuery).length == 0) {
        return this.getTable().toArray();
      }
      return await runQuery({
        provider: this,
        query: filterQuery,
      }).toArray();
    })();

    const data = this.usePage(
      this.sortQuery(result, args?.orderBy),
      args?.page,
    );

    if (data)
      return selectedFields ? this.getSelectedData(data, selectedFields) : data;

    throw new NoDataError(
      `Cannot find all results for ${
        this.tableName
      } with filter: ${JSON.stringify(args?.filter)}`,
    );
  }

  public async count(filter?: QueryFilter): Promise<number> {
    const { idField } = getDatabaseArguments(this.tableMap);
    if (idField == null) throw Error('cannot find idField');

    const filterQuery = buildQuery({
      filter: filter,
      idField,
      provider: this,
    });
    if (filterQuery == null || Object.keys(filterQuery).length == 0) {
      return await this.getTable().count();
    }
    const result = runQuery({
      provider: this,
      query: filterQuery,
    });
    return await result.count();
  }

  public async batchRead(
    relationField: string,
    ids: string[],
    filter?: QueryFilter,
    selectedFields?: string[],
  ): Promise<Type[][]> {
    filter = filter || {};
    filter[relationField] = { in: ids };

    const { idField } = getDatabaseArguments(this.tableMap);
    if (idField == null) throw Error('cannot find idField');

    const filterQuery = buildQuery({
      filter: filter,
      idField,
      provider: this,
    });
    const result = await (async () => {
      if (filterQuery == null || Object.keys(filterQuery).length == 0) {
        return await this.getTable().toArray();
      }
      return await runQuery({
        provider: this,
        query: filterQuery,
      }).toArray();
    })();
    const toUseSelectedFields =
      selectedFields != null &&
      selectedFields.length != Object.keys(result[0] ?? {}).length;
    if (result) {
      // To not force check for every loop
      // we divide mothod into two - with selected fields and without
      const prepareResults = (pushFn: PushSelectedResults<Type>): Type[][] => {
        return ids.map((objId: string) => {
          const objectsForId: Type[] = [];
          for (const data of result) {
            if (data[relationField].toString() === objId.toString()) {
              pushFn(data, objectsForId);
            }
          }
          return objectsForId;
        });
      };

      const resultsById = (() => {
        const pushRawFn: PushSelectedResults<Type> = (data, objectsForId) => {
          if (selectedFields == null)
            throw Error(
              'You used wrong method. Please use pushWithSelectedFieldsFn to get results',
            );
          const cuttedType = this.getSelectedFieldsFromType(
            selectedFields,
            data,
          );
          objectsForId.push(cuttedType);
        };
        const pushWithSelectedFieldsFn: PushSelectedResults<Type> = (
          data,
          objectsForId,
        ) => {
          objectsForId.push(data);
        };

        return toUseSelectedFields
          ? prepareResults(pushWithSelectedFieldsFn)
          : prepareResults(pushRawFn);
      })();

      return resultsById;
    }
    throw new NoDataError(
      `No results for ${
        this.tableName
      } query and batch read with filter: ${JSON.stringify(filter)}`,
    );
  }
  protected getTable() {
    return this.db.table<Type, string>(this.tableName);
  }
  protected getSelectedFields(selectedFields: string[]) {
    return selectedFields?.length ? selectedFields : '*';
  }
  protected fixObjectIdForDexie(data: Partial<Type>, idField: TableID) {
    // getting id field name
    if (idField.value == null) {
      // if id is empty generate new one, as Dexie will no generate it
      // and auto increment is too simple. But IndexedDb not supported
      // ObjectId as primary key, so we will use id of IndexedDb
      // see more https://bugzilla.mozilla.org/show_bug.cgi?id=1357636
      idField.value = ObjectID().id;
      data[idField.name] = idField.value;
    } else {
      // handle case if id already an objectId
      const isValid = ObjectID.isValid(idField.value);
      if (isValid) {
        switch (typeof idField.value) {
          case 'string':
            // nothing to change
            break;
          case 'object':
            idField.value = idField.value.id;
            data[idField.name] = idField.value;
        }
      }
    }
  }
  /**
   * in case if we request all properties then just return all
   * @param data
   * @param selectedFields
   * @returns
   */
  protected getSelectedData(
    data: Maybe<Type>[],
    selectedFields: string[],
  ): Type[] {
    const obj = data[0];
    if (obj == null) return [];
    if (Object.keys(obj).length == selectedFields.length) {
      return data.filter(isNotNull);
    }

    return data.reduce<Type[]>((acc, el) => {
      if (el) acc.push(this.getSelectedFieldsFromType(selectedFields, el));
      return acc;
    }, []);
  }
  protected getSelectedFieldsFromType(selectedFields: string[], type: Type) {
    const obj = {};
    for (const field of this.getSelectedFields(selectedFields)) {
      obj[field] = type[field];
    }
    return obj as Type;
  }
  private verifyMongoDBPrimaryKey(
    modelName: string,
    primaryKey: FieldDescriptor,
  ) {
    if (primaryKey.name === '_id' && primaryKey.type === 'GraphbackObjectID') {
      return;
    }
    throw Error(
      `Model "${modelName}" must contain a "_id: GraphbackObjectID" primary key. Visit https://graphback.dev/docs/model/datamodel#mongodb to see how to set up one for your MongoDB model.`,
    );
  }
  protected get indexedFieldsSet() {
    const isOpen = this.db['_state']['isBeingOpened'];
    if (isOpen) {
      const table = this.getTable();
      const indexesSet = new Set(table.schema.indexes.map((el) => el.name));
      indexesSet.add(table.schema.primKey.name);
      return indexesSet;
    }
    return new Set();
  }
  protected isFieldIndexed(fieldName: string) {
    return this.indexedFieldsSet.has(fieldName);
  }

  private sortQuery(query: Type[], orderBy?: Maybe<GraphbackOrderBy>): Type[] {
    if (orderBy == null) return query;
    if (orderBy.field && orderBy.field.length > 0) {
      query = query.sort((a, b) => {
        const fieldA = a[orderBy.field];
        const fieldB = b[orderBy.field];
        if (fieldA < fieldB) return -1;
        if (fieldA > fieldB) return 1;
        return 0;
      });
    }

    if (orderBy?.order?.toLowerCase() === 'desc') return query.reverse();

    return query;
  }

  private usePage(query: Type[], page?: Maybe<GraphbackPage>) {
    if (!page) return query;

    const { offset, limit } = page;

    if (offset != null && offset < 0)
      throw new Error(
        'Invalid offset value. Please use an offset of greater than or equal to 0 in queries',
      );

    if (limit != null && limit < 1)
      throw new Error(
        'Invalid limit value. Please use a limit of greater than 1 in queries',
      );

    if (limit) query.length = limit;

    if (offset) query = query.slice(offset);

    return query;
  }
}

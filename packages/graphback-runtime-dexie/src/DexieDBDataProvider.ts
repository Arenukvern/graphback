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
import { buildQuery, runQuery } from './dexieQueryBuilder';
import { findAndCreateIndexes } from './utils/createDexieIndexes';
var ObjectID = require('bson-objectid');

interface SortOrder {
  [fieldName: string]: 1 | -1;
}

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
    this.fixObjectIdForDexie(createData, idField);
    const table = this.getTable();
    const maybeId: Maybe<string> = await table.add(createData);
    if (maybeId) return await table.get(maybeId);

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

    if (!idField.value) {
      throw new NoDataError(
        `Cannot update ${this.tableName} - missing ID field`,
      );
    }

    this.fixObjectIdForDexie(updateData, idField);

    const table = this.getTable();
    const maybeId = await table.put(updateData);

    if (maybeId) {
      const result = await table.get(maybeId, (value) =>
        this.getSelectedFieldsFromType(selectedFields, value),
      );
      return result;
    }
    throw new NoDataError(`Cannot update ${this.tableName}`);
  }

  public async delete(
    data: Partial<Type>,
    selectedFields?: string[],
  ): Promise<Type> {
    const { idField } = getDatabaseArguments(this.tableMap, data);

    if (!idField.value) {
      throw new NoDataError(
        `Cannot delete ${this.tableName} - missing ID field`,
      );
    }

    this.fixObjectIdForDexie(data, idField);

    try {
      const table = this.getTable();
      const id = data[idField.name];
      const dbType = await (async () => {
        const dbObj = await table.get(id);
        return this.getSelectedFieldsFromType(selectedFields, dbObj);
      })();
      await table.delete(id);
      return dbType;
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
      return this.getSelectedFieldsFromType(selectedFields, data);
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

    const filterQuery = buildQuery({
      filter: args?.filter,
      idField,
      provider: this,
    });
    const result = runQuery({
      provider: this,
      query: filterQuery,
    });
    const data = await this.usePage(
      this.sortQuery(result, args?.orderBy),
      args?.page,
    );

    if (data) {
      // in case if we request all properties then just return all
      if (Object.keys(data[0]).length == selectedFields.length) {
        return data;
      }
      return data.map((el) =>
        this.getSelectedFieldsFromType(selectedFields, el),
      );
    }
    throw new NoDataError(
      `Cannot find all results for ${
        this.tableName
      } with filter: ${JSON.stringify(args?.filter)}`,
    );
  }

  public async count(filter?: QueryFilter): Promise<number> {
    const { idField } = getDatabaseArguments(this.tableMap);

    const filterQuery = buildQuery({
      filter: filter,
      idField,
      provider: this,
    });
    const result = runQuery({
      provider: this,
      query: filterQuery,
    });
    return await result.count();
  }

  public async batchRead(
    _relationField: string,
    _ids: string[],
    _filter?: QueryFilter,
    _selectedFields?: string[],
  ): Promise<Type[][]> {
    // filter = filter || {};
    // filter[relationField] = { in: ids };

    // const result = await this.db
    //   .collection(this.tableName)
    //   .find(buildQuery(filter), { projection })
    //   .toArray();

    // if (result) {
    //   const resultsById = ids.map((objId: string) => {
    //     const objectsForId: any = [];
    //     for (const data of result) {
    //       if (data[relationField].toString() === objId.toString()) {
    //         objectsForId.push(data);
    //       }
    //     }

    //     return objectsForId;
    //   });

    //   return resultsById as [Type[]];
    // }

    // throw new NoDataError(
    //   `No results for ${
    //     this.tableName
    //   } query and batch read with filter: ${JSON.stringify(filter)}`,
    // );
    return [];
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
        idField.value = idField.value.id;
        data[idField.name] = idField.value;
      }
    }
  }
  private getSelectedFieldsFromType(selectedFields: string[], type: Type) {
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

  private sortQuery(
    query: Cursor<any>,
    orderBy: GraphbackOrderBy,
  ): Cursor<any> {
    const sortOrder: SortOrder = {};
    if (orderBy) {
      if (orderBy.field) {
        sortOrder[orderBy.field] = 1;
      }
      if (orderBy.order) {
        if (orderBy.order.toLowerCase() === 'desc') {
          sortOrder[orderBy.field] = -1;
        }
      }
    }

    return query.sort(sortOrder);
  }

  private usePage(query: Cursor<any>, page?: GraphbackPage) {
    if (!page) {
      return query.toArray();
    }

    const { offset, limit } = page;

    if (offset < 0) {
      throw new Error(
        'Invalid offset value. Please use an offset of greater than or equal to 0 in queries',
      );
    }

    if (limit < 1) {
      throw new Error(
        'Invalid limit value. Please use a limit of greater than 1 in queries',
      );
    }

    if (limit) {
      query = query.limit(limit);
    }
    if (offset) {
      query = query.skip(offset);
    }

    return query.toArray();
  }
}

import {
  buildModelTableMap,
  FieldDescriptor,
  FieldTransformMap,
  FindByArgs,
  getDatabaseArguments,
  getFieldTransformations,
  GraphbackDataProvider,
  ModelDefinition,
  ModelTableMap,
  NoDataError,
  QueryFilter,
} from '@graphback/core';
import Dexie from 'dexie';
import { Maybe } from 'graphql/jsutils/Maybe';
import { findAndCreateIndexes } from './utils/createIndexes';
// interface SortOrder {
//   [fieldName: string]: 1 | -1;
// }

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
    // getting id field name
    const { data: createData } = getDatabaseArguments(this.tableMap, data);
    const table = this.db.table<Type, string>(this.tableName);
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
    try {
      const table = this.getTable();
      const id = data[idField.value];
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
    _args?: FindByArgs,
    _selectedFields?: string[],
  ): Promise<Type[]> {
    // const filterQuery = buildQuery(args?.filter);

    // const compare = (arg: Partial<Type>) => {
    //   const objToCompare = {};
    //   for (const field of Object.keys(filter)) {
    //     objToCompare[field] = arg[field];
    //   }
    //   return _.isEqual(objToCompare, filter);
    // };
    // TODO: implement query builder

    // const query = this.getTable().find(filterQuery, { projection });
    // const data = await this.usePage(
    //   this.sortQuery(query, args?.orderBy),
    //   args?.page,
    // );

    // if (data) {
    //   return data.map((el) =>
    //     this.getSelectedFieldsFromType(selectedFields, el),
    //   );
    // }
    // throw new NoDataError(
    //   `Cannot find all results for ${
    //     this.tableName
    //   } with filter: ${JSON.stringify(args?.filter)}`,
    // );
    return [];
  }

  public async count(_filter?: QueryFilter): Promise<number> {
    // return await this.getTable().where(buildQuery(filter)).count();
    return await this.getTable().count();
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

  // private sortQuery(
  //   _query: Cursor<any>,
  //   _orderBy: GraphbackOrderBy,
  // ): Cursor<any> {
  //   const sortOrder: SortOrder = {};
  //   if (orderBy) {
  //     if (orderBy.field) {
  //       sortOrder[orderBy.field] = 1;
  //     }
  //     if (orderBy.order) {
  //       if (orderBy.order.toLowerCase() === 'desc') {
  //         sortOrder[orderBy.field] = -1;
  //       }
  //     }
  //   }

  //   return query.sort(sortOrder);
  // }

  // private usePage(query: Cursor<any>, page?: GraphbackPage) {
  //   if (!page) {
  //     return query.toArray();
  //   }

  //   const { offset, limit } = page;

  //   if (offset < 0) {
  //     throw new Error(
  //       'Invalid offset value. Please use an offset of greater than or equal to 0 in queries',
  //     );
  //   }

  //   if (limit < 1) {
  //     throw new Error(
  //       'Invalid limit value. Please use a limit of greater than 1 in queries',
  //     );
  //   }

  //   if (limit) {
  //     query = query.limit(limit);
  //   }
  //   if (offset) {
  //     query = query.skip(offset);
  //   }

  //   return query.toArray();
  // }
}

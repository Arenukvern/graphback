import { SchemaCRUDPlugin } from '@graphback/codegen-schema';
import { GraphbackCoreMetadata, Maybe } from '@graphback/core';
import Dexie, { IndexSpec, Table } from 'dexie';
import { buildSchema } from 'graphql';
import { DexieDBDataProvider } from '../src/DexieDBDataProvider';
import { findDexieTableFieldIndex } from '../src/utils/createDexieIndexes';

Dexie.dependencies.indexedDB = require('fake-indexeddb');
Dexie.dependencies.IDBKeyRange = require('fake-indexeddb/lib/FDBKeyRange');
// https://dexie.org/docs/Dexie/Dexie.debug
Dexie['debug'] = true;

export interface Context {
  providers: { [modelname: string]: DexieDBDataProvider };
  db: Dexie;
  findIndex(arg: {
    tableName: string;
    indexName: string;
  }): Promise<Maybe<IndexSpec>>;
}

export async function createTestingContext(
  schemaStr: string,
  config?: { seedData: { [table: string]: any[] } },
): Promise<Context> {
  // Setup graphback
  const schema = buildSchema(schemaStr);

  const db = new Dexie('test');

  const defautConfig = {
    create: true,
    update: true,
    findOne: true,
    find: true,
    delete: true,
    subCreate: true,
    subUpdate: true,
    subDelete: true,
  };

  const metadata = new GraphbackCoreMetadata(
    {
      crudMethods: defautConfig,
    },
    schema,
  );

  const schemaGenerator = new SchemaCRUDPlugin();
  schemaGenerator.transformSchema(metadata);

  const providers: { [name: string]: DexieDBDataProvider } = {};
  const models = metadata.getModelDefinitions();
  for (const model of models) {
    providers[model.graphqlType.name] = new DexieDBDataProvider(model, db);
  }

  // if seed data is supplied, insert it into tables
  if (config?.seedData) {
    db.open();
    const tableNames = Object.keys(config.seedData);
    for (const tableName of tableNames) {
      for (const element of config.seedData[tableName]) {
        const provider = providers[tableName];
        await provider?.create(element);
      }
    }
  }
  const waitTime = 2000;
  const findIndex: Context['findIndex'] = async ({ indexName, tableName }) => {
    const startTime = Date.now();

    do {
      const tables = db.tables;
      const tableFound = tables.find(
        (table: Table) => table.name === tableName,
      );
      if (tableFound) {
        return findDexieTableFieldIndex({
          indexName,
          table: tableFound,
        });
      }
    } while (Date.now() - startTime < waitTime);
    return null;
  };

  return { providers, db, findIndex };
}

import { GraphbackDataProvider, ModelDefinition } from '@graphback/core';
import Dexie from 'dexie';
import { DexieDBDataProvider } from './DexieDBDataProvider';

/**
 * Creates a new KnexDBDataProvider
 *
 * @param {Db} db - Dexie db not opened instance
 */
export function createDexieDbProvider(
  db: Dexie,
): (...args: any[]) => GraphbackDataProvider {
  return (model: ModelDefinition): GraphbackDataProvider => {
    return new DexieDBDataProvider(model, db);
  };
}

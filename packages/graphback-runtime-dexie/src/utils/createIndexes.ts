import { Maybe, parseRelationshipAnnotation } from '@graphback/core';
import Dexie, { IndexSpec } from 'dexie';
import { GraphQLField, GraphQLObjectType } from 'graphql';
import { parseMetadata } from 'graphql-metadata';

interface DbTableCreate {
  db: Dexie;
  tableName: string;
}
interface ApplyIndexes extends DbTableCreate {
  indexes: Partial<IndexSpec>[];
}

interface FindAndCreateIndexes extends DbTableCreate {
  baseType: GraphQLObjectType;
}

export async function findAndCreateIndexes({
  baseType,
  db,
  tableName,
}: FindAndCreateIndexes) {
  const indexes = getIndexFields(baseType);
  await applyIndexes({ indexes, db, tableName });
}

/**
 * Should get correct indexes for filds based on
 * IndexSpec. See more at https://dexie.org/docs/Version/Version.stores()
 * @param indexes
 * @returns {string}
 */
export const getIndexedFieldsString = (
  indexes: Partial<IndexSpec>[],
): string => {
  const strArr: Maybe<string>[] = indexes.reduce((indexesArr, indexSpec) => {
    // see more at https://dexie.org/docs/Version/Version.stores()
    const getSymbol = (field: keyof IndexSpec) => {
      switch (field) {
        case 'auto':
          return '++';
        case 'compound':
          return '';
        case 'keyPath':
          return '';
        case 'multi':
          return '*';
        case 'name':
          return '';
        case 'src':
          return '';
        case 'unique':
          return '&';
      }
    };
    const getFieldSymbol = () => {
      for (const [field, value] of Object.entries(indexSpec)) {
        if (value != null) {
          const sym = getSymbol(field as keyof IndexSpec);
          return sym;
        }
      }
      return '';
    };
    const indexName = indexSpec.name;
    const sym = getFieldSymbol();
    const finalIndex = `${sym}${indexName}`;
    indexesArr.push(finalIndex);
    return indexesArr;
  }, []);

  const strIndexes = strArr
    .filter((el) => {
      if (el == null || el.length == 0) return false;
      return true;
    })
    .join(',');

  return strIndexes;
};

export async function applyIndexes({ tableName, db, indexes }: ApplyIndexes) {
  if (indexes.length === 0) return;

  try {
    db.version(db.verno).stores({
      [tableName]: getIndexedFieldsString(indexes),
    });
  } catch (error) {
    console.warn('applyIndexes raw error', error);
    let message: string;
    if (error.codeName === 'IndexOptionsConflict') {
      // This Index exists but with a different name
      message = `${error.errmsg}, try dropping the existing index or using the same name.`;
    }
    if (error.codeName === 'IndexKeySpecsConflict') {
      // Another Index with same name exists
      message = `${error.errmsg}, try manually dropping the existing index or using a different name.`;
    }
    if (error.codeName === 'InvalidIndexSpecificationOption') {
      // Invalid options passed to @index
      message = `${error.errmsg}, try double checking what you are passing to @index.`;
    }

    if (message === undefined) {
      message = `Graphback was unable to create the specified indexes: ${error.message}.`;
    }

    // eslint-disable-next-line no-console
    console.error(
      `${message} If all else fails, try recreating the index manually.`,
    );
  }
}

export function getIndexFields(
  baseType: GraphQLObjectType,
): Partial<IndexSpec>[] {
  const res: Partial<IndexSpec>[] = [];
  const fields = baseType.getFields();
  for (const field of Object.values(fields)) {
    // Add Index on relation fields
    const relationIndex = getRelationIndex(field);
    if (relationIndex != null) {
      res.push(relationIndex);
      continue;
    }

    // Add custom Index if found e.g. @index
    const customIndex = getCustomIndex(field);
    if (customIndex !== undefined) {
      res.push(customIndex);
    }
  }
  return res;
}

export function getCustomIndex(
  field: GraphQLField<any, any>,
): Maybe<Partial<IndexSpec>> {
  const indexMetadata: any = parseMetadata('index', field.description);
  if (indexMetadata) {
    const indexSpec: IndexSpec = Object.assign(
      {
        key: {
          [field.name]: 1,
        },
      },
      indexMetadata,
    );

    return indexSpec;
  } else {
    return undefined;
  }
}

export function getRelationIndex(
  field: GraphQLField<any, any>,
): Partial<IndexSpec> {
  const relationshipData = parseRelationshipAnnotation(field.description);
  if (
    relationshipData?.kind &&
    ['manyToOne', 'manyToMany'].includes(relationshipData.kind)
  ) {
    return {
      name: relationshipData.field,
    };
  } else {
    return undefined;
  }
}

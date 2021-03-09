import { Maybe, parseRelationshipAnnotation } from '@graphback/core';
import Dexie, { IndexSpec } from 'dexie';
import { GraphQLField, GraphQLObjectType } from 'graphql';
import { parseMetadata } from 'graphql-metadata';
import { toString } from 'lodash';
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
  const strArr = indexes.reduce<Maybe<string>[]>((indexesArr, indexSpec) => {
    if (indexSpec.compound) {
      const arr =
        indexSpec.keyPath != null && Array.isArray(indexSpec.keyPath)
          ? indexSpec.keyPath
          : [indexSpec.keyPath];
      const finalStr = `[${arr.join('+')}]`;
      indexesArr.push(finalStr);
      return indexesArr;
    }

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
      let sym = '';
      for (const [field, value] of Object.entries(indexSpec)) {
        if (value != null) {
          const temp = getSymbol(field as keyof IndexSpec);
          sym = `${sym}${temp}`;
        }
      }
      return sym;
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
  try {
    const strIndexedFields = getIndexedFieldsString(indexes);
    if (strIndexedFields.length === 0)
      throw Error('At least one primary key must bew defined.');
    db.version(db.verno == null || db.verno < 1 ? 1 : db.verno).stores({
      [tableName]: strIndexedFields,
    });
  } catch (error) {
    // let message: string;
    // if (error.codeName === 'IndexOptionsConflict') {
    //   // This Index exists but with a different name
    //   message = `${error.errmsg}, try dropping the existing index or using the same name.`;
    // }
    // if (error.codeName === 'IndexKeySpecsConflict') {
    //   // Another Index with same name exists
    //   message = `${error.errmsg}, try manually dropping the existing index or using a different name.`;
    // }
    // if (error.codeName === 'InvalidIndexSpecificationOption') {
    //   // Invalid options passed to @index
    //   message = `${error.errmsg}, try double checking what you are passing to @index.`;
    // }

    // if (message == undefined) {
    //   message = `Graphback was unable to create the specified indexes: ${error.message}.`;
    // }
    // TODO: implement erorrs
    // eslint-disable-next-line no-console
    console.error(
      `${error} If all else fails, try recreating the index manually.`,
    );
  }
}

export function getIndexFields(
  baseType: GraphQLObjectType,
): Partial<IndexSpec>[] {
  const res: Partial<IndexSpec>[] = [];
  const reserveFieldPrimaryKeys: Partial<IndexSpec>[] = [];
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
    if (customIndex != null) {
      res.push(customIndex);
      continue;
    }

    const fieldType = toString(JSON.parse(JSON.stringify(field.type)));
    if (fieldType.includes('GraphbackObjectID')) {
      const maybeId: Partial<IndexSpec> = {
        name: field.name,
        unique: true,
      };
      if (field.name === '_id' || field.name === 'id') {
        res.push(maybeId);
      } else {
        reserveFieldPrimaryKeys.push(maybeId);
      }
    }
  }
  if (res.length == 0) {
    if (reserveFieldPrimaryKeys.length == 0)
      throw Error('Model must have at least one primary key!');
    // push if any keys were reserved
    res.push(reserveFieldPrimaryKeys[0]);
  }
  return res;
}

export function getCustomIndex(
  field: GraphQLField<any, any>,
): Maybe<Partial<IndexSpec>> {
  const indexMetadata = field.description
    ? parseMetadata('index', field.description)
    : null;
  if (indexMetadata) {
    const indexSpec: Partial<IndexSpec> = {
      name: field.name,
    };
    if (typeof indexMetadata === 'object') {
      // unwrappinng case of proxy
      const obj = JSON.parse(JSON.stringify(indexMetadata));
      if (obj.hasOwnProperty('key')) {
        const key = obj['key'] as Maybe<Record<string, string>>;
        if (key != null) {
          indexSpec.keyPath = Object.keys(key);
          switch (indexSpec.keyPath.length) {
            case 2:
              indexSpec.compound = true;
              break;
            case 0:
              // nothing
              break;
            default:
              console.error(
                `Custom index for field: ${field.name} have ${indexSpec.keyPath.length} keys but can have only 2`,
              );
          }
        }
      }
    }
    return indexSpec;
  } else {
    return null;
  }
}

export function getRelationIndex(
  field: GraphQLField<any, any>,
): Maybe<Partial<IndexSpec>> {
  const relationshipData = field.description
    ? parseRelationshipAnnotation(field.description)
    : null;
  if (
    relationshipData?.kind &&
    ['manyToOne', 'manyToMany'].includes(relationshipData.kind)
  ) {
    return {
      name: relationshipData.key,
    };
  } else {
    return null;
  }
}

export const findDexieTableFieldIndex = ({
  indexName,
  table,
}: {
  table: Dexie.Table;
  indexName: string;
}): Maybe<IndexSpec> => {
  const indexes = table.schema.indexes;
  const foundIndex = indexes.find((index) => index.name == indexName);
  if (foundIndex) return foundIndex;
  // check primary key as it will be indexed, but not included in indexes
  const primaryKey = table.schema.primKey;
  if (primaryKey.name === indexName) return primaryKey;
  return null;
};

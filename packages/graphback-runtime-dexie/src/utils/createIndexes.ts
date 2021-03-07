import Dexie, { IndexSpec } from 'dexie';
import { GraphQLField, GraphQLObjectType } from 'graphql';
import { parseMetadata } from 'graphql-metadata';
export async function findAndCreateIndexes(
  baseType: GraphQLObjectType,
  table: Dexie.Table,
) {
  const indexes = getIndexFields(baseType);
  await applyIndexes(indexes, table);
}

export async function applyIndexes(indexes: IndexSpec[], table: Dexie.Table) {
  if (indexes.length === 0) return;

  try {
    // collection.createIndexes(indexes).catch((error: any) => {
    // });
  } catch (error) {
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

export function getIndexFields(baseType: GraphQLObjectType): IndexSpec[] {
  const res: IndexSpec[] = [];
  // const fields = baseType.getFields();
  // Object.keys(fields).forEach((k: string) => {
  //   const field = fields[k];

  //   // Add Index on relation fields
  //   const relationIndex = getRelationIndex(field);
  //   if (relationIndex !== undefined) {
  //     res.push(relationIndex);

  //     return;
  //   }

  //   // Add custom Index if found e.g. @index
  //   const customIndex = getCustomIndex(field);
  //   if (customIndex !== undefined) {
  //     res.push(customIndex);
  //   }
  // });

  return res;
}

export function getCustomIndex(field: GraphQLField<any, any>): IndexSpec {
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

// export function getRelationIndex(field: GraphQLField<any, any>): IndexSpec {
//   const relationshipData = parseRelationshipAnnotation(field.description);
//   if (
//     relationshipData?.kind &&
//     ['manyToOne', 'manyToMany'].includes(relationshipData.kind)
//   ) {
//     return {
//       // key: {
//       //   [relationshipData.key]: 1,
//       // },
//     };
//   } else {
//     return undefined;
//   }
// }

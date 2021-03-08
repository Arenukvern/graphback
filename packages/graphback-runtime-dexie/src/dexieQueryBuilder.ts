import { QueryFilter, TableID } from '@graphback/core';
import * as escapeRegex from 'escape-string-regexp';
import { Maybe } from 'graphql/jsutils/Maybe';
import { toString } from 'lodash';
import { DexieDBDataProvider } from './DexieDBDataProvider';

export enum RootQueryOperator {
  'and' = 'and',
  'or' = 'or',
  'not' = 'not',
}
const RootQueryOperatorSet = new Set(Object.keys(RootQueryOperator));
const tsRootQueryOperator: Record<RootQueryOperator, string> = {
  and: '&&',
  not: '!=',
  or: '||',
};

const isRootOperator = (key: string): key is RootQueryOperator =>
  RootQueryOperatorSet.has(key);

export enum GraphbackQueryOperator {
  'eq' = 'eq',
  'ne' = 'ne',
  'lt' = 'lt',
  'le' = 'le',
  'gt' = 'gt',
  'ge' = 'ge',
  'between' = 'between',
  'in' = 'in',
  'contains' = 'contains',
  'startsWith' = 'startsWith',
  'endsWith' = 'endsWith',
}
const tsGraphbackQueryOperator: Record<GraphbackQueryOperator, string> = {
  eq: '==',
  ne: '!=',
  lt: '<',
  le: '<=',
  gt: '>',
  ge: '>=',
  between: 'between',
  in: 'in',
  contains: 'contains',
  startsWith: 'startsWith',
  endsWith: 'endsWith',
};

const GraphbackQueryOperatorSet = new Set(Object.keys(GraphbackQueryOperator));
const isGraphbackQueryOperator = (key: string): key is GraphbackQueryOperator =>
  GraphbackQueryOperatorSet.has(key);
const isPrimitive = (test: any): boolean =>
  test instanceof RegExp || test !== Object(test);

export type DexieWhereClauses = keyof Dexie.WhereClause;

export enum DexieFilterTypes {
  'Filter' = 'Filter',
  'WhereClause' = 'WhereClause',
}
export interface DexieQueryMapParam {
  isIndexed: boolean;
  filterType: DexieFilterTypes;
  whereClauseOperator?: Maybe<DexieWhereClauses>;
  queryOperator?: Maybe<GraphbackQueryOperator>;
  rootOperator?: Maybe<RootQueryOperator>;
  value: Maybe<unknown>;
  fieldName: string;
}
export interface DexieQueryMap {
  [fieldName: string]: Maybe<Maybe<DexieQueryMapParam>[]>;
}
// A map of functions to transform mongodb incompatible operators
// Each function returns pairs of a key and an object for that key
// const operatorTransform: {
//   [operator: string]: OperatorTransformFunction;
// } = {
//   not: (value: any): OperatorTransform => {
//     if (typeof value === 'object' && !Array.isArray(value)) {
//       value = [value];
//     }

//     return [['$not', value]];
//   },
//   between: (values: [any, any]): OperatorTransform => {
//     values.sort();

//     return [
//       [operatorMap.ge, values[0]],
//       [operatorMap.le, values[1]],
//     ];
//   },
//   nbetween: (values: [any, any]): OperatorTransform => {
//     values.sort();

//     return [
//       [
//         '$not',
//         {
//           [operatorMap.ge]: values[0],
//           [operatorMap.le]: values[1],
//         },
//       ],
//       ['$exists', true],
//     ];
//   },
//   contains: (value: string): OperatorTransform => {
//     return [['$regex', new RegExp(escapeRegex(value), 'g')]];
//   },
//   startsWith: (value: string): OperatorTransform => {
//     return [['$regex', new RegExp(`^${escapeRegex(value)}`, 'g')]];
//   },
//   endsWith: (value: string): OperatorTransform => {
//     return [['$regex', new RegExp(`${escapeRegex(value)}$`, 'g')]];
//   },
// };

// function isQueryOperator(key: string): key is QueryOperator {
//   return operators.includes(key as QueryOperator);
// }

/**
 * Map Graphback Filter to MongoDb QueryFilter
 *
 * @param {any} filter
 */
// function mapQueryFilterToMongoFilterQuery(filter: any) {
//   if (filter === undefined) {
//     return undefined;
//   }

//   if (Array.isArray(filter)) {
//     return filter.map(mapQueryFilterToMongoFilterQuery);
//   } else if (!isPrimitive(filter)) {
//     return Object.keys(filter).reduce(
//       (obj: Record<string, Maybe<unknown>>, key: string) => {
//         const propKey = operatorMap[key] || key;
//         let propVal: any;
//         if (isQueryOperator(propKey)) {
//           propVal = filter[key];
//         } else {
//           propVal = mapQueryFilterToMongoFilterQuery(filter[key]);
//         }

//         if (operatorTransform[propKey]) {
//           const transforms = operatorTransform[key](propVal);

//           transforms.forEach((t: [QueryOperator, any]) => {
//             const [operator, value] = t;
//             propVal = value;
//             obj[operator] = propVal;
//           });
//         } else {
//           obj[propKey] = propVal;
//         }

//         return obj;
//       },
//       {},
//     );
//   }

//   return filter;
// }

interface QueryBuilder<TType> {
  filter: QueryFilter<TType>;
  fieldId: TableID;
  provider: DexieDBDataProvider<TType>;
}

/**
 * Work principle:
 * 1. Flat filter to DexieQueryMap (QueryBuilder)
 * 2. Execute DexieQueryMap (QueryRunner)
 * @param filter
 */
export const queryBuilder = <TType>({
  filter,
  fieldId,
  provider,
}: QueryBuilder<TType>): Maybe<DexieQueryMap> => {
  if (filter == null) return undefined;

  const dexieQueryMap: DexieQueryMap = {};
  const fillField = (
    fieldName: string,
    fieldState?: Maybe<Partial<DexieQueryMapParam>>,
  ) => {
    if (isRootOperator(fieldName)) {
      return {
        ...fieldState,
        rootOperator: fieldName,
      };
    }
    if (isGraphbackQueryOperator(fieldName)) {
      return {
        ...fieldState,
        queryOperator: fieldName,
      };
    }

    // suppose that field is table.field name
    // then we need to:
    return {
      ...fieldState,
      filterType: DexieFilterTypes.Filter,
      fieldName,
    };
  };
  const flatifyValues = (
    filterValue: QueryFilter<TType>,
    fieldState?: Maybe<Partial<DexieQueryMapParam>>,
  ) => {
    if (isPrimitive(filterValue)) {
      const fieldName = fieldState?.fieldName ?? fieldId.name;
      const isFieldIndexed = provider['isFieldIndexed'](fieldName);
      const arr = dexieQueryMap[fieldName] ?? [];
      arr.push({
        ...fieldState,
        // FIXME: when WhereClause will be ready replace to
        // isFieldIndexed ? DexieFilterTypes.WhereClause : DexieFilterTypes.Filter
        filterType: DexieFilterTypes.Filter,
        isIndexed: isFieldIndexed,
        value: filterValue,
        fieldName,
      });
      dexieQueryMap[fieldName] = arr;
    } else {
      for (const [fieldName, value] of Object.entries(filterValue)) {
        if (Array.isArray(value)) {
          const arrFieldState = fillField(fieldName, fieldState);
          // TODO: implement between and array conditions
          for (const val of value) {
            flatifyValues(val, arrFieldState);
          }
          continue;
        }
        const updatedState = fillField(fieldName, fieldState);

        // suppose that field is table.field name
        // then we need to:
        flatifyValues(value, updatedState);
      }
    }
  };
  flatifyValues(filter);
  return dexieQueryMap;
};

/**
 * Build a Dexie query from a Graphback filter
 *
 * @param {QueryFilter} filter
 */
export const buildQuery = <TType = any>(
  arg: QueryBuilder<TType>,
  // TODO: add return type
) => queryBuilder(arg);

interface RunQuery<TType> {
  query: DexieQueryMap;
  provider: DexieDBDataProvider<TType>;
}
export const runQuery = <TType = any>({ provider, query }: RunQuery<TType>) => {
  const table = provider['getTable']();
  const queryEntires = Object.entries(query);
  table.filter((tableEntry) => {
    const isPass = validateTableEntry({
      queryEntires,
      tableEntry,
    });
    return isPass;
  });
};

export function convertFieldQueryToStringCondition({
  condition,
  fieldQuery,
  tableValue,
}: {
  tableValue: unknown;
  condition: string;
  fieldQuery: DexieQueryMapParam;
}): { condition: string; prePostfix: string } {
  const compareValue = fieldQuery.value;
  if (compareValue == null)
    return { condition, prePostfix: RootQueryOperator.and };
  let prePostfix = '';
  if (fieldQuery.rootOperator != null) {
    prePostfix = `${prePostfix}${tsRootQueryOperator[fieldQuery.rootOperator]}`;
  } else {
    prePostfix = `${prePostfix}${tsRootQueryOperator.and}`;
  }
  let valueComparation: string = '';
  let isValidValue: boolean = false;
  if (fieldQuery.queryOperator != null) {
    const strCompareValue = toString(fieldQuery.value);
    const validateByMatch = (escaptedRegex: string) => {
      const strTableValue = toString(tableValue);
      return (
        (strTableValue.match(new RegExp(escaptedRegex, 'gim')) ?? []).length > 0
      );
    };
    switch (fieldQuery.queryOperator) {
      case GraphbackQueryOperator.eq:
      case GraphbackQueryOperator.ge:
      case GraphbackQueryOperator.gt:
      case GraphbackQueryOperator.le:
      case GraphbackQueryOperator.lt:
      case GraphbackQueryOperator.ne:
        const operator = tsGraphbackQueryOperator[fieldQuery.queryOperator];
        valueComparation = `${tableValue} ${operator} ${compareValue}`;
        break;
      case GraphbackQueryOperator.in:
        break;
      case GraphbackQueryOperator.between:
        // TODO: implement
        break;
      case GraphbackQueryOperator.contains:
        isValidValue = validateByMatch(escapeRegex(strCompareValue));
        break;
      case GraphbackQueryOperator.endsWith:
        isValidValue = validateByMatch(`${escapeRegex(strCompareValue)}$`);
        break;
      case GraphbackQueryOperator.startsWith:
        isValidValue = validateByMatch(`^${escapeRegex(strCompareValue)}`);
        break;
      default:
        throw Error(`Operator ${fieldQuery.queryOperator} is not supported!`);
    }
  }
  const finalValueComparation = valueComparation.length
    ? valueComparation
    : isValidValue;
  // FIXME: seems like there is an error
  if (condition.length == 0) {
    condition = `${condition}${finalValueComparation}`;
  } else {
    condition = `${condition}${prePostfix}${finalValueComparation}`;
  }
  return { condition, prePostfix };
}

export function validateTableEntry<TType = any>({
  tableEntry,
  queryEntires,
}: {
  tableEntry: TType;
  queryEntires: [DexieQueryMapParam['fieldName'], DexieQueryMapParam[]][];
}) {
  const fnConditions: string[] = [];
  for (const [fieldName, fieldQueries] of queryEntires) {
    const filterType = fieldQueries[0].filterType;
    switch (filterType) {
      case DexieFilterTypes.WhereClause:
        // TODO:
        break;
      case DexieFilterTypes.Filter:
      default:
        const tableValue = tableEntry[fieldName];
        const fnQueryCondition = fieldQueries.reduce(
          (condition, fieldQuery) => {
            // depending from condition it can be or post or prefix
            return convertFieldQueryToStringCondition({
              tableValue,
              condition: condition.condition,
              fieldQuery,
            });
          },
          { condition: '', prePostfix: '' },
        );
        fnConditions.push(`( ${fnQueryCondition.condition} )`);
    }
  }
  const fnBody = `function(){return ${fnConditions.join(
    ` ${tsRootQueryOperator[RootQueryOperator.and]} `,
  )};}`;
  const fn = new Function('return ' + fnBody);
  return fn()();
}

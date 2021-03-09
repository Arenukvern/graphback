import { QueryFilter, TableID } from '@graphback/core';
import { Collection } from 'dexie';
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
// A map to transform Graphql operators to typescript
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
// A map to transform Graphql operators to typescript
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

interface QueryBuilder<TType> {
  filter: Maybe<QueryFilter<TType>>;
  idField: TableID;
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
  idField,
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
      const fieldName = fieldState?.fieldName ?? idField.name;
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
          if (arrFieldState.queryOperator == GraphbackQueryOperator.between) {
            const [first, second] = value;
            flatifyValues(first, {
              ...arrFieldState,
              queryOperator: GraphbackQueryOperator.ge,
            });
            flatifyValues(second, {
              ...arrFieldState,
              queryOperator: GraphbackQueryOperator.le,
            });
          } else {
            for (const val of value) {
              flatifyValues(val, arrFieldState);
            }
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
 * Build a Dexie query from a Graphback filter.
 * To run query use runQuery
 *
 * @param {QueryFilter} filter
 */
export const buildQuery = <TType = any>(
  arg: QueryBuilder<TType>,
): Maybe<DexieQueryMap> => queryBuilder(arg);

interface RunQuery<TType> {
  query: DexieQueryMap;
  provider: DexieDBDataProvider<TType>;
}
export const runQuery = <TType = any>({
  provider,
  query,
}: RunQuery<TType>): Collection<TType, string> => {
  const table = provider['getTable']();
  const queryEntires = Object.entries(query);
  const result = table.filter((tableEntry) => {
    const isPass = validateTableEntry({
      queryEntires,
      tableEntry,
    });
    return isPass;
  });
  return result;
};

export function convertFieldQueryToStringCondition({
  condition,
  fieldQuery,
  tableValue,
}: {
  tableValue: unknown;
  condition: string;
  fieldQuery: DexieQueryMapParam;
}): { condition: string; postfix: string } {
  let prePostfix = tsRootQueryOperator.and;
  const compareValue = fieldQuery.value;
  if (compareValue == null) return { condition, postfix: prePostfix };
  if (fieldQuery.rootOperator != null) {
    prePostfix = tsRootQueryOperator[fieldQuery.rootOperator];
  }
  let valueComparation: string = '';
  let isValidValue: boolean = false;
  if (fieldQuery.queryOperator != null) {
    const strCompareValue = () => toString(fieldQuery.value);
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
        valueComparation = `"${tableValue}" ${operator} "${compareValue}"`;
        break;
      case GraphbackQueryOperator.in:
        valueComparation = `"${tableValue}" ${prePostfix} "${compareValue}"`;
        break;

      case GraphbackQueryOperator.between:
        // if we here, then something went wrong because beetwen must be divided to le ge...
        // abort
        break;
      case GraphbackQueryOperator.contains:
        isValidValue = validateByMatch(escapeRegex(strCompareValue()));
        break;
      case GraphbackQueryOperator.endsWith:
        isValidValue = validateByMatch(`${escapeRegex(strCompareValue())}$`);
        break;
      case GraphbackQueryOperator.startsWith:
        isValidValue = validateByMatch(`^${escapeRegex(strCompareValue())}`);
        break;
      default:
        throw Error(`Operator ${fieldQuery.queryOperator} is not supported!`);
    }
  }
  const finalValueComparation = valueComparation.length
    ? valueComparation
    : isValidValue;

  if (condition.length == 0) {
    condition = `${condition}${finalValueComparation}`;
  } else {
    condition = `${condition}${prePostfix}${finalValueComparation}`;
  }
  return { condition, postfix: prePostfix };
}

export function validateTableEntry<TType = any>({
  tableEntry,
  queryEntires,
}: {
  tableEntry: TType;
  queryEntires: [
    DexieQueryMapParam['fieldName'],
    Maybe<Maybe<DexieQueryMapParam>[]>,
  ][];
}) {
  const fnConditions: string[] = [];
  const queryCount = queryEntires.length;
  let i = 0;
  for (const [fieldName, fieldQueries] of queryEntires) {
    i++;
    let rootPostfix = tsRootQueryOperator.and;
    const isNotLastQuery = i != queryCount;
    if (fieldQueries == null) continue;
    const filterType = fieldQueries[0]?.filterType;
    switch (filterType) {
      case DexieFilterTypes.WhereClause:
        // TODO:
        break;
      case DexieFilterTypes.Filter:
      default:
        const tableValue = tableEntry[fieldName];
        const fnQueryCondition = fieldQueries.reduce(
          (condition, fieldQuery) => {
            if (fieldQuery == null) return condition;
            // depending from condition it can be or post or prefix
            const result = convertFieldQueryToStringCondition({
              tableValue,
              condition,
              fieldQuery,
            });
            rootPostfix = result.postfix;
            return result.condition;
          },
          '',
        );
        fnConditions.push(`( ${fnQueryCondition} )`);
    }
    if (isNotLastQuery) {
      fnConditions.push(rootPostfix);
    }
  }
  const fnBody = `function(){return ${fnConditions.join(` `)};}`;
  const fn = new Function('return ' + fnBody);
  return fn()();
}

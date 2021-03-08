import { QueryFilter, TableID } from '@graphback/core';
import * as escapeRegex from 'escape-string-regexp';
import { Maybe } from 'graphql/jsutils/Maybe';
import { DexieDBDataProvider } from './DexieDBDataProvider';

type RootQueryOperator = '$and' | '$or' | '$not';
const operators = [
  '$exists',
  '$le',
  '$ge',
  '$gte',
  '$regex',
  '$ne',
  '$eq',
  '$lte',
  '$lt',
  '$gt',
  '$in',
] as const;
type QueryOperator = typeof operators[number];

const operatorMap: { [key: string]: QueryOperator | RootQueryOperator } = {
  and: '$and',
  or: '$or',
  ne: '$ne',
  eq: '$eq',
  le: '$lte',
  lt: '$lt',
  ge: '$gte',
  gt: '$gt',
  in: '$in',
};

type OperatorTransform = [QueryOperator | RootQueryOperator, any][];

type OperatorTransformFunction = (value: any) => OperatorTransform;

type GraphbackQueryOperators =
  | 'eq'
  | 'ne'
  | 'lt'
  | 'le'
  | 'gt'
  | 'ge'
  | 'between'
  | 'in'
  | 'contains'
  | 'startsWith'
  | 'endsWith';

export type DexieWhereClauses = keyof Dexie.WhereClause;
export enum DexieFilterTypes {
  'Filter',
  'WhereClause',
}
export interface DexieQueryMapParam {
  isIndexed: boolean;
  filterType: DexieFilterTypes;
  whereClauseOperator?: Maybe<DexieWhereClauses>;
  queryOperator?: Maybe<RootQueryOperator | GraphbackQueryOperators>;
  value: Maybe<unknown>;
}
export interface DexieQueryMap {
  [fieldName: string]: Maybe<DexieQueryMapParam>;
}
// A map of functions to transform mongodb incompatible operators
// Each function returns pairs of a key and an object for that key
const operatorTransform: {
  [operator: string]: OperatorTransformFunction;
} = {
  not: (value: any): OperatorTransform => {
    if (typeof value === 'object' && !Array.isArray(value)) {
      value = [value];
    }

    return [['$nor', value]];
  },
  between: (values: [any, any]): OperatorTransform => {
    values.sort();

    return [
      [operatorMap.ge, values[0]],
      [operatorMap.le, values[1]],
    ];
  },
  nbetween: (values: [any, any]): OperatorTransform => {
    values.sort();

    return [
      [
        '$not',
        {
          [operatorMap.ge]: values[0],
          [operatorMap.le]: values[1],
        },
      ],
      ['$exists', true],
    ];
  },
  contains: (value: string): OperatorTransform => {
    return [['$regex', new RegExp(escapeRegex(value), 'g')]];
  },
  startsWith: (value: string): OperatorTransform => {
    return [['$regex', new RegExp(`^${escapeRegex(value)}`, 'g')]];
  },
  endsWith: (value: string): OperatorTransform => {
    return [['$regex', new RegExp(`${escapeRegex(value)}$`, 'g')]];
  },
};

function isPrimitive(test: any): boolean {
  return test instanceof RegExp || test !== Object(test);
}

function isQueryOperator(key: string): key is QueryOperator {
  return operators.includes(key as QueryOperator);
}

/**
 * Map Graphback Filter to MongoDb QueryFilter
 *
 * @param {any} filter
 */
function mapQueryFilterToMongoFilterQuery(filter: any) {
  if (filter === undefined) {
    return undefined;
  }

  if (Array.isArray(filter)) {
    return filter.map(mapQueryFilterToMongoFilterQuery);
  } else if (!isPrimitive(filter)) {
    return Object.keys(filter).reduce((obj: any, key: string) => {
      const propKey = operatorMap[key] || key;
      let propVal: any;
      if (isQueryOperator(propKey)) {
        propVal = filter[key];
      } else {
        propVal = mapQueryFilterToMongoFilterQuery(filter[key]);
      }

      if (operatorTransform[propKey]) {
        const transforms = operatorTransform[key](propVal);

        transforms.forEach((t: [QueryOperator, any]) => {
          const [operator, value] = t;
          propVal = value;
          obj[operator] = propVal;
        });
      } else {
        obj[propKey] = propVal;
      }

      return obj;
    }, {});
  }

  return filter;
}

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
}: // TODO: add return type
QueryBuilder<TType>) => {
  const dexieQueryMap: DexieQueryMap = {};
  if (isPrimitive(filter)) {
    dexieQueryMap[fieldId.name] = {
      filterType: DexieFilterTypes.WhereClause,
      isIndexed: true,
      value: filter,
    };
  } else {
    for (const [field, value] of Object.entries(filter)) {
      switch (true) {
        case isRootOperator(field):
          break;
        case isGraphbackQueryOperator(field):
          break;
        default:
          // suppose that field is table.field name
          // then we need to:
          // TODO: check is this field indexed
          const isFieldIndexed = provider['isFieldIndexed'](field);
          // TODO: get query operator
          // TODO: get value
          dexieQueryMap[field] = {
            isIndexed: isFieldIndexed,
            // FIXME: when WhereClause will be ready replace to
            // isFieldIndexed ? DexieFilterTypes.WhereClause : DexieFilterTypes.Filter
            filterType: DexieFilterTypes.Filter,
            value,
          };
          break;
      }
    }
  }
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

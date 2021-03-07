import { QueryFilter } from '@graphback/core';
import { WhereClause } from 'dexie';
import * as escapeRegex from 'escape-string-regexp';

/** [above()](/docs/WhereClause/WhereClause.above())
Returns a collection of objects where index is above given key
**/
above;
/**[aboveOrEqual()](/docs/WhereClause/WhereClause.aboveOrEqual())
Returns a collection of objects where index is above or equal given key
**/
aboveOrEqual;
/** [anyOf()](/docs/WhereClause/WhereClause.anyOf())
Returns a collection of objects where index is equal to any of the keys in given array
**/
anyOf;
/**[anyOfIgnoreCase()](/docs/WhereClause/WhereClause.anyOfIgnoreCase())
Returns a collection of objects where index matches any of given strings, ignoring case differences.
**/
anyOfIgnoreCase;
/**[below()](/docs/WhereClause/WhereClause.below())
Returns a collection of objects where index is below given key
**/
below;
/**[belowOrEqual()](/docs/WhereClause/WhereClause.belowOrEqual())
Returns a collection of objects where index is below or equal given key
**/
belowOrEqual;
/**[between()](/docs/WhereClause/WhereClause.between())
Returns a collection of objects where index is between given boundaries
**/
between;
/**[equals()](/docs/WhereClause/WhereClause.equals())
Returns a collection of objects where index equals given key
**/
equals;
/**[equalsIgnoreCase()](/docs/WhereClause/WhereClause.equalsIgnoreCase())
Returns a collection of objects where index equals given string-key ignoring case differences
**/
equalsIgnoreCase;
/**[inAnyRange()](/docs/WhereClause/WhereClause.inAnyRange())
Returns a collection where index is within any of the given ranges.
**/
inAnyRange;
/**[noneOf()](/docs/WhereClause/WhereClause.noneOf())
Returns a collection where index equals anything but any of the keys in given array
**/
noneOf;
/**[notEqual()](/docs/WhereClause/WhereClause.notEqual())
Returns a collection where index equals anything but given value
**/
notEqual;
/**[startsWith()](/docs/WhereClause/WhereClause.startsWith())
Returns a collection of objects where index starts with given string-key
**/
startsWith;
/**[startsWithAnyOf()](/docs/WhereClause/WhereClause.startsWithAnyOf())
Returns a collection of objects where index starts with any of the given strings
**/
startsWithAnyOf;
/**[startsWithIgnoreCase()](/docs/WhereClause/WhereClause.startsWithIgnoreCase())
Returns a collection of objects where index starts with given string-key ignoring case differences
**/
startsWithIgnoreCase;
/**[startsWithAnyOfIgnoreCase()](/docs/WhereClause/WhereClause.startsWithAnyOfIgnoreCase())
Returns a collection of objects where index starts with any of given strings, ignoring case differences
**/
startsWithAnyOfIgnoreCase;
or;
and;

type RootQueryOperator = '$and' | '$or' | '$nor' | '$not';
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
function mapQueryFilterToMongoFilterQuery(filter: any): WhereClause<any> {
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

/**
 * Build a Dexie query from a Graphback filter
 *
 * @param {QueryFilter} filter
 */
export function buildQuery<M = any>(filter: QueryFilter<M>): WhereClause<any> {
  return mapQueryFilterToMongoFilterQuery(filter);
}

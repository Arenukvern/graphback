// import { ObjectID } from 'bson';
import { QueryFilter } from '@graphback/core';
import {
  buildQuery,
  convertFieldQueryToStringCondition,
  DexieFilterTypes,
  DexieQueryMap,
  GraphbackQueryOperator,
  RootQueryOperator,
  validateTableEntry,
} from '../src';
import { Context, createTestingContext } from './__util__';

describe('DexieDBDataProvider Query Builder', () => {
  let context: Context;

  afterEach(async () => {
    if (context) {
      context.providers = {};
      context.db?.close();
      context.db?.delete();
      context.db = null;
    }
  });

  const schemaStr = `
  """
  @model
  @versioned
  """
  type Note {
    id: ID!
    text: String
    """
    @index
    """
    title: String
    opened: Boolean
    likes: Int
    completedPercentage: Int
  }

  scalar ID
  `;
  const truthyTableEntry = {
    id: '',
    text: '',
    title: 'ReAd EmaIls ',
    opened: false,
    likes: 1000,
    completedPercentage: 24,
  };
  const falsyTableEntry = {
    id: '',
    text: '',
    title: 'ReAd arcHIved EmaIls ',
    opened: false,
    likes: 1000,
    completedPercentage: 24,
  };
  const filter = {
    title: {
      contains: 'emails',
    },
    opened: {
      eq: false,
    },
    likes: {
      gt: 10,
    },
    completedPercentage: {
      between: [20, 40],
    },
    and: {
      title: {
        startsWith: 'read',
      },
    },
    or: {
      likes: {
        eq: 100,
      },
    },
    not: {
      title: {
        contains: 'archived',
      },
    },
  };
  const filterQuery: DexieQueryMap = {
    title: [
      {
        // FIXME: when will be possible to use WhereClause
        filterType: DexieFilterTypes.Filter,
        fieldName: 'title',
        queryOperator: GraphbackQueryOperator.contains,
        isIndexed: true,
        value: 'emails',
      },
      {
        rootOperator: RootQueryOperator.and,
        // FIXME: when will be possible to use WhereClause
        filterType: DexieFilterTypes.Filter,
        fieldName: 'title',
        queryOperator: GraphbackQueryOperator.startsWith,
        isIndexed: true,
        value: 'read',
      },
      {
        rootOperator: RootQueryOperator.not,
        // FIXME: when will be possible to use WhereClause
        filterType: DexieFilterTypes.Filter,
        fieldName: 'title',
        queryOperator: GraphbackQueryOperator.contains,
        isIndexed: true,
        value: 'archived',
      },
    ],
    opened: [
      {
        filterType: DexieFilterTypes.Filter,
        fieldName: 'opened',
        queryOperator: GraphbackQueryOperator.eq,
        isIndexed: false,
        value: false,
      },
    ],
    likes: [
      {
        filterType: DexieFilterTypes.Filter,
        fieldName: 'likes',
        queryOperator: GraphbackQueryOperator.gt,
        isIndexed: false,
        value: 10,
      },
      {
        rootOperator: RootQueryOperator.or,
        filterType: DexieFilterTypes.Filter,
        fieldName: 'likes',
        queryOperator: GraphbackQueryOperator.eq,
        isIndexed: false,
        value: 100,
      },
    ],
    completedPercentage: [
      {
        filterType: DexieFilterTypes.Filter,
        fieldName: 'completedPercentage',
        queryOperator: GraphbackQueryOperator.ge,
        isIndexed: false,
        value: 20,
      },
      {
        filterType: DexieFilterTypes.Filter,
        fieldName: 'completedPercentage',
        queryOperator: GraphbackQueryOperator.le,
        isIndexed: false,
        value: 40,
      },
    ],
  };
  test('can build primitive', async () => {
    context = await createTestingContext(schemaStr);
    await context.db.open();

    const provider = context.providers.Note;
    const result = buildQuery({
      filter: (filter as unknown) as QueryFilter<any>,
      idField: { value: '', name: 'id' },
      provider,
    });

    expect(result).toEqual(filterQuery);
  });

  test('can convert field query to string condition', async () => {
    context = await createTestingContext(schemaStr);
    await context.db.open();

    const result = convertFieldQueryToStringCondition({
      condition: '',
      fieldQuery: {
        filterType: DexieFilterTypes.Filter,
        fieldName: 'title',
        queryOperator: GraphbackQueryOperator.contains,
        isIndexed: true,
        value: 'emails',
        rootOperator: RootQueryOperator.and,
      },
      tableValue: truthyTableEntry['title'],
    });

    expect(result.condition).toEqual('true');
  });
  test('can validate table entry - should pass', async () => {
    context = await createTestingContext(schemaStr);
    await context.db.open();

    const result = validateTableEntry({
      queryEntires: Object.entries(filterQuery),
      tableEntry: truthyTableEntry,
    });

    expect(result).toBeTruthy();
  });
  test('can validate table entry - should not pass', async () => {
    context = await createTestingContext(schemaStr);
    await context.db.open();

    const result = validateTableEntry({
      queryEntires: Object.entries(filterQuery),
      tableEntry: falsyTableEntry,
    });

    expect(result).toBeFalsy();
  });
  test('can use in operator', async () => {
    context = await createTestingContext(schemaStr);
    await context.db.open();
    const findIn = {
      id: {
        in: ['"6047b89e200ea41b97469c21"'],
      },
    };
    const provider = context.providers.Note;
    const filterQuery = buildQuery({
      filter: findIn as QueryFilter<any>,
      idField: { value: '', name: 'id' },
      provider,
    });

    const result = validateTableEntry({
      queryEntires: Object.entries(filterQuery),
      tableEntry: {
        id: '6047b89e200ea41b97469c21',
      },
    });
    expect(result).toBeTruthy();
  });
});

// describe('DexieDBDataProvider Advanced Filtering', () => {
//   interface Post {
//     id: ObjectID;
//     text: string;
//     likes: number;
//   }
//   let context: Context;

//   afterEach(async () => {
//     if (context) {
//       context.providers = {};
//       context.db?.close();
//       context.db?.delete();
//       context.db = null;
//     }
//   });

//   const postSchema = `
//       """
//       @model
//       """
//       type Post {
//       id: ID
//       text: String
//       likes: Int
//       }

//       scalar ID
//       `;

//   const defaultPostSeed = [
//     { text: 'post', likes: 300 },
//     { text: 'post2', likes: 50 },
//     { text: 'post3', likes: 1500 },
//   ];

//   //Create a new database before each tests so that
//   //all tests can run parallel

//   test('can filter ObjectID', async () => {
//     context = await createTestingContext(postSchema);

//     const newPost = await context.providers.Post.create({
//       text: 'hello',
//       likes: 100,
//     });

//     const findPost = await context.providers.Post.findBy({
//       filter: { id: { eq: newPost.id } },
//     });
//     expect(findPost).toHaveLength(1);
//     expect(findPost[0].text).toEqual(newPost.text);
//   });

//   test('can filter using AND', async () => {
//     context = await createTestingContext(postSchema, {
//       seedData: {
//         Post: defaultPostSeed,
//       },
//     });

//     const posts: Post[] = await context.providers.Post.findBy({
//       filter: {
//         and: [
//           {
//             text: { eq: 'post' },
//           },
//           {
//             likes: { eq: 300 },
//           },
//         ],
//       },
//     });

//     expect(posts.length).toBeGreaterThanOrEqual(1);
//     for (const post of posts) {
//       expect(post.text).toEqual('post');
//       expect(post.likes).toEqual(300);
//     }
//   });

//   test('can filter using OR', async () => {
//     context = await createTestingContext(postSchema, {
//       seedData: {
//         Post: defaultPostSeed,
//       },
//     });

//     const posts: Post[] = await context.providers.Post.findBy({
//       filter: {
//         or: [
//           {
//             likes: { eq: 300 },
//           },
//           {
//             text: { eq: 'post2' },
//           },
//         ],
//       },
//     });
//     expect(posts.length).toEqual(2);
//     for (const post of posts) {
//       expect(post.text === 'post2' || post.likes === 300);
//     }
//   });

//   test('can filter using list of OR conditions', async () => {
//     context = await createTestingContext(postSchema, {
//       seedData: {
//         Post: defaultPostSeed,
//       },
//     });

//     const posts: Post[] = await context.providers.Post.findBy({
//       filter: {
//         or: [
//           {
//             text: { eq: 'post2' },
//           },
//           {
//             likes: { eq: 300 },
//           },
//           {
//             text: { eq: 'post3' },
//           },
//         ],
//       },
//     });
//     expect(posts.length).toEqual(3);
//   });

//   test('can filter using NOT', async () => {
//     context = await createTestingContext(postSchema, {
//       seedData: {
//         Post: defaultPostSeed,
//       },
//     });

//     const posts: Post[] = await context.providers.Post.findBy({
//       filter: {
//         not: [
//           {
//             text: { eq: 'post2' },
//           },
//           {
//             likes: { eq: 300 },
//           },
//         ],
//       },
//     });

//     expect(posts.length).toBeGreaterThanOrEqual(1);
//     for (const post of posts) {
//       expect(post.text).not.toEqual('post2');
//       expect(post.likes).not.toEqual(300);
//     }
//   });

//   test('can filter using between operator', async () => {
//     context = await createTestingContext(postSchema, {
//       seedData: {
//         Post: defaultPostSeed,
//       },
//     });

//     const posts: Post[] = await context.providers.Post.findBy({
//       filter: {
//         likes: { between: [250, 350] },
//       },
//     });

//     expect(posts.length).toBeGreaterThanOrEqual(1);
//     for (const post of posts) {
//       expect(post.likes).toBeLessThanOrEqual(350);
//       expect(post.likes).toBeGreaterThanOrEqual(250);
//     }
//   });

//   test('can filter using nbetween operator', async () => {
//     context = await createTestingContext(postSchema, {
//       seedData: {
//         Post: defaultPostSeed,
//       },
//     });

//     const posts: Post[] = await context.providers.Post.findBy({
//       filter: {
//         likes: { nbetween: [250, 350] },
//       },
//     });

//     expect(posts.length).toBeGreaterThanOrEqual(1);
//     for (const post of posts) {
//       expect(post.likes < 250 || post.likes > 350);
//     }
//   });

//   test('can use nested filters', async () => {
//     context = await createTestingContext(postSchema, {
//       seedData: {
//         Post: defaultPostSeed,
//       },
//     });

//     const posts: Post[] = await context.providers.Post.findBy({
//       filter: {
//         and: [
//           {
//             or: [
//               { likes: { between: [250, 350] } },
//               { likes: { between: [25, 75] } },
//             ],
//           },
//           {
//             or: [{ text: { eq: 'post' } }, { text: { eq: 'post2' } }],
//           },
//         ],
//       },
//     });

//     expect(posts.length).toBeGreaterThanOrEqual(1);
//     for (const post of posts) {
//       expect(
//         (post.likes >= 250 && post.likes <= 350) ||
//           (post.likes >= 25 && post.likes <= 75),
//       );

//       expect(post.text === 'post' || post.text === 'post2');
//     }
//   });

//   test('can use contains operator', async () => {
//     context = await createTestingContext(postSchema, {
//       seedData: {
//         Post: defaultPostSeed,
//       },
//     });

//     const posts: Post[] = await context.providers.Post.findBy({
//       filter: {
//         text: { contains: 'post' },
//       },
//     });

//     expect(posts.length).toBeGreaterThanOrEqual(1);
//     for (const post of posts) {
//       expect(post.text).toEqual(expect.stringContaining('post'));
//     }
//   });

//   test('can use startsWith operator', async () => {
//     context = await createTestingContext(postSchema, {
//       seedData: {
//         Post: defaultPostSeed,
//       },
//     });

//     const posts: Post[] = await context.providers.Post.findBy({
//       filter: {
//         text: { startsWith: 'post' },
//       },
//     });

//     expect(posts.length).toBeGreaterThanOrEqual(1);
//     for (const post of posts) {
//       expect(post.text).toEqual(expect.stringMatching(/^post/g));
//     }
//   });

//   test('can use endsWith operator', async () => {
//     context = await createTestingContext(postSchema, {
//       seedData: {
//         Post: defaultPostSeed,
//       },
//     });

//     const posts: Post[] = await context.providers.Post.findBy({
//       filter: {
//         text: { endsWith: 'post' },
//       },
//     });

//     expect(posts.length).toBeGreaterThanOrEqual(1);
//     for (const post of posts) {
//       expect(post.text).toEqual(expect.stringMatching(/post$/g));
//     }
//   });

//   test('escaping regex strings', async () => {
//     context = await createTestingContext(postSchema, {
//       seedData: {
//         Post: [...defaultPostSeed, { text: 'p..t', likes: 4500 }],
//       },
//     });

//     const posts: Post[] = await context.providers.Post.findBy({
//       filter: {
//         text: { contains: 'p..t' },
//       },
//     });

//     expect(posts.length).toBeGreaterThanOrEqual(1);
//     for (const post of posts) {
//       expect(post.text).toMatch(/p\.\.t/g);
//     }
//   });
// });

// describe('queryBuilder scalar filtering', () => {
//   let context: Context;

//   test('can filter @versioned metadata fields', async () => {
//     context = await createTestingContext(`
//     """
//     @model
//     @versioned
//     """
//     type Post {
//     id: ID
//     text: String
//     }

//     scalar ID
//     `);
//     const startTime = 1590679886048;
//     advanceTo(startTime);

//     // Create some posts
//     for (const postTitle of ['hi guys', 'not yet', 'bye guys']) {
//       advanceBy(3000);
//       await context.providers.Post.create({ text: postTitle });
//     }

//     // Get all posts created since startTime
//     const posts = await context.providers.Post.findBy({
//       filter: {
//         createdAt: { gt: startTime },
//       },
//     });
//     expect(posts.length).toEqual(3);
//     expect(posts.map((post: any) => post.text)).toEqual([
//       'hi guys',
//       'not yet',
//       'bye guys',
//     ]);

//     // Get all posts created after the first post
//     const newPosts = await context.providers.Post.findBy({
//       filter: { createdAt: { gt: posts[0].createdAt } },
//     });
//     expect(newPosts.length).toEqual(2);
//     expect(newPosts.map((post: any) => post.text)).toEqual([
//       'not yet',
//       'bye guys',
//     ]);
//   });

//   test('a && (b || c)', () => {
//     const inputQuery: QueryFilter = {
//       a: {
//         eq: 1,
//       },
//       or: [
//         {
//           b: {
//             eq: 2,
//           },
//         },
//         {
//           c: {
//             eq: 3,
//           },
//         },
//       ],
//     };

//     const outputQuery = buildQuery(inputQuery);
//     const expected = {
//       a: {
//         $eq: 1,
//       },
//       $or: [
//         {
//           b: {
//             $eq: 2,
//           },
//         },
//         {
//           c: {
//             $eq: 3,
//           },
//         },
//       ],
//     };

//     expect(outputQuery).toEqual(expected);
//   });

//   test('a || b || c starting at root $or operator of query', () => {
//     const inputQuery: QueryFilter = {
//       or: [
//         {
//           a: {
//             eq: 1,
//           },
//         },
//         {
//           b: {
//             eq: 2,
//           },
//         },
//         {
//           c: {
//             eq: 3,
//           },
//         },
//       ],
//     };

//     const outputQuery = buildQuery(inputQuery);
//     const expected = [
//       {
//         a: {
//           $eq: 1,
//         },
//       },
//       {
//         b: {
//           $eq: 2,
//         },
//       },
//       {
//         c: {
//           $eq: 3,
//         },
//       },
//     ];

//     outputQuery.$or.forEach((q: any) => expect(expected).toContainEqual(q));
//     expect(Object.keys(outputQuery)).toEqual(['$or']);
//   });

//   test('(a && b) && (c || c)', () => {
//     const inputQuery: QueryFilter = {
//       or: [
//         {
//           a: {
//             eq: 1,
//           },
//           b: {
//             eq: 2,
//           },
//           or: [
//             {
//               c: {
//                 eq: 3,
//               },
//             },
//             {
//               c: {
//                 eq: 2,
//               },
//             },
//           ],
//         },
//       ],
//     };

//     const outputQuery = buildQuery(inputQuery);

//     const expected: FilterQuery<any> = {
//       $or: [
//         {
//           a: {
//             $eq: 1,
//           },
//           b: {
//             $eq: 2,
//           },
//           $or: [
//             {
//               c: {
//                 $eq: 3,
//               },
//             },
//             {
//               c: {
//                 $eq: 2,
//               },
//             },
//           ],
//         },
//       ],
//     };

//     expect(outputQuery).toEqual(expected);
//   });

//   test('a && b && (c || b) from query root (explicit AND)', () => {
//     const inputQuery: QueryFilter = {
//       a: {
//         eq: 1,
//       },
//       and: [
//         {
//           b: {
//             eq: 2,
//           },
//         },
//       ],
//       or: [
//         {
//           c: {
//             eq: 3,
//           },
//         },
//         {
//           b: {
//             eq: 4,
//           },
//         },
//       ],
//     };

//     const outputQuery = buildQuery(inputQuery);

//     const expected: FilterQuery<any> = {
//       a: {
//         $eq: 1,
//       },
//       $and: [
//         {
//           b: {
//             $eq: 2,
//           },
//         },
//       ],
//       $or: [
//         {
//           c: {
//             $eq: 3,
//           },
//         },
//         {
//           b: {
//             $eq: 4,
//           },
//         },
//       ],
//     };

//     expect(outputQuery).toEqual(expected);
//   });
// });

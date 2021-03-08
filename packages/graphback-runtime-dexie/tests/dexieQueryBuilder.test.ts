/* eslint-disable max-lines */
import {
  buildQuery,
  convertFieldQueryToStringCondition,
  DexieFilterTypes,
  DexieQueryMap,
  GraphbackQueryOperator,
  RootQueryOperator,
  validateTableEntry,
} from '../src/dexieQueryBuilder';
import { Context, createTestingContext } from './__util__';
describe('DexieDBDataProvider Query Builder', () => {
  let context: Context;
  const schemaStr = `
  """
  @model
  @versioned
  """
  type Note {
    _id: GraphbackObjectID!
    text: String
    """
    @index
    """
    title: String
    opened: Boolean
    likes: Int
    completedPercentage: Int
  }

  scalar GraphbackObjectID
  `;
  const truthyTableEntry = {
    _id: '',
    text: '',
    title: 'ReAd EmaIls ',
    opened: false,
    likes: 1000,
    completedPercentage: 24,
  };
  const falsyTableEntry = {
    _id: '',
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

    context.db.open();
    const provider = context.providers.Note;
    const result = buildQuery({
      filter: filter as any,
      idField: { value: '', name: '_id' },
      provider,
    });

    expect(result).toEqual(filterQuery);
  });
  test('can convert field query to string condition', async () => {
    context = await createTestingContext(schemaStr);

    context.db.open();
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

    expect(result).toEqual('true');
  });
  test('can validate table entry - should pass', async () => {
    context = await createTestingContext(schemaStr);

    context.db.open();
    const result = validateTableEntry({
      queryEntires: Object.entries(filterQuery),
      tableEntry: truthyTableEntry,
    });

    expect(result).toBeTruthy();
  });
  test('can validate table entry - should not pass', async () => {
    context = await createTestingContext(schemaStr);

    context.db.open();
    const result = validateTableEntry({
      queryEntires: Object.entries(filterQuery),
      tableEntry: falsyTableEntry,
    });

    expect(result).toBeFalsy();
  });
});

// describe('DexieDBDataProvider Advanced Filtering', () => {
//   interface Post {
//     _id: ObjectID;
//     text: string;
//     likes: number;
//   }
//   let context: Context;

//   const postSchema = `
//       """
//       @model
//       """
//       type Post {
//       _id: GraphbackObjectID
//       text: String
//       likes: Int
//       }

//       scalar GraphbackObjectID
//       `;

//   const defaultPostSeed = [
//     { text: 'post', likes: 300 },
//     { text: 'post2', likes: 50 },
//     { text: 'post3', likes: 1500 },
//   ];

//   //Create a new database before each tests so that
//   //all tests can run parallel

//   it('can filter ObjectID', async () => {
//     context = await createTestingContext(postSchema);

//     const newPost = await context.providers.Post.create({
//       text: 'hello',
//       likes: 100,
//     });

//     const findPost = await context.providers.Post.findBy({
//       filter: { _id: { eq: newPost._id } },
//     });
//     expect(findPost).toHaveLength(1);
//     expect(findPost[0].text).toEqual(newPost.text);
//   });

//   it('can filter using AND', async () => {
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

//   it('can filter using OR', async () => {
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

//   it('can filter using list of OR conditions', async () => {
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

//   it('can filter using NOT', async () => {
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

//   it('can filter using between operator', async () => {
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

//   it('can filter using nbetween operator', async () => {
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

//   it('can use nested filters', async () => {
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

//   it('can use contains operator', async () => {
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

//   it('can use startsWith operator', async () => {
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

//   it('can use endsWith operator', async () => {
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

//   it('can filter @versioned metadata fields', async () => {
//     context = await createTestingContext(`
//     """
//     @model
//     @versioned
//     """
//     type Post {
//     _id: GraphbackObjectID
//     text: String
//     }

//     scalar GraphbackObjectID
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

//   it('a && (b || c)', () => {
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

//   it('a || b || c starting at root $or operator of query', () => {
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

//   it('(a && b) && (c || c)', () => {
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

//   it('a && b && (c || b) from query root (explicit AND)', () => {
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

import { IndexSpec } from 'dexie';
import { Context, createTestingContext } from './__util__';

describe('DexieDB indexing', () => {
  let context: Context;
  it('can create default indexes', async () => {
    context = await createTestingContext(`
      """
      @model
      @versioned
      """
      type Note {
        _id: GraphbackObjectID!
        """
        @index
        """
        text: String
      }

      scalar GraphbackObjectID
      `);
    const index = await context.findIndex({
      indexName: 'text',
      tableName: 'note',
    });
    const expectedIndex: Partial<IndexSpec> = {
      auto: false,
      compound: false,
      keyPath: 'text',
      multi: false,
      name: 'text',
      src: 'text',
      unique: false,
    };
    expect(index).toMatchObject(expectedIndex);
  });

  it('can create indexes with options', async () => {
    context = await createTestingContext(`
      """
      @model
      @versioned
      """
      type Note {
        _id: GraphbackObjectID!
        text: String
        """
        @index(
          name: 'compound_index',
          key: {
            meta: 1,
            pages: 1
          }
        )
        """
        meta: String
        pages: Int
      }

      scalar GraphbackObjectID
      `);

    const index = await context.findIndex({
      indexName: '[meta+pages]',
      tableName: 'note',
    });
    const expectedIndex: Partial<IndexSpec> = {
      name: '[meta+pages]',
      keyPath: ['meta', 'pages'],
      unique: false,
      multi: false,
      auto: false,
      compound: true,
      src: '[meta+pages]',
    };
    expect(index).toMatchObject(expectedIndex);
  });

  it('can create relation indexes', async () => {
    context = await createTestingContext(`
      """
      @model
      """
      type Note {
        _id: GraphbackObjectID!
        text: String
        """
        @oneToMany(field: 'note')
        """
        comments: [Comment]
      }

      """
      @model
      """
      type Comment {
        _id: GraphbackObjectID!
        text: String
      }

      scalar GraphbackObjectID
      `);

    const index = await context.findIndex({
      tableName: 'comment',
      indexName: 'noteId',
    });
    const expectedIndex: Partial<IndexSpec> = {
      name: 'noteId',
      keyPath: 'noteId',
      unique: false,
      multi: false,
      auto: false,
      compound: false,
      src: 'noteId',
    };
    // {
    //   key: {
    //     noteId: 1,
    //   },
    //   ns: 'test.comment',
    // }
    expect(index).toMatchObject(expectedIndex);
  });
});

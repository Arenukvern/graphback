import { IndexSpec } from 'dexie';
import { findDexieTableFieldIndex } from '../src/utils/createDexieIndexes';
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
    expect(index).toMatchObject(expectedIndex);
  });
});

describe('DexieDB indexing helpers', () => {
  let context: Context;
  const schemaStr = `
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
    title: String
  }

  scalar GraphbackObjectID
  `;
  const expectedIndex: Partial<IndexSpec> = {
    auto: false,
    compound: false,
    keyPath: 'text',
    multi: false,
    name: 'text',
    src: 'text',
    unique: false,
  };

  it('can find index', async () => {
    context = await createTestingContext(schemaStr);
    const table = context.db.table('note');
    const index = findDexieTableFieldIndex({
      indexName: 'text',
      table,
    });
    expect(index).toMatchObject(expectedIndex);
  });
  it('can validate index', async () => {
    context = await createTestingContext(schemaStr);
    await context.db.open();
    const isIndexed = context.providers.Note.isFieldIndexed('text');
    expect(isIndexed).toBeTruthy();

    const isIdIndexed = context.providers.Note.isFieldIndexed('_id');
    expect(isIdIndexed).toBeTruthy();

    const isNotIndexed = !context.providers.Note.isFieldIndexed('title');
    expect(isNotIndexed).toBeTruthy();
  });
});

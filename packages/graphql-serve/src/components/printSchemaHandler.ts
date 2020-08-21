import { GraphbackPluginEngine, printSchemaWithDirectives } from 'graphback';
import { loadModel } from '../loadModel';
import { SchemaCRUDPlugin } from '@graphback/codegen-schema';

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
export function printSchemaHandler (argv: { model?: string }): string {
  const schemaText = loadModel(argv.model);

  const pluginEngine = new GraphbackPluginEngine({
    schema: schemaText,
    plugins: [ new SchemaCRUDPlugin() ],
    config: { crudMethods: {} }
  })

  const metadata = pluginEngine.createResources()

  const schema = metadata.getSchema();

  const printedSchema: string = printSchemaWithDirectives(schema)

  return printedSchema
}
/* eslint-enable @typescript-eslint/no-unsafe-assignment */
/* eslint-enable @typescript-eslint/no-unsafe-member-access */
/* eslint-enable @typescript-eslint/no-unsafe-call */

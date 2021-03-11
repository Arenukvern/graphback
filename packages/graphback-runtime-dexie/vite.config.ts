import path from 'path';
import { defineConfig } from 'vite';
console.log(path.resolve(__dirname, 'src/index.ts'));
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  optimizeDeps: {
    // include: ['@ant-design/icons-vue'],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@graphback/runtime-dexie',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      input: 'src/index.ts',
      external: ['graphql', 'dexie'],
      plugins: [],
      output: {
        dir: './dist',
        // // Provide global variables to use in the UMD build
        // // for externalized deps
        globals: {
          graphql: 'graphql',
          dexie: 'dexie',
        },
      },
    },
  },
});

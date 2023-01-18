import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { dependencies } from './package.json';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  preview: {
    port: 4000,
  },
  resolve: {
    alias: [
      {
        find: '@components',
        replacement: path.join(__dirname, './src/components'),
      },
    ],
  },
  build: {
    lib: {
      entry: 'src/components/index.tsx',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: Object.keys(dependencies),
    },
  },
});

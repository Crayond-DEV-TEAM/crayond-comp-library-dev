import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { dependencies } from './package.json';
import path, { resolve } from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts(), react()],
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
      entry: resolve(__dirname, 'src/components/index.tsx'),
      name: 'NpmPackageBoilerplate',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: Object.keys(dependencies),
    },
  },
});

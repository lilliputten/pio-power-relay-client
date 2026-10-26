import path from 'node:path';
import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Get the file path of the current module
const __filename = fileURLToPath(import.meta.url);

// Get the folder path of the current module
const __dirname = path.dirname(__filename).replace(/\\/g, '/');

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});

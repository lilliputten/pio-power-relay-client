import tailwindcss from '@tailwindcss/vite';
import errorOverlay from '@visulima/vite-overlay';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

// Get the file path of the current module
const __filename = fileURLToPath(import.meta.url);

// Get the folder path of the current module
const __dirname = path.dirname(__filename).replace(/\\/g, '/');

// https://vite.dev/config/
export default defineConfig({
  server: {
    hmr: {
      overlay: true, // Must be true (default) to show syntax errors
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    errorOverlay({
      forwardedConsoleMethods: [
        'error',
        // 'warn', // Optional: also forward console.warn to the overlay
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});

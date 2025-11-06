// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path'; // <--- Import the path module

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // --- ADD THIS resolve BLOCK ---
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // This maps @/ to the src directory
    },
  },
  // -----------------------------
});
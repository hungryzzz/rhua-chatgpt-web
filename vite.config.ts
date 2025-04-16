import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import type { UserConfigExport } from 'vite';

const config: UserConfigExport = async () => ({
  plugins: [
    react(),
  ],
  clearScreen: false,
  server: {
    port: 1420,
    strictPort: true
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true, 
      },
      format: {
        comments: false,
      },
    },
  },
  
  envPrefix: ['VITE_', 'TAURI_'],
});

export default defineConfig(config);
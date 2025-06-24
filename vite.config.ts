import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  let basePath;

  if (process.env.VITE_IS_NETLIFY === 'true') {
    basePath = '/';  // Root path for Netlify
  }
  // For GitHub Pages production
  else if (mode === 'production') {

    basePath = env.VITE_APP_BASE|| '/OpenAccessConsulting/';
  }
  // For GitHub Pages staging
  else if (mode === 'staging') {
    basePath = '/OpenAccessConsulting/staging/';
  }

  return {
    base: basePath,  // Set the correct base path dynamically
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
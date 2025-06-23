import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');  // Load env variables based on the mode (production, staging)

  // Dynamically set the base path based on the mode
  let basePath;
  if (mode === 'production') {
    basePath = env.VITE_APP_BASE || '/OpenAccessConsulting/';  // Use /OpenAccessConsulting/ for GitHub Pages production
  } else if (mode === 'staging') {
    basePath = env.VITE_APP_BASE || '/OpenAccessConsulting/staging/';  // Use /OpenAccessConsulting/staging/ for GitHub Pages staging
  } else {
    basePath = '/';  // Default to root for Netlify (or other environments)
  }

  return {
    base: basePath,  // Set the base path dynamically
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
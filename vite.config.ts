import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');  // Load environment variables based on mode (production, staging)

  let basePath;

  // Check for Netlify (based on process.env.NETLIFY)
  if (process.env.NETLIFY === 'true') {
    // Netlify deploys from the root, so use /
    basePath = env.VITE_APP_BASE || '/';
  }
  // For GitHub Pages production (use VITE_APP_BASE_GITHUB)
  else if (mode === 'production') {
    basePath = env.VITE_APP_BASE_GITHUB || '/OpenAccessConsulting/';
  }
  // For GitHub Pages staging
  else if (mode === 'staging') {
    basePath = '/OpenAccessConsulting/staging/';  // For GitHub Pages staging
  }

  return {
    base: basePath,  // Set base path dynamically based on mode
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  // Check if the environment is Netlify
  const isNetlify = process.env.NETLIFY === 'true';

  // Choose the correct base path depending on the environment
  const basePath = isNetlify 
    ? '/' // Use root for Netlify
    : env.VITE_APP_BASE; // Use the base path defined in .env.production or .env.staging

  return {
    base: basePath,
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
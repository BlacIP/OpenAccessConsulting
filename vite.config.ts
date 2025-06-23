import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  // Check if the environment is Netlify
  const isNetlify = process.env.NETLIFY === 'true';

  // Determine base path
  const basePath = isNetlify
    ? '/' // Root path for Netlify
    : mode === 'production' // For GitHub Pages production
    ? '/OpenAccessConsulting/'
    : '/OpenAccessConsulting/staging/'; // For GitHub Pages staging

  return {
    base: basePath, // Dynamically set the base path based on the environment
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  // Check if it's Netlify environment based on the reserved NETLIFY variable
  const isNetlify = process.env.NETLIFY === 'true';

  return {
    base: isNetlify ? '/' : env.VITE_APP_BASE,  // Use root for Netlify, base path for GitHub Pages
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
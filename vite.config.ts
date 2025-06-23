// import { defineConfig, loadEnv } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), '');

//   let basePath;

//   // For Netlify (root path)
//   if (process.env.NETLIFY === 'true') {
//     basePath = '/';  // Root path for Netlify
//   }
//   // For GitHub Pages production
//   else if (mode === 'production') {
//     basePath = env.REACT_APP_BASE_PATH || '/OpenAccessConsulting/';
//   }
//   // For GitHub Pages staging
//   else if (mode === 'staging') {
//     basePath = '/OpenAccessConsulting/staging/';
//   }

//   return {
//     base: basePath,  // Set the correct base path dynamically
//     plugins: [react()],
//     optimizeDeps: {
//       exclude: ['lucide-react'],
//     },
//   };
// });

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');  // Load environment variables based on mode (production, staging)

  let basePath;

  // For Netlify (root path)
  if (process.env.NETLIFY === 'true') {
    basePath = env.VITE_APP_BASE || '/';  // Use root path for Netlify
  }
  // For GitHub Pages production
  else if (mode === 'production') {
    basePath = env.VITE_APP_BASE_GITHUB || '/OpenAccessConsulting/';
  }
  // For GitHub Pages staging
  else if (mode === 'staging') {
    basePath = '/OpenAccessConsulting/staging/';  // Staging base path
  }

  return {
    base: basePath,  // Set base path dynamically based on mode
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
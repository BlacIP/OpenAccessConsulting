import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  // Explicit switch: custom domain vs project path
  const useProjectSubdir = env.VITE_USE_PROJECT_PATH === 'true';

  const basePath =
    env.NETLIFY === 'true' || env.VITE_IS_NETLIFY === 'true'
      ? '/'
      : mode === 'production'
        ? (useProjectSubdir ? '/OpenAccessConsulting/' : '/')
        : mode === 'staging'
          ? '/staging/'
          : '/';

  return {
    base: basePath,
    plugins: [
      react(),
      // Keep the staging copy out of search engines
      {
        name: 'staging-noindex',
        transformIndexHtml: (html) =>
          mode === 'staging'
            ? html.replace('</head>', '    <meta name="robots" content="noindex, nofollow" />\n  </head>')
            : html,
      },
    ],
    optimizeDeps: { exclude: ['lucide-react'] },
  };
});
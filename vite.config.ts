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
    plugins: [react()],
    optimizeDeps: { exclude: ['lucide-react'] },
  };
});
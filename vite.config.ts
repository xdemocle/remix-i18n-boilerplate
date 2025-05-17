import { cloudflare } from '@cloudflare/vite-plugin';
import { vitePlugin as remix } from '@remix-run/dev';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  publicDir: 'public',
  // Remix handles its own HMR through its plugin
  server: {
    hmr: true,
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
  plugins: [
    cloudflare({ viteEnvironment: { name: 'server' } }),
    remix({
      ignoredRouteFiles: ['**/*.css'],
      ssr: true,
      buildDirectory: 'dist',
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
    tsconfigPaths(),
    tailwindcss(),
  ],
});

import { cloudflareDevProxyVitePlugin, vitePlugin as remix } from '@remix-run/dev';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// Define a simple getLoadContext function that passes through the context
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getLoadContext({ context }: { context: any }) {
  return context;
}

export default defineConfig({
  ssr: {
    resolve: {
      conditions: ['workerd', 'worker', 'browser'],
    },
  },
  resolve: {
    mainFields: ['browser', 'module', 'main'],
  },
  build: {
    minify: true,
    outDir: 'dist',
  },
  publicDir: 'public',
  // Remix handles its own HMR through its plugin
  server: {
    hmr: true,
  },
  plugins: [
    cloudflareDevProxyVitePlugin({
      getLoadContext,
    }),
    remix({
      buildDirectory: 'dist',
      ignoredRouteFiles: ['**/*.css'],
      ssr: true,
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

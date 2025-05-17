// import { cloudflare } from '@cloudflare/vite-plugin';
import { defineConfig } from 'vite';
import { vitePlugin as remix, cloudflareDevProxyVitePlugin } from '@remix-run/dev';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';
import { getLoadContext } from './load-context';

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
  },
  publicDir: 'public',
  // Remix handles its own HMR through its plugin
  server: {
    hmr: true,
    port: 3000,
  },
  plugins: [
    cloudflareDevProxyVitePlugin({
      getLoadContext,
    }),
    // cloudflare({ viteEnvironment: { name: 'ssr' } }),
    remix({
      // ignoredRouteFiles: ['**/*.css'],
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

import { cloudflareDevProxyVitePlugin, vitePlugin as remix } from '@remix-run/dev';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { type PlatformProxy } from 'wrangler';

type GetLoadContextArgs = {
  request: Request;
  context: {
    cloudflare: Omit<PlatformProxy<Env>, 'dispose' | 'caches' | 'cf'> & {
      caches: PlatformProxy<Env>['caches'] | CacheStorage;
      cf: Request['cf'];
    };
  };
};

export function getLoadContext({ context }: GetLoadContextArgs) {
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
    remix({
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

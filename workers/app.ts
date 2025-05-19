import { createRequestHandler, type ServerBuild } from '@remix-run/cloudflare';

// Define configurable cache duration in seconds (default: 7 days)
// const CACHE_DURATION_SECONDS = 7 * 24 * 60 * 60;

// Define which parts of the request to include in the cache key
const USE_PATH = true; // Include path in the cache key
const USE_QUERY_STRING = true; // Include query string in the cache key

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    const cacheKey = createCacheKey(request);

    try {
      let build: ServerBuild;
      let response = await caches.match(cacheKey);

      if (!response) {
        // Load the server build
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line import/no-unresolved
        build = await import('../dist/server/index.js');
        build = await Promise.resolve(build as unknown as ServerBuild);

        response = new Response(JSON.stringify(build), response);

        ctx.waitUntil(
          caches.open(cacheKey).then((cache) => cache.put(cacheKey, response!.clone()))
        );
      } else {
        const buildText = await response.text();
        build = JSON.parse(buildText);
      }

      const handleRequest = createRequestHandler(
        build,
        process.env.NODE_ENV === 'development' ? 'development' : 'production'
      );

      return await handleRequest(request, {
        cloudflare: { env, ctx },
      });
    } catch (error) {
      console.error('Error handling request:', error);
      return new Response('Internal Server Error', { status: 500 });
    }
  },
} satisfies ExportedHandler<Env>;

/**
 * @param {Request<unknown, CfProperties<unknown>>} request
 */
function createCacheKey(request: Request) {
  const url = new URL(request.url);
  const cacheKey = new URL(url.origin);

  if (USE_PATH) {
    cacheKey.pathname = url.pathname;
  }

  if (USE_QUERY_STRING) {
    cacheKey.search = url.search;
  }

  return cacheKey.toString();
}

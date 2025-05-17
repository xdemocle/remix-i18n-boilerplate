import { createRequestHandler, type ServerBuild } from '@remix-run/cloudflare';

// We need to import the server build asynchronously to avoid global scope issues
let serverBuild: ServerBuild | undefined;

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    try {
      if (!serverBuild) {
        // Load the server build on first request
        // @ts-expect-error import/no-unresolved
        // eslint-disable-next-line import/no-unresolved
        const build = await import('../build/server/index.js');
        serverBuild = build as unknown as ServerBuild;
      }

      const handleRequest = createRequestHandler(
        serverBuild,
        process.env.NODE_ENV || 'development'
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

import { createRequestHandler, type ServerBuild } from '@remix-run/cloudflare';

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    try {
      // Load the server build on first request
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line import/no-unresolved
      const build = await import('../dist/server/index.js');
      const handleRequest = createRequestHandler(
        () => Promise.resolve(build as unknown as ServerBuild),
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

import { createRequestHandler } from '@remix-run/cloudflare';
import type { ServerBuild } from '@remix-run/cloudflare';

declare module '@remix-run/cloudflare' {
  export interface AppLoadContext {
    cloudflare: {
      env: Env;
      ctx: ExecutionContext;
    };
  }
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    try {
      // Dynamically import the server build
      const build = await import('../build/server/index.js');
      
      // Create the request handler with the imported build
      const handleRequest = createRequestHandler(
        build as unknown as ServerBuild,
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

import { createRequestHandler } from '@remix-run/cloudflare';
import type { ServerBuild } from '@remix-run/cloudflare';
// Import the server build directly
import * as build from '../build/server/index.js';

declare module '@remix-run/cloudflare' {
  export interface AppLoadContext {
    cloudflare: {
      env: Env;
      ctx: ExecutionContext;
    };
  }
}

// Create the request handler with the direct import
const handleRequest = createRequestHandler(build as unknown as ServerBuild, import.meta.env.MODE);

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    return handleRequest(request, {
      cloudflare: { env, ctx },
    });
  },
} satisfies ExportedHandler<Env>;

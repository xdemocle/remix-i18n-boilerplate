/* eslint-disable import/no-unresolved */
import { createRequestHandler, type ServerBuild } from '@remix-run/cloudflare';
import { type PlatformProxy } from 'wrangler';
// @ts-expect-error not existen yet
import * as build from '../build/server';

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

export default {
  async fetch(request, env, ctx) {
    try {
      const loadContext = getLoadContext({
        request,
        context: {
          cloudflare: {
            cf: request.cf,
            ctx: {
              waitUntil: ctx.waitUntil.bind(ctx),
              passThroughOnException: ctx.passThroughOnException.bind(ctx),
            },
            caches,
            env,
          },
        },
      });

      const handleRemixRequest = createRequestHandler(
        build as unknown as ServerBuild,
        'development'
      );
      return handleRemixRequest(request, loadContext);
    } catch (error) {
      console.log(error);
      return new Response('An unexpected error occurred', { status: 500 });
    }
  },
} satisfies ExportedHandler<Env>;

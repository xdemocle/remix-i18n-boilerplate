import { createRequestHandler } from 'react-router';

const requestHandler = createRequestHandler(
  // @ts-expect-error not existent
  () => import('../dist/server/index.js'),
  process.env.NODE_ENV !== 'production' ? 'development' : 'production'
);

export default {
  async fetch(request, env, ctx) {
    return requestHandler(request, {
      cloudflare: { env, ctx },
    });
  },
} satisfies ExportedHandler<Env>;

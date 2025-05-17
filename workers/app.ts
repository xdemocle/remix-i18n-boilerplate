import { createRequestHandler } from 'react-router';

const requestHandler = createRequestHandler(
  // @ts-expect-error not existent
  () => import('../dist/server/index.js'),
  import.meta.env.MODE
);

export default {
  async fetch(request, env, ctx) {
    return requestHandler(request, {
      cloudflare: { env, ctx },
    });
  },
} satisfies ExportedHandler<Env>;

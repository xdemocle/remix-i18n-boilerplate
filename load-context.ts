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

import { LoaderFunctionArgs } from '@remix-run/cloudflare';
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react';
import { LinksFunction } from '@remix-run/react/dist/routeModules';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { initI18n } from '~/i18n/i18next.server';
import './tailwind.css';

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const i18n = initI18n(request);
  const locale = i18n.language;

  return {
    locale,
  };
}

export default function Root() {
  const { i18n } = useTranslation();
  const { locale } = useLoaderData<typeof loader>();

  return (
    <html lang={locale} dir={i18n.dir(locale)} suppressHydrationWarning={true}>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
        <Meta />
        <Links />
      </head>
      <body className={i18n.dir(i18n.language)} suppressHydrationWarning={true}>
        <div className="flex min-h-screen flex-col">
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

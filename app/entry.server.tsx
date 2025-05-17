import type { EntryContext } from '@remix-run/cloudflare';
import { RemixServer } from '@remix-run/react';
import { isbot } from 'isbot';
import { renderToReadableStream } from 'react-dom/server';
import { I18nextProvider } from 'react-i18next';
import { i18n } from './i18n/i18next.server';

const handleRequest = async (
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  entryContext: EntryContext
) => {
  let didError = false;

  // Initialize i18next for this request
  const userAgent = request.headers.get('user-agent');
  const isBot = userAgent && isbot(userAgent);

  try {
    const stream = await renderToReadableStream(
      <I18nextProvider i18n={i18n}>
        <RemixServer context={entryContext} url={request.url} />
      </I18nextProvider>,
      {
        onError(error) {
          console.error('Error during rendering:', error);
          didError = true;
        },
        bootstrapScriptContent: `window.ENV = ${JSON.stringify({
          LANGUAGE: i18n.language,
          NAMESPACES: Object.keys(i18n.options.ns || {}),
        })};
        `,
      }
    );

    if (isBot) {
      await stream.allReady;
    }

    return new Response(stream, {
      status: didError ? 500 : responseStatusCode,
      headers: responseHeaders,
    });
  } catch (error) {
    console.error('Fatal rendering error:', error);
    return new Response(
      '<!DOCTYPE html><html><body><h1>Internal Server Error</h1></body></html>',
      {
        status: 500,
        headers: { 'Content-Type': 'text/html' },
      }
    );
  }
};

export default handleRequest;

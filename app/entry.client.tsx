import { RemixBrowser } from '@remix-run/react';
import { startTransition, StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { initializeI18n } from './i18n/i18next.client';

// Initialize i18next before hydration
initializeI18n()
  .then((i18n) => {
    startTransition(() => {
      hydrateRoot(
        document,
        <StrictMode>
          <I18nextProvider i18n={i18n}>
            <RemixBrowser />
          </I18nextProvider>
        </StrictMode>
      );
    });
  })
  .catch((error) => {
    console.error('Failed to initialize i18next:', error);
    // Still hydrate the app even if i18next fails
    startTransition(() => {
      hydrateRoot(
        document,
        <StrictMode>
          <RemixBrowser />
        </StrictMode>
      );
    });
  });

import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { RemixI18Next } from 'remix-i18next/server';
import { initReactI18next } from 'react-i18next';
import { baseConfig, fallbackLng, locales } from './i18n.config';
import type { InitOptions } from 'i18next';

// Ensure we have valid language settings
const supportedLanguages = Array.isArray(locales) ? locales : ['en'];
const fallbackLanguage = typeof fallbackLng === 'string' ? fallbackLng : 'en';

// Create and configure the i18next instance
const i18n = createInstance();

// Server-side i18next configuration
const serverConfig: InitOptions = {
  ...baseConfig,
};

// Initialize i18next instance
i18n
  .use(initReactI18next)
  .use(
    resourcesToBackend(async (language: string, namespace: string) => {
      try {
        // Load translations from the public directory
        const module = await import(`../../public/locales/${language}/${namespace}.json`);
        return module.default;
      } catch (error) {
        console.error(`Failed to load translations for ${language}/${namespace}:`, error);
        return {};
      }
    })
  )
  .init(serverConfig);

// Create and export the RemixI18Next instance
const remixI18next = new RemixI18Next({
  detection: {
    supportedLanguages,
    fallbackLanguage,
  },
  i18next: serverConfig,
});

// Export both the RemixI18Next instance and the i18next instance
export default remixI18next;

export { i18n };

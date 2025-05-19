import { createInstance, type i18n as i18nType } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { URL } from 'node:url';
import { initReactI18next } from 'react-i18next';
import { baseConfig, clientConfig, fallbackLng, serverConfig } from './i18n.config';

export let i18n: i18nType;

export const initI18n = (request: Request) => {
  const url = new URL(request.url);
  const lng = url.searchParams.get('lng') || fallbackLng;

  // console.log('i18nextServer: lng', lng);

  if (i18n && i18n.isInitialized) {
    i18n.changeLanguage(lng);
    return i18n;
  }

  // Server-side i18next configuration
  const config = {
    ...baseConfig,
    ...clientConfig,
    ...serverConfig,
    lng,
  };

  // Create and configure the i18next instance
  i18n = createInstance();

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
    .init(config);

  return i18n;
};

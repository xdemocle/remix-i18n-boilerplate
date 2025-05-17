import type { InitOptions } from 'i18next';

// Debug mode flag
export const debug = process.env.NODE_ENV === 'development';

export const defaultNS = 'common' as const;
export const fallbackLng = 'en' as const;
export const locales = ['en', 'es'] as const;
export const namespaces = ['common', 'faq', 'home'] as const;

// Base configuration shared between client and server
const baseConfig: InitOptions = {
  defaultNS,
  fallbackLng,
  supportedLngs: [...locales],
  ns: [...namespaces],
  preload: ['en'],
  load: 'languageOnly',
  debug,
  // Ensure fallback works correctly
  fallbackNS: defaultNS,
  // Load all languages
  partialBundledLanguages: true,

  // Shared options
  interpolation: {
    escapeValue: false,
  },

  // Performance settings
  saveMissing: false,
  saveMissingTo: 'current',
  parseMissingKeyHandler: (key) => {
    return key;
  },
};

// Language detection options
export const detectionConfig: InitOptions['detection'] = {
  order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
  caches: ['cookie', 'localStorage'],
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
};

// Export the base configuration for extension
export { baseConfig };

// Client-specific configuration
export const clientConfig: Partial<InitOptions> = {
  // React-specific options
  react: {
    useSuspense: false,
    bindI18n: 'languageChanged loaded',
    bindI18nStore: 'added removed',
  },

  // Client backend configuration
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
    requestOptions: {
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  },
};

// Server-specific configuration
export const serverConfig: Partial<InitOptions> = {
  // Server backend configuration
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
  },
};

// Default export includes client-side defaults
export default { ...baseConfig, ...clientConfig, detection: detectionConfig } as InitOptions;

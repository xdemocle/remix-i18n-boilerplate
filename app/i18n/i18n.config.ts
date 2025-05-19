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
  preload: [fallbackLng],
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
  caches: debug ? undefined : [fallbackLng],
  lookupQuerystring: 'lng',
  lookupLocalStorage: 'i18nextLng',
  lookupSessionStorage: 'i18nextLng',
  order: ['querystring', 'cookie', 'navigator', 'htmlTag'],
};

// Export the base configuration for extension
export { baseConfig };

// Client-specific configuration
export const clientConfig: Partial<InitOptions> = {
  // React-specific options
  react: {
    useSuspense: false,
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
  initAsync: false,
};

// Default export includes client-side defaults
export default { ...baseConfig, ...clientConfig, detection: detectionConfig } as InitOptions;

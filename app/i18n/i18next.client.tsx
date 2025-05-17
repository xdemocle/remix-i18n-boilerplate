import i18next from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { baseConfig, clientConfig, detectionConfig, namespaces, fallbackLng, defaultNS } from './i18n.config';

// Use HTTP backend for client-side
const backend = HttpBackend;

/**
 * Initialize i18next with all required configurations
 * This is the central initialization function for i18next
 */
export async function initializeI18n() {
  // Check if already initialized
  if (i18next.isInitialized) {
    return i18next;
  }

  // Create a new instance for clean initialization
  const instance = i18next;

  try {
    // Initialize with basic configuration first
    await instance
      .use(initReactI18next)
      .use(backend)
      .use(I18nextBrowserLanguageDetector)
      .init({
        ...baseConfig,
        ...clientConfig,
        detection: detectionConfig,
        // Ensure resources are loaded
        initImmediate: false,
      });

    // Load initial translations
    const currentLang = instance.language || 'en';
    await Promise.all(
      namespaces.map((ns: string) =>
        instance.loadNamespaces(ns).then(() => {
          console.debug(`Loaded namespace ${ns} for language ${currentLang}`);
        })
      )
    );

    console.log('i18next initialization complete');
    return instance;
  } catch (error) {
    console.error('Failed to initialize i18next:', error);
    // Initialize with fallback configuration
    await instance.init({
      ...baseConfig,
      lng: fallbackLng,
      ns: [defaultNS],
      resources: {
        [fallbackLng]: {
          [defaultNS]: {},
        },
      },
    });
    return instance;
  }
}

// Initialize and export i18next instance for direct usage
export const i18n = i18next;

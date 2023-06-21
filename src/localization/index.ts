import i18n, { LanguageDetectorAsyncModule } from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import { en, nl } from './locales';

const defaultLang = 'en';

export const LANGUAGES = {
  en: {
    translation: en,
  },
  nl: {
    translation: nl,
  },
};
export type TLangCodes = keyof typeof LANGUAGES;

export const LANG_CODES = Object.keys(LANGUAGES);

/*
 * Here is handled the language detector
 * Can be extended to  retrieve or get it from the storage to initialize it.
 */

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    const getLanguage = async () => {
      const findBestAvailableLanguage =
        RNLocalize.findBestLanguageTag(LANG_CODES);
      callback(findBestAvailableLanguage?.languageTag || defaultLang);
      return;
    };
    getLanguage();
  },
  init: () => null,
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    compatibilityJSON: 'v3',
    resources: LANGUAGES,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    returnNull: false,
    parseMissingKeyHandler: () => 'missing',
  });

export default i18n;

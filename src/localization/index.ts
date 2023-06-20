import i18n, { LanguageDetectorAsyncModule } from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import { en, nl } from './locales';
import { getDataFromAsyncStorage, storeDataToAsyncStorage } from '../utils';
import { EAsyncStorageKeys } from '../models';

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

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    const getLanguage = async () => {
      const savedLang = await getDataFromAsyncStorage(
        EAsyncStorageKeys.LANGUAGE,
      );
      if (!savedLang) {
        const findBestAvailableLanguage =
          RNLocalize.findBestLanguageTag(LANG_CODES);
        callback(findBestAvailableLanguage?.languageTag || defaultLang);
        return;
      }
      callback(savedLang);
    };
    getLanguage();
  },
  init: () => null,
  cacheUserLanguage: (lng: string) => {
    console.log(
      '🚀 ~ file: index.ts:46 ~ languageDetector: LanguageDetectorAsyncModule.lng:',
      lng,
    );
    storeDataToAsyncStorage(EAsyncStorageKeys.LANGUAGE, lng);
  },
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

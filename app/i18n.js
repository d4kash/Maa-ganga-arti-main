// i18n.js
// i18n.js
"use client";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from '../public/locales/en/translation.json';
import translationHI from '../public/locales/hi/translation.json';
import translationBN from '../public/locales/bn/translation.json';
import translationTE from '../public/locales/te/translation.json';
import translationTA from '../public/locales/ta/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  hi: {
    translation: translationHI,
  },
  bn: {
    translation: translationBN,
  },
  te: {
    translation: translationTE,
  },
  ta: {
    translation: translationTA,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;


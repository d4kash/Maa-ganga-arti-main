// LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex justify-center mb-4">
      <button onClick={() => changeLanguage('en')} className="mx-2">English</button>
      <button onClick={() => changeLanguage('hi')} className="mx-2">हिन्दी</button>
      <button onClick={() => changeLanguage('bn')} className="mx-2">বাংলা</button>
      <button onClick={() => changeLanguage('ta')} className="mx-2">தமிழ்</button>
      <button onClick={() => changeLanguage('te')} className="mx-2">తెలుగు</button>
    </div>
  );
};

export default LanguageSwitcher;
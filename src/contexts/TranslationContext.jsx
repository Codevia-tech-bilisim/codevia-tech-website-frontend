import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../locales/translations';
const TranslationContext = createContext();
export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'tr';
  });
  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);
  const t = (key) => {
    return translations[language][key] || key;
  };
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'tr' ? 'en' : 'tr');
  };
  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t
  };
  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};
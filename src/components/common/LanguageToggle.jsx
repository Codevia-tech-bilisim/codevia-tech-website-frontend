import React from 'react';
import { useTranslation } from '../../contexts/TranslationContext'; // Get translation functions
import { Languages } from 'lucide-react';
const LanguageToggle = () => {
  const { language, toggleLanguage } = useTranslation(); // Get current language and toggle function
  return (
    <button
      onClick={toggleLanguage} // Switch language on click
      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition-all hover:bg-white/10 hover:text-white"
      aria-label="Switch language"
    >
      <Languages className="h-4 w-4" />
      <span className="font-medium">
        {/* Show opposite language code */}
        {language === 'tr' ? 'EN' : 'TR'}
      </span>
    </button>
  );
};
export default LanguageToggle;
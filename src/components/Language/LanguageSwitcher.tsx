import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from './LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const { changeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (language: string) => {
    changeLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => handleLanguageChange('en')}>English</button>
      <button onClick={() => handleLanguageChange('pt')}>Português</button>
      <button onClick={() => handleLanguageChange('es')}>Español</button>
    </div>
  );
};

export default LanguageSwitcher;
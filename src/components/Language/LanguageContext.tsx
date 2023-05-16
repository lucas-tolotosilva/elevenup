import React, { createContext } from 'react';

export interface LanguageContextProps {
  changeLanguage: (language: string) => void;
}

export const LanguageContext = createContext<LanguageContextProps>({
  changeLanguage: () => {}
});
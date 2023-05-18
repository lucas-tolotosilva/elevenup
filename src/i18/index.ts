import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import pt from './locales/pt/pt-br.json'
import en from './locales/en/en-us.json'
import es from './locales/es/es.json'
// Adicione as traduções que você deseja suportar
const resources = {
  en: { ...en },
  pt: { ...pt },
  es: { ...es }

};

i18n
  .use(initReactI18next) // Adiciona o plugin do React para o i18next
  .init({
    resources,
    lng: 'pt', // Define o idioma padrão como português
    interpolation: {
      escapeValue: false // Permite que você insira valores HTML nas traduções
    }
  });

export default i18n;
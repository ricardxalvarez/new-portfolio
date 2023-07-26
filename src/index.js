import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
i18n
  .use(Backend)
  .use(LanguageDetector)
  // .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'en',
    detection: {
      order: ['cookie', 'localStorage', 'navigator'],
      caches: ['cookie', 'localStorage'],
    },
    backend: {
      loadPath: '/translations/{{lng}}.json', // Updated path to your translation files.
    },
    react: {
      useSuspense: false,
    },
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

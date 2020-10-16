import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        lng: 'it',
        fallbackLng: 'en',
        debug: false,
        keySeparator: '.',
        whitelist: ['it', 'en'],

        ns: ['commons', 'sessions', 'details', 'kpis', 'errors', 'sessions_status'],

        backend: {
            loadPath: `${process.env.REACT_APP_BASENAME}locales/{{lng}}/{{ns}}.json`
        },

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    });

export default i18n

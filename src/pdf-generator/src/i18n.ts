// noinspection JSUnusedGlobalSymbols,JSIgnoredPromiseFromCall

import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../resources/translations/en.json' with {type: 'json'};
import pl from '../resources/translations/pl.json' with {type: 'json'};

export const resources = {
    en: {
        translation: en,
    },
    pl: {
        translation: pl,
    }
} as const

i18n
    .use(initReactI18next)
    .init({
        resources: resources,
        lng: "en",
        fallbackLng: 'en',

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    });


export default i18n;

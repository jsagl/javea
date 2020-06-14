import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // we init with resources
        resources: {
            en: {
                translations: {
                    navLinkPhotos: "Photos",
                    navLinkAmenities: "Amenities",
                    navLinkReviews: "Reviews",
                    navLinkLocation: "Location",
                    propertyTitle: "Beautiful family house in the heart of spanish Côte d'Azur",
                }
            },
            fr: {
                translations: {
                    navLinkPhotos: "Photos",
                    navLinkAmenities: "Commodités",
                    navLinkReviews: "Avis",
                    navLinkLocation: "Localisation",
                }
            }
        },
        fallbackLng: "en",
        debug: true,

        // have a common namespace used around the full app
        ns: ["translations"],
        defaultNS: "translations",

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;

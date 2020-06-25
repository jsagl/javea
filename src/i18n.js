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
                    navLinkContact: 'Contact',
                    propertyTitle: "Beautiful family house in the heart of spanish Côte d'Azur",
                    languageListener: 'en',
                    addDatesForPrice: 'Add dates for prices',
                    startDate: 'Start date',
                    numOfWeeks: 'Number of weeks',
                    oneWeek: 'One week',
                    twoWeeks: 'Two weeks',
                    threeWeeks: 'Three weeks',
                    fourWeeks: 'Four weeks',
                    fiveWeeks: 'Five weeks',
                    sixWeeks: 'Six weeks',
                    sevenWeeks: 'Seven weeks',
                    eightWeeks: 'Eight weeks',
                    week: 'week',
                    weeks: 'week(s)',
                    longStayDiscount: 'Long stay discount',
                    cleaningFee: 'Cleaning fee',
                    occupancyFee: 'Occupancy taxes & fees',
                    total: 'Total',
                    checkPrices: 'Check prices',
                    contactUs: 'Contact us to book now',
                }
            },
            fr: {
                translations: {
                    navLinkPhotos: "Photos",
                    navLinkAmenities: "Commodités",
                    navLinkReviews: "Avis",
                    navLinkLocation: "Localisation",
                    addDatesForPrice: 'Entrez vos dates pour les prix',
                    languageListener: 'fr',
                }
            },
            es: {
                translations: {
                    languageListener: 'es',
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

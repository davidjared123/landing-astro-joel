import english from "./en.json";
import spanish from "./es.json";

const LANGUAGES = {
  en: english,
  es: spanish,
};

export const getI18n = ({ currentLocale }) => {
  if (currentLocale === "es") {
    return LANGUAGES.es;
  }
  if (currentLocale === "en") {
    return LANGUAGES.en;
  }
  return LANGUAGES.en;
};

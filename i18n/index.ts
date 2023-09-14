import I18n from "react-native-i18n";
import translation from "./en/translation";
import translation2 from "./ru/translation2";

I18n.fallbacks = "ru"; // let 'en-GB' fallback to 'en' if not found
I18n.locale = "ru";
I18n.translations = {
  en: translation,
  ru: translation2,
};

export default I18n;

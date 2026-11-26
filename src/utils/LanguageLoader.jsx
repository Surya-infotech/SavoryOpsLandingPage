import { DEFAULT_LANGUAGE, normalizeSupportedLanguage } from '../constants/languages';

const loadLanguage = async (lang) => {
    const resolvedLang = normalizeSupportedLanguage(lang) || DEFAULT_LANGUAGE;
    try {
        const translations = await import(`../Translations/${resolvedLang}.json`);
        return translations.default;
    } catch (error) {
        console.log(`Error loading language file for ${resolvedLang}`, error);
        if (resolvedLang !== DEFAULT_LANGUAGE) {
            try {
                const fallback = await import(`../Translations/${DEFAULT_LANGUAGE}.json`);
                return fallback.default;
            } catch {
                return {};
            }
        }
        return {};
    }
};

export default loadLanguage;
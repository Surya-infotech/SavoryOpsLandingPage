export const DEFAULT_LANGUAGE = 'English';
export const SELECTED_LANGUAGE_KEY = 'selectedLanguage';
export const LANGUAGE_SOURCE_KEY = 'selectedLanguageSource';

const LANGUAGE_OPTIONS = [
    { name: 'Arabic', code: 'SA', short: 'Ara', bcp47: 'ar' },
    { name: 'Chinese (S)', code: 'CN', short: 'ZH-S', bcp47: 'zh-CN' },
    { name: 'Chinese (T)', code: 'TW', short: 'ZH-T', bcp47: 'zh-TW' },
    { name: 'Dutch', code: 'NL', short: 'Dut', bcp47: 'nl' },
    { name: 'English', code: 'GB', short: 'Eng', bcp47: 'en' },
    { name: 'Estonian', code: 'EE', short: 'Est', bcp47: 'et' },
    { name: 'Farsi', code: 'IR', short: 'Far', bcp47: 'fa' },
    { name: 'French', code: 'FR', short: 'Fre', bcp47: 'fr' },
    { name: 'German', code: 'DE', short: 'Ger', bcp47: 'de' },
    { name: 'Greek', code: 'GR', short: 'Gre', bcp47: 'el' },
    { name: 'Italian', code: 'IT', short: 'Ita', bcp47: 'it' },
    { name: 'Polish', code: 'PL', short: 'Pol', bcp47: 'pl' },
    { name: 'Portuguese', code: 'PT', short: 'Por', bcp47: 'pt' },
    { name: 'Portuguese (Brazil)', code: 'BR', short: 'PT-BR', bcp47: 'pt-BR' },
    { name: 'Romanian', code: 'RO', short: 'Rom', bcp47: 'ro' },
    { name: 'Russian', code: 'RU', short: 'Rus', bcp47: 'ru' },
    { name: 'Spanish', code: 'ES', short: 'Spa', bcp47: 'es' },
    { name: 'Turkish', code: 'TR', short: 'Tur', bcp47: 'tr' },
];

const LOCALE_BASE_TO_LANGUAGE = {
    ar: 'Arabic',
    nl: 'Dutch',
    en: 'English',
    et: 'Estonian',
    fa: 'Farsi',
    pes: 'Farsi',
    prs: 'Farsi',
    fr: 'French',
    de: 'German',
    el: 'Greek',
    it: 'Italian',
    pl: 'Polish',
    pt: 'Portuguese',
    ro: 'Romanian',
    ru: 'Russian',
    es: 'Spanish',
    tr: 'Turkish',
};

const TRADITIONAL_CHINESE_SUBTAGS = new Set(['hant', 'tw', 'hk', 'mo']);

/**
 * Maps a BCP-47 browser locale (e.g. 'pt-BR', 'zh-TW', 'fr-FR') to a supported language name.
 * Returns null when the locale is not supported by the application.
 */
export const mapBrowserLocaleToLanguage = (locale) => {
    if (!locale) return null;
    const normalized = String(locale).trim().replace(/_/g, '-').toLowerCase();
    if (!normalized) return null;

    const parts = normalized.split('-').filter(Boolean);
    const base = parts[0];

    if (base === 'pt') {
        return parts.includes('br') ? 'Portuguese (Brazil)' : 'Portuguese';
    }

    if (base === 'zh') {
        const isTraditional = parts.some((part) => TRADITIONAL_CHINESE_SUBTAGS.has(part));
        return isTraditional ? 'Chinese (T)' : 'Chinese (S)';
    }

    return LOCALE_BASE_TO_LANGUAGE[base] || null;
};

/**
 * Validates and normalizes a stored or requested language value to a canonical option name.
 */
export const normalizeSupportedLanguage = (lang) => {
    if (!lang) return null;
    const trimmed = String(lang).trim();
    if (!trimmed) return null;

    const lower = trimmed.toLowerCase();
    const directMatch = LANGUAGE_OPTIONS.find((option) => option.name.toLowerCase() === lower);
    if (directMatch) return directMatch.name;

    return mapBrowserLocaleToLanguage(trimmed);
};

/**
 * Detects the primary browser language and maps it to a supported software language,
 * falling back to English immediately if the browser's primary language is not supported.
 */
export const detectBrowserLanguage = () => {
    if (typeof navigator === 'undefined') return DEFAULT_LANGUAGE;

    const primaryLocale =
        navigator.language ||
        (Array.isArray(navigator.languages) ? navigator.languages[0] : null) ||
        navigator.userLanguage;

    return mapBrowserLocaleToLanguage(primaryLocale) || DEFAULT_LANGUAGE;
};

/**
 * Resolves the initial application language: respects an explicit manual selection in storage,
 * otherwise auto-detects from the browser and falls back to English.
 */
export const resolveInitialLanguage = () => {
    if (typeof window === 'undefined' || !window.localStorage) {
        return detectBrowserLanguage();
    }

    const storedLang = normalizeSupportedLanguage(window.localStorage.getItem(SELECTED_LANGUAGE_KEY));
    const source = window.localStorage.getItem(LANGUAGE_SOURCE_KEY);

    if (storedLang && source === 'manual') {
        return storedLang;
    }

    return detectBrowserLanguage();
};

export const getLanguageHtmlCode = (lang) => {
    const normalized = normalizeSupportedLanguage(lang) || DEFAULT_LANGUAGE;
    return LANGUAGE_OPTIONS.find((option) => option.name === normalized)?.bcp47 || 'en';
};

export const isRtlLanguage = (lang) => {
    if (!lang) return false;
    const lower = String(lang).trim().toLowerCase();
    return (
        lower === 'arabic' ||
        lower === 'ar' ||
        lower === 'sa' ||
        lower === 'farsi' ||
        lower === 'persian' ||
        lower === 'fa' ||
        lower === 'ir'
    );
};

export const getLanguageOptions = () => [...LANGUAGE_OPTIONS].sort((a, b) => a.name.localeCompare(b.name));

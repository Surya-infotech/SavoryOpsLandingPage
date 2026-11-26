import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import loadLanguage from '../utils/LanguageLoader';
import {
    DEFAULT_LANGUAGE,
    LANGUAGE_SOURCE_KEY,
    SELECTED_LANGUAGE_KEY,
    detectBrowserLanguage,
    getLanguageHtmlCode,
    isRtlLanguage,
    normalizeSupportedLanguage,
    resolveInitialLanguage,
} from '../constants/languages';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => resolveInitialLanguage());
    const [translations, setTranslations] = useState({});
    const isRtl = isRtlLanguage(language);

    const changeLanguage = useCallback((lang, { manual = true } = {}) => {
        if (!lang) return;
        const resolvedLang = normalizeSupportedLanguage(lang) || DEFAULT_LANGUAGE;
        setLanguage(resolvedLang);
        if (typeof window !== 'undefined' && window.localStorage) {
            window.localStorage.setItem(SELECTED_LANGUAGE_KEY, resolvedLang);
            window.localStorage.setItem(LANGUAGE_SOURCE_KEY, manual ? 'manual' : 'auto');
        }
    }, []);

    useEffect(() => {
        if (typeof document !== 'undefined') {
            const dir = isRtl ? 'rtl' : 'ltr';
            document.documentElement.dir = dir;
            document.documentElement.setAttribute('dir', dir);
            document.body.dir = dir;
            document.body.setAttribute('dir', dir);
            document.body.classList.toggle('rtl-mode', isRtl);
            document.documentElement.setAttribute('lang', getLanguageHtmlCode(language));
        }
    }, [isRtl, language]);

    useEffect(() => {
        let isActive = true;

        if (typeof window !== 'undefined' && window.localStorage) {
            const currentSource = window.localStorage.getItem(LANGUAGE_SOURCE_KEY);
            window.localStorage.setItem(SELECTED_LANGUAGE_KEY, language);
            if (currentSource !== 'manual') {
                window.localStorage.setItem(LANGUAGE_SOURCE_KEY, 'auto');
            }
        }

        loadLanguage(language).then((loadedTranslations) => {
            if (isActive) {
                setTranslations(loadedTranslations);
            }
        });

        return () => {
            isActive = false;
        };
    }, [language]);

    useEffect(() => {
        if (typeof window === 'undefined') return undefined;

        const handleBrowserLanguageChange = () => {
            const storedLang = window.localStorage.getItem(SELECTED_LANGUAGE_KEY);
            const source = window.localStorage.getItem(LANGUAGE_SOURCE_KEY);
            if (source === 'manual' && normalizeSupportedLanguage(storedLang)) {
                return;
            }
            changeLanguage(detectBrowserLanguage(), { manual: false });
        };

        window.addEventListener('languagechange', handleBrowserLanguageChange);
        return () => window.removeEventListener('languagechange', handleBrowserLanguageChange);
    }, [changeLanguage]);

    return (
        <LanguageContext.Provider value={{ language, translations, changeLanguage, isRtl }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
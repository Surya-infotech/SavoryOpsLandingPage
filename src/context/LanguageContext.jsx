import { createContext, useContext, useEffect, useState } from 'react';
import loadLanguage from '../utils/LanguageLoader';
import { isRtlLanguage } from '../constants/languages';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(localStorage.getItem('selectedLanguage') || 'English');
    const [translations, setTranslations] = useState({});
    const isRtl = isRtlLanguage(language);

    const changeLanguage = async (lang) => {
        if (!lang) return;
        setLanguage(lang);
        localStorage.setItem('selectedLanguage', lang);
        const loadedTranslations = await loadLanguage(lang);
        setTranslations(loadedTranslations);
    };

    useEffect(() => {
        if (typeof document !== 'undefined') {
            const dir = isRtl ? 'rtl' : 'ltr';
            document.documentElement.dir = dir;
            document.documentElement.setAttribute('dir', dir);
            document.body.dir = dir;
            document.body.setAttribute('dir', dir);
            document.body.classList.toggle('rtl-mode', isRtl);
            document.documentElement.setAttribute('lang', isRtl ? 'ar' : (language === 'English' ? 'en' : language.toLowerCase()));
        }
    }, [isRtl, language]);

    useEffect(() => {
        changeLanguage(language);
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, translations, changeLanguage, isRtl }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
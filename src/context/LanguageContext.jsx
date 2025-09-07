import { createContext, useContext, useEffect, useState } from 'react';
import loadLanguage from '../utils/LanguageLoader';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(localStorage.getItem('selectedLanguage') || 'English');
    const [translations, setTranslations] = useState({});

    const changeLanguage = async (lang) => {
        setLanguage(lang);
        localStorage.setItem('selectedLanguage', lang);
        const loadedTranslations = await loadLanguage(lang);
        setTranslations(loadedTranslations);
    };

    useEffect(() => {
        changeLanguage(language);
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, translations, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);

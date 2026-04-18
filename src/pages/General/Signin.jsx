import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Flag from 'react-world-flags';
import { useLanguage } from '../../context/LanguageContext';
import { getLanguageOptions } from '../../constants/languages';
import { useAppSettings } from '../../context/AppSettingsContext.jsx';
import '../../styles/General/signin.scss';
import AlertMessage from '../Custom/AlertMessage';
import WarningModal from '../Custom/WarningModal';

const OwnerLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const BackendPath = import.meta.env.VITE_BACKEND_URL;
    const host = import.meta.env.VITE_HOST;
    const tld = import.meta.env.VITE_TLD;
    const HOME_URL = import.meta.env.VITE_HOME_URL || '/';
    const adminPanelUrl = import.meta.env.VITE_ADMIN_PANEL_URL?.trim() || '';
    const [alertMessage, setAlertMessage] = useState("");
    const [isLanguageDropdownVisible, setLanguageDropdownVisible] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(() => localStorage.getItem('selectedLanguage') || 'English');
    const { translations } = useLanguage();
    const [isLoading, setIsLoading] = useState(false);
    const [formError, setFormError] = useState('');
    const [warningMessage, setWarningMessage] = useState("");
    const [showWarning, setShowWarning] = useState(false);
    const { logoUrl, softwareName, setLogoUrl } = useAppSettings();

    const languages = getLanguageOptions();

    const toggleLanguageDropdown = () => setLanguageDropdownVisible(!isLanguageDropdownVisible);

    useEffect(() => {
        if (translations.signin) document.title = translations.signin;
    }, [translations]);

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language.name);
        localStorage.setItem('selectedLanguage', language.name);
        setLanguageDropdownVisible(false);
        window.location.reload();
    };

    const handleClickOutside = (event) => {
        const languageDropdown = document.querySelector('.language-dropdown');
        if (languageDropdown && !languageDropdown.contains(event.target)) setLanguageDropdownVisible(false);
    };

    useEffect(() => {
        if (isLanguageDropdownVisible) document.addEventListener('mousedown', handleClickOutside);
        else document.removeEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isLanguageDropdownVisible]);

    // useEffect(() => {
    //     const urlParams = new URLSearchParams(window.location.search);
    //     const successMessage = urlParams.get('message');

    //     if (successMessage) {
    //         setAlertMessage(decodeURIComponent(successMessage));
    //         urlParams.delete('message');
    //         const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
    //         window.history.replaceState({}, '', newUrl);
    //     }

    // }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setFormError('');
        try {
            const response = await fetch(`${BackendPath}/General/owner/Signin`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', "x-user": "admin" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                const { Token, id, subdomain } = data.owner;
                const subdomainUrl = `${host}://${subdomain}.savoryops.${tld}/token-middleware?token=${Token}&id=${id}&success=${translations.signinsucessful}`;
                window.location.href = subdomainUrl;
            }
            else {
                const errorMessages = {
                    "Owner not found": translations.ownernotfound,
                    "All fields are required": translations.allfieldrequired,
                    "Invalid email or password": translations.invailidemailorpassword,
                    "Server error": translations.servererror
                };
                setFormError(errorMessages[data.message] || data.message);
            }
        } catch {
            setWarningMessage(translations.servererror);
            setShowWarning(true);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDemoOwner = () => {
        setEmail('marcus@gmail.com');
        setPassword('12345678');
    };

    return (<>
        {showWarning && <WarningModal message={warningMessage} onClose={() => setShowWarning(false)} />}
        {alertMessage && <AlertMessage message={alertMessage} onClose={() => setAlertMessage("")} />}
        <div className="full-page">
            <div className="language-container">
                <div className="language-dropdown" onClick={toggleLanguageDropdown}>
                    <button type="button">
                        <Flag
                            code={languages.find(lang => lang.name === selectedLanguage)?.code}
                            style={{ width: '20px' }}
                            alt={selectedLanguage}
                        />
                        <span className="language-dropdown__name">{selectedLanguage.substring(0, 3)}</span>
                    </button>
                    {isLanguageDropdownVisible && (
                        <div className="language-dropdown-menu">
                            <ul>
                                {languages.map((language) => (
                                    <li
                                        key={language.code}
                                        className={language.name === selectedLanguage ? 'selected' : ''}
                                        onClick={() => handleLanguageSelect(language)}
                                    >
                                        <Flag code={language.code} style={{ width: '20px' }} alt={language.name} />
                                        <span className="language-dropdown__name">{language.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div className="login-container">
                <div className="logo-container">
                    <a href={HOME_URL} className="logo-button">
                        {logoUrl ? (
                            <img
                                src={logoUrl}
                                className="logo"
                                alt=""
                                onError={() => setLogoUrl(null)}
                            />
                        ) : null}
                        <h2>{softwareName}</h2>
                    </a>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>{translations.email}</label>
                        <input
                            type="email"
                            placeholder={translations.emailidplaceholder || translations.emailplaceholder}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>{translations.password}</label>
                        <input
                            type="password"
                            placeholder={translations.passwordplaceholder}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {formError && <div className="error-message">{formError}</div>}
                    <button type="submit" className="login-button" disabled={isLoading}>
                        {isLoading ? translations.signingin : translations.signin}
                    </button>
                    <button type="button" className="demo-admin-button" onClick={handleDemoOwner}>
                        {translations.demoowner}
                    </button>
                </form>
                <div className="form-group signin">
                    <div className="signin-divider">
                        <span className="divider-line"></span>
                        <div className="divider-content">
                            <span className="divider-text">{translations.donothaveanaccount}</span>
                            <NavLink to="/Signup" className="signin-link">
                                {translations.signup}
                            </NavLink>
                        </div>
                        <span className="divider-line"></span>
                    </div>
                </div>
                {adminPanelUrl ? (
                    <div className="signin-admin-link">
                        <a href={adminPanelUrl} target="_blank" rel="noopener noreferrer">
                            {translations.demosuperadmin}
                        </a>
                    </div>
                ) : null}
            </div>
        </div>
    </>);
};

export default OwnerLogin;
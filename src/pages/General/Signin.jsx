import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Flag from 'react-world-flags';
import { useLanguage } from '../../context/LanguageContext';
import { getLanguageOptions } from '../../constants/languages';
import '../../styles/General/signin.scss';
import AlertMessage from '../Custom/AlertMessage';
import WarningModal from '../Custom/WarningModal';

const OwnerLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const BackendPath = import.meta.env.VITE_BACKEND_URL;
    const host = import.meta.env.VITE_HOST;
    const tld = import.meta.env.VITE_TLD;
    const [alertMessage, setAlertMessage] = useState("");
    const [isLanguageDropdownVisible, setLanguageDropdownVisible] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(() => localStorage.getItem('selectedLanguage') || 'English');
    const { translations } = useLanguage();
    const [isLoading, setIsLoading] = useState(false);
    const [formError, setFormError] = useState('');
    const [warningMessage, setWarningMessage] = useState("");
    const [showWarning, setShowWarning] = useState(false);
    const languages = getLanguageOptions();

    const toggleLanguageDropdown = () => setLanguageDropdownVisible(!isLanguageDropdownVisible);

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
        } catch (err) {
            console.log(err.message || 'Something went wrong');
            setWarningMessage(translations.servererror);
        } finally {
            setIsLoading(false);
        }
    };

    return (<>
        {showWarning && <WarningModal message={warningMessage} onClose={() => setShowWarning(false)} />}
        {alertMessage && <AlertMessage message={alertMessage} onClose={() => setAlertMessage("")} />}
        <div className="full-page">
            <div className="language-container">
                <div className="language-dropdown" onClick={toggleLanguageDropdown}>
                    <button onClick={toggleLanguageDropdown}>
                        <Flag
                            code={languages.find(lang => lang.name === selectedLanguage)?.code}
                            style={{ width: '20px', marginRight: '5px' }}
                            alt={selectedLanguage}
                        />
                        {selectedLanguage.substring(0, 3)}
                    </button>
                    {isLanguageDropdownVisible && (
                        <div className="language-dropdown-menu">
                            <ul>
                                {languages.map((language, index) => (
                                    <li key={index} onClick={() => handleLanguageSelect(language)}>
                                        <Flag code={language.code} style={{ width: '20px', marginRight: '10px' }} alt={language.name} />
                                        {language.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div className="login-container">
                <div className="logo-container">
                    <a href="/" className="logo-button">
                        <img src="/logo.png" alt="Logo" className="logo" />
                        <h2>SavoryOps</h2>
                    </a>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>{translations.email}</label>
                        <input
                            type="email"
                            placeholder={translations.emailplaceholder}
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
                </form>
                <div className="form-group signup">
                    <h6>{translations.donothaveanaccount}</h6>
                    <NavLink to="/Signup">{translations.signup}</NavLink>
                </div>
            </div>
        </div>
    </>);
};

export default OwnerLogin;
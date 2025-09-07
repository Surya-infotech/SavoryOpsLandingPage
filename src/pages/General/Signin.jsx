import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Flag from 'react-world-flags';
import { useLanguage } from '../../context/LanguageContext';
import '../../styles/General/signin.scss';
import AlertMessage from '../Custom/AlertMessage';
import WarningModal from '../Custom/WarningModal';

const OwnerLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const BackendPath = import.meta.env.VITE_BACKEND_URL;
    const tokenname = import.meta.env.VITE_AdminTOKEN_NAME;
    const token = localStorage.getItem(tokenname);
    const [warningMessage, setWarningMessage] = useState("");
    const [showWarning, setShowWarning] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [isLanguageDropdownVisible, setLanguageDropdownVisible] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(() => localStorage.getItem('selectedLanguage') || 'English');
    const { translations } = useLanguage();

    const languages = [
        { name: 'English', code: 'GB' },
        { name: 'Spanish', code: 'ES' },
        { name: 'French', code: 'FR' },
        { name: 'German', code: 'DE' },
        { name: 'Italian', code: 'IT' },
        { name: 'Irish', code: 'IE' },
        { name: 'Romanian', code: 'RO' },
        { name: 'Greek', code: 'GR' },
        { name: 'Dutch', code: 'NL' },
    ].sort((a, b) => a.name.localeCompare(b.name));

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

    // const checkToken = async () => {
    //     if (!CheckToken(token, logoutUser, navigate)) return;
    //     try {
    //         const response = await fetch(`${BackendPath}/General/owner/verify-token`, {
    //             method: "GET",
    //             headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', "x-user": "admin" },
    //         });
    //         const data = await response.json();
    //         if (response.ok) {
    //             const { subdomain } = data.owner;
    //             const subdomainUrl = `http://${subdomain}.savoryops.local/Home/Dashboard`;
    //             window.location.href = subdomainUrl;
    //         }
    //         else {
    //             logoutUser();
    //             navigate("/Signin");
    //         }
    //     } catch (error) {
    //         console.log("Error verifying token:", error);
    //         logoutUser();
    //         navigate("/Signin");
    //     }
    // };

    // useEffect(() => {
    //     const urlParams = new URLSearchParams(window.location.search);
    //     const successMessage = urlParams.get('message');

    //     if (successMessage) {
    //         setAlertMessage(decodeURIComponent(successMessage));
    //         urlParams.delete('message');
    //         const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
    //         window.history.replaceState({}, '', newUrl);
    //     }

    //     checkToken();

    // }, [logoutUser]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${BackendPath}/General/owner/Signin`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', "x-user": "admin" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {

                const { Token, id, subdomain } = data.owner;
                // const subdomainUrl = `http://${subdomain}.savoryops.local/token-middleware?token=${Token}&id=${id}&success=${translations.signinsucessful}`;

                const subdomainUrl = `https://${subdomain}.savoryops.com/token-middleware?token=${Token}&id=${id}&success=${translations.signinsucessful}`;
                window.location.href = subdomainUrl;
            }
            else {
                const errorMessages = {
                    "Owner not found": translations.ownernotfound,
                    "All fields are required": translations.allfieldrequired,
                    "Invalid email or password": translations.invailidemailorpassword,
                    "Server error": translations.servererror
                };
                setWarningMessage(errorMessages[data.message] || data.message);
                setShowWarning(true);
            }
        } catch (err) {
            console.log(err.message || 'Something went wrong');
            setWarningMessage(translations.servererror);
            setShowWarning(true);
        }
    };

    return (<>
        {alertMessage && <AlertMessage message={alertMessage} onClose={() => setAlertMessage("")} />}
        {showWarning && <WarningModal message={warningMessage} onClose={() => setShowWarning(false)} />}
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
                    <img src="/logo.png" alt="Logo" className="logo" />
                    <h2>SavoryOps</h2>
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
                    {/* <div className="form-group forgot-password">
                        <NavLink to="/forgot-password">{translations.forgotpassword}</NavLink>
                    </div> */}
                    <button type="submit" className="login-button">
                        {translations.signin}
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
import { useEffect, useState } from 'react';
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import 'react-phone-number-input/style.css';
import { NavLink } from 'react-router-dom';
import Flag from 'react-world-flags';
import { useLanguage } from '../../context/LanguageContext';
import '../../styles/General/signup.scss';
import WarningModal from '../Custom/WarningModal';

const OwnerSignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [gender, setGender] = useState('Male');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const BackendPath = import.meta.env.VITE_BACKEND_URL;
    const host = import.meta.env.VITE_HOST;
    const tld = import.meta.env.VITE_TLD;
    const [isLanguageDropdownVisible, setLanguageDropdownVisible] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(() => localStorage.getItem('selectedLanguage') || 'English');
    const { translations } = useLanguage();
    const [isLoading, setIsLoading] = useState(false);
    const [formError, setFormError] = useState('');
    const [warningMessage, setWarningMessage] = useState("");
    const [showWarning, setShowWarning] = useState(false);

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

    const handlePhoneChange = (value) => {
        setPhone(value || '');

        if (!value || value.trim() === '') {
            setPhoneError("");
            return;
        }

        try {
            const isValid = isValidPhoneNumber(value);

            if (isValid) {
                setPhoneError("");
            } else {
                if (value.length >= 10) {
                    setPhoneError(translations.invalidphonenumber);
                } else {
                    setPhoneError("");
                }
            }
        } catch {
            if (value.length >= 10) {
                setPhoneError(translations.invalidphonenumber);
            } else {
                setPhoneError("");
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setFormError('');

        if (password.length < 8 || password.length > 14) {
            setFormError(translations.passwordLengthError);
            setIsLoading(false);
            return;
        }

        let isPhoneValid = false;
        if (phone && phone.trim() !== '') {
            try {
                isPhoneValid = isValidPhoneNumber(phone);
            } catch {
                isPhoneValid = false;
            }
        }

        if (!isPhoneValid || !phone || phone.trim() === '') {
            setPhoneError(translations.invalidphonenumber);
            setFormError(translations.invalidphonenumber);
            setIsLoading(false);
            return;
        }

        setPhoneError("");

        if (!gender) {
            setFormError(translations.allfieldrequired);
            setIsLoading(false);
            return;
        }

        if (!termsAccepted) {
            setFormError(translations.youmustacceptthetermsandconditions);
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch(`${BackendPath}/General/owner/Signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json", "x-user": "admin" },
                body: JSON.stringify({ ownerfirstname: firstName, ownerlastname: lastName, email, password, phone, gender }),
            });
            const data = await response.json();
            if (response.ok) {
                const { token, id, subdomain } = data.owner;
                const subdomainUrl = `${host}://${subdomain}.savoryops.${tld}/token-middleware?token=${token}&id=${id}&success=${translations.signupsuccessful}`;
                window.location.href = subdomainUrl;
            } else {
                const errorMessages = {
                    "All fields are required": translations.allfieldrequired,
                    "Email ID Already Exists": translations.emailalreadyexists,
                    "Server error": translations.servererror
                };
                setFormError(errorMessages[data.message] || data.message);
            }
        } catch (error) {
            console.log("Failed to connect to the server", error);
            setWarningMessage(translations.servererror);
            setShowWarning(true);
        } finally {
            setIsLoading(false);
        }
    };

    return (<>
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
            <div className="signup-container">
                <div className="logo-container">
                    <img src="/logo.png" alt="Logo" className="logo" />
                    <h2>SavoryOps</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group name-fields">
                        <div className="name-field">
                            <label>{translations.firstname}</label>
                            <input
                                type="text"
                                placeholder={translations.enteryourfirstnameplaceholder}
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="name-field">
                            <label>{translations.lastname}</label>
                            <input
                                type="text"
                                placeholder={translations.enteryourlastnameplaceholder}
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group name-fields">
                        <div className="name-field">
                            <label>{translations.email}</label>
                            <input
                                type="email"
                                placeholder={translations.emailplaceholder}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="name-field">
                            <label>{translations.password}</label>
                            <input
                                type="password"
                                placeholder={translations.passwordplaceholder}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group name-fields">
                        <div className="name-field">
                            <label>{translations.phone}</label>
                            <div className={`phone-input-wrapper ${phoneError ? 'has-phone-error' : ''}`}>
                                <PhoneInput
                                    international
                                    defaultCountry="US"
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    placeholder={translations.phone}
                                    required
                                />
                                {phoneError && (
                                    <div className="phone-error-message">{phoneError}</div>
                                )}
                            </div>
                        </div>
                        <div className="name-field">
                            <label>{translations.gender}</label>
                            <div className="radio-group">
                                <div className="radio-option">
                                    <input
                                        type="radio"
                                        id="gender-male"
                                        name="gender"
                                        value="Male"
                                        checked={gender === 'Male'}
                                        onChange={(e) => setGender(e.target.value)}
                                        required
                                    />
                                    <label htmlFor="gender-male">{translations.male}</label>
                                </div>
                                <div className="radio-option">
                                    <input
                                        type="radio"
                                        id="gender-female"
                                        name="gender"
                                        value="Female"
                                        checked={gender === 'Female'}
                                        onChange={(e) => setGender(e.target.value)}
                                        required
                                    />
                                    <label htmlFor="gender-female">{translations.female}</label>
                                </div>
                                <div className="radio-option">
                                    <input
                                        type="radio"
                                        id="gender-intersex"
                                        name="gender"
                                        value="Intersex"
                                        checked={gender === 'Intersex'}
                                        onChange={(e) => setGender(e.target.value)}
                                        required
                                    />
                                    <label htmlFor="gender-intersex">{translations.intersex}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="checkbox">
                        <input
                            type="checkbox"
                            id="terms-checkbox"
                            checked={termsAccepted}
                            onChange={() => setTermsAccepted(!termsAccepted)}
                        />
                        <label htmlFor="terms-checkbox">
                            {translations.bysignupingyouagreetoour}
                            {/* <a href="/terms" target="_blank" rel="noopener noreferrer">{translations.termsandconditions}</a> */}
                            {/* {translations.and} */}
                            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">{translations.privacypolicy}</a>.
                        </label>
                    </div>
                    {formError && <div className="error-message">{formError}</div>}
                    <button type="submit" className="signup-button" disabled={isLoading}>
                        {isLoading ? 'Signing In...' : translations.signup}
                    </button>
                </form>
                <div className="form-group signin">
                    <h6>{translations.alreadyhaveanaccount}</h6>
                    <NavLink to="/Signin">{translations.signin}</NavLink>
                </div>
            </div>
        </div>
    </>);
};

export default OwnerSignUp;
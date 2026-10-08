import { useEffect, useState } from 'react';
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import 'react-phone-number-input/style.css';
import { NavLink } from 'react-router-dom';
import Flag from 'react-world-flags';
import { useLanguage } from '../../context/LanguageContext';
import { getLanguageOptions } from '../../constants/languages';
import { useAppSettings } from '../../context/AppSettingsContext.jsx';
import { getBrowserAndDeviceDetails, getIpAndLocation } from '../../utils/deviceDetails';
import '../../styles/General/signin.scss';
import '../../styles/General/signup.scss';
import WarningModal from '../Custom/WarningModal';
import SEOHead from '../../components/SEO/SEOHead';

const OwnerSignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [signupData, setSignupData] = useState(null);
    const BackendPath = import.meta.env.VITE_BACKEND_URL;
    const host = import.meta.env.VITE_HOST;
    const tld = import.meta.env.VITE_TLD;
    const HOME_URL = import.meta.env.VITE_HOME_URL || '/';
    const [isLanguageDropdownVisible, setLanguageDropdownVisible] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(() => localStorage.getItem('selectedLanguage') || 'English');
    const { translations } = useLanguage();
    const [referralCode, setReferralCode] = useState('');
    const [referralError, setReferralError] = useState('');
    const [validatedCode, setValidatedCode] = useState('');
    const [isValidatingReferral, setIsValidatingReferral] = useState(false);
    const [isCreatingAccount, setIsCreatingAccount] = useState(false);
    const [formError, setFormError] = useState('');
    const [warningMessage, setWarningMessage] = useState("");
    const [showWarning, setShowWarning] = useState(false);
    const { logoUrl, softwareName, setLogoUrl } = useAppSettings();

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

    // Pre-request / warm-up browser location so it is instantly available upon Sign Up
    useEffect(() => {
        if (typeof window !== 'undefined' && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                () => { },
                () => { },
                { enableHighAccuracy: true, timeout: 5000, maximumAge: 300000 }
            );
        }
    }, []);

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

    const validateReferralCode = async (codeToValidate) => {
        const trimmedCode = (codeToValidate || '').trim();
        if (!trimmedCode) {
            setReferralError('');
            setValidatedCode('');
            return true;
        }

        if (trimmedCode === validatedCode && !referralError) {
            return true;
        }

        if (referralError) {
            return false;
        }

        setIsValidatingReferral(true);
        try {
            const response = await fetch(`${BackendPath}/General/owner/ValidateReferralCode`, {
                method: "POST",
                headers: { "Content-Type": "application/json", "x-user": "admin" },
                body: JSON.stringify({ referralcode: trimmedCode }),
            });
            const data = await response.json();
            if (response.ok) {
                setReferralError('');
                setValidatedCode(trimmedCode);
                return true;
            } else {
                const errorMessages = {
                    "Referral code is required": translations.enterreferralcoderequired,
                    "Invalid referral code": translations.invalidreferralcode,
                    "Server error": translations.servererror
                };
                setReferralError(errorMessages[data.message] || translations.invalidreferralcode);
                setValidatedCode('');
                return false;
            }
        } catch {
            setWarningMessage(translations.servererror);
            setShowWarning(true);
            return false;
        } finally {
            setIsValidatingReferral(false);
        }
    };

    const handleReferralBlur = async () => {
        await validateReferralCode(referralCode);
    };

    const createAccount = async (usedReferralCode = null) => {
        setIsCreatingAccount(true);
        setReferralError('');
        setFormError('');

        try {
            const { browserdetails, device } = getBrowserAndDeviceDetails();
            const { ipaddress, location } = await getIpAndLocation();

            const signupBody = {
                ownerfirstname: firstName,
                ownerlastname: lastName,
                email,
                password,
                phone,
                browserdetails,
                ipaddress,
                device,
                location
            };

            if (usedReferralCode && usedReferralCode.trim()) {
                signupBody.usedreferralcode = usedReferralCode.trim().toUpperCase();
            }

            const signupResponse = await fetch(`${BackendPath}/General/owner/Signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json", "x-user": "admin" },
                body: JSON.stringify(signupBody),
            });
            const signupResult = await signupResponse.json();
            if (signupResponse.ok) {
                setSignupData(signupResult);
                setCurrentStep(2);
                setFormError('');
            } else {
                const errorMessages = {
                    "All fields are required": translations.allfieldrequired,
                    "Email ID Already Exists": translations.emailalreadyexists,
                    "Invalid referral code": translations.invalidreferralcode,
                    "Server error": translations.servererror
                };
                if (signupResult.message === "Invalid referral code") {
                    setReferralError(translations.invalidreferralcode || signupResult.message);
                } else {
                    setFormError(errorMessages[signupResult.message] || signupResult.message || translations.servererror);
                }
            }
        } catch {
            setWarningMessage(translations.servererror);
            setShowWarning(true);
        } finally {
            setIsCreatingAccount(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormError('');

        if (password.length < 8 || password.length > 14) {
            setFormError(translations.passwordLengthError);
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
            return;
        }

        setPhoneError("");

        if (!termsAccepted) {
            setFormError(translations.youmustacceptthetermsandconditions);
            return;
        }

        if (referralError) {
            return;
        }

        if (referralCode && referralCode.trim() !== '') {
            const isValid = await validateReferralCode(referralCode);
            if (!isValid) {
                return;
            }
        }

        await createAccount(referralCode);
    };

    const handleFinish = () => {
        if (signupData && signupData.owner) {
            const { token, id, subdomain } = signupData.owner;
            const successText = translations.signupsuccessful || 'Sign up successful';
            const subdomainUrl = `${host}://${subdomain}.savoryops.${tld}/token-middleware?token=${token}&id=${id}&userType=Owner&success=${encodeURIComponent(successText)}`;
            window.location.href = subdomainUrl;
        } else {
            window.location.href = '/signin';
        }
    };

    return (<>
        <SEOHead
            title={`Sign Up | Create Your ${softwareName || 'SavoryOps'} Account`}
            description={`Start your free trial with ${softwareName || 'SavoryOps'}. Register your restaurant and get access to cloud POS, KDS, inventory tracking, and tableside ordering.`}
            canonicalUrl="https://savoryops.com/signup"
            keywords={["SavoryOps signup", "register restaurant POS", "free POS trial", "cloud restaurant OS"]}
            primaryKeyword="Sign Up"
        />
        {showWarning && <WarningModal message={warningMessage} onClose={() => setShowWarning(false)} />}
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
                                {languages.map((language, index) => (
                                    <li
                                        key={index}
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
            <div className="signup-container">
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
                <div className="signup-wrapper">
                    <div className="signup-content">
                        {currentStep === 1 ? (
                            <form onSubmit={handleSubmit} className="signup-form">
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
                                            placeholder={translations.emailidplaceholder || translations.emailplaceholder}
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="name-field">
                                        <label>{translations.password}</label>
                                        <div className="password-input-wrapper">
                                            <input
                                                type="password"
                                                placeholder={translations.passwordplaceholder}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                        </div>
                                        {password && (password.length < 8 || password.length > 14) && (
                                            <div className="password-strength">
                                                <span className={`password-hint ${password.length > 14 ? 'invalid' : 'warning'}`}>
                                                    {password.length > 14
                                                        ? translations.passwordLengthError
                                                        : `Password must be 8-14 characters (${password.length}/8)`
                                                    }
                                                </span>
                                            </div>
                                        )}
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
                                        <label>{translations.referralcode}</label>
                                        <input
                                            type="text"
                                            placeholder={translations.enterreferralcodeplaceholder}
                                            value={referralCode}
                                            onChange={(e) => {
                                                setReferralCode(e.target.value.toUpperCase());
                                                setReferralError('');
                                                setValidatedCode('');
                                            }}
                                            onBlur={handleReferralBlur}
                                            maxLength={6}
                                        />
                                        {referralError && <div className="error-message">{referralError}</div>}
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
                                        {translations.bysignupingyouagreetoour}{' '}
                                        <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="privacy-policy-link">
                                            {translations.privacypolicy}
                                        </a>.
                                    </label>
                                </div>
                                {formError && <div className="error-message">{formError}</div>}
                                <button type="submit" className="login-button signup-login-button" disabled={isCreatingAccount || isValidatingReferral}>
                                    {isCreatingAccount || isValidatingReferral ? (
                                        <>
                                            <span className="spinner"></span>
                                            {isValidatingReferral ? translations.validatingreferralcode : translations.creatingaccount}
                                        </>
                                    ) : (
                                        <>
                                            {translations.continue}
                                            <span className="button-arrow">→</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        ) : (
                            <div className="welcome-container">
                                <div className="welcome-content">
                                    <div className="welcome-icon">🎉</div>
                                    <p>{translations.accountcreatedsuccessfully}</p>
                                </div>
                                <button type="button" onClick={handleFinish} className="login-button signup-login-button finish-button">
                                    {translations.finishup}
                                    <span className="button-arrow">→</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="form-group signin">
                    <div className="signin-divider">
                        <span className="divider-line"></span>
                        <div className="divider-content">
                            <span className="divider-text">{translations.alreadyhaveanaccount}</span>
                            <NavLink to="/signin" className="signin-link">
                                {translations.signin}
                            </NavLink>
                        </div>
                        <span className="divider-line"></span>
                    </div>
                </div>
            </div>
        </div>
    </>);
};

export default OwnerSignUp;
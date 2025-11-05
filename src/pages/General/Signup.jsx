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
    const [currentStep, setCurrentStep] = useState(1);
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [otpError, setOtpError] = useState('');
    const [referralCode, setReferralCode] = useState('');
    const [referralError, setReferralError] = useState('');
    const [signupData, setSignupData] = useState(null);
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

    const handleBasicInfoSubmit = async (e) => {
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
            const response = await fetch(`${BackendPath}/General/owner/SendOTP`, {
                method: "POST",
                headers: { "Content-Type": "application/json", "x-user": "admin" },
                body: JSON.stringify({ phone }),
            });
            const data = await response.json();
            if (response.ok) {
                setCurrentStep(2);
                setFormError('');
            } else {
                const errorMessages = {
                    "All fields are required": translations.allfieldrequired,
                    "Email ID Already Exists": translations.emailalreadyexists,
                    "Server error": translations.servererror
                };
                setFormError(errorMessages[data.message] || translations.servererror);
            }
        } catch {
            setWarningMessage(translations.servererror);
            setShowWarning(true);
        } finally {
            setIsLoading(false);
        }
    };

    const handleOtpChange = (index, value) => {
        if (value.length > 1) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        setOtpError('');

        if (value && index < 5) {
            const nextInput = document.getElementById(`otp-${index + 1}`);
            if (nextInput) nextInput.focus();
        }
    };

    const handleOtpKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            const prevInput = document.getElementById(`otp-${index - 1}`);
            if (prevInput) prevInput.focus();
        }
    };

    const handleOtpPaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, 6);
        const newOtp = pastedData.split('').concat(Array(6 - pastedData.length).fill(''));
        setOtp(newOtp.slice(0, 6));
        const lastFilledIndex = Math.min(pastedData.length - 1, 5);
        const nextInput = document.getElementById(`otp-${lastFilledIndex}`);
        if (nextInput) nextInput.focus();
    };

    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setOtpError('');
        setFormError('');

        const otpValue = otp.join('');
        if (otpValue.length !== 6) {
            setOtpError(translations.invalidotpmessage);
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch(`${BackendPath}/General/owner/VerifyOTP`, {
                method: "POST",
                headers: { "Content-Type": "application/json", "x-user": "admin" },
                body: JSON.stringify({ phone, otp: otpValue }),
            });
            const data = await response.json();
            if (response.ok) {
                setCurrentStep(3);
                setOtpError('');
                setOtp(['', '', '', '', '', '']);
            } else {
                const errorMessages = {
                    "Invalid OTP format. OTP must be 6 digits.": translations.invalidotpformatotpmustbe6digits,
                    "OTP not found or expired. Please request a new OTP.": translations.otpnotfoundorexpires,
                    "OTP has expired. Please request a new OTP.": translations.otphasexpiresrequestanewotp,
                    "Maximum verification attempts exceeded. Please request a new OTP.": translations.maximumverificationattemptsexceeded,
                    "Server error": translations.servererror
                };
                setOtpError(errorMessages[data.message] || translations.servererror);
            }
        } catch {
            setWarningMessage(translations.servererror);
            setShowWarning(true);
        } finally {
            setIsLoading(false);
        }
    };

    const handleResendOtp = async () => {
        setIsLoading(true);
        setOtpError('');
        try {
            const response = await fetch(`${BackendPath}/General/owner/ResendOTP`, {
                method: "POST",
                headers: { "Content-Type": "application/json", "x-user": "admin" },
                body: JSON.stringify({ phone }),
            });
            const data = await response.json();
            if (response.ok) {
                setOtp(['', '', '', '', '', '']);
                setFormError('');
            } else {
                setOtpError(data.message || translations.servererror);
            }
        } catch {
            setWarningMessage(translations.servererror);
            setShowWarning(true);
        } finally {
            setIsLoading(false);
        }
    };

    const handleReferralSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setReferralError('');
        setFormError('');

        try {
            const response = await fetch(`${BackendPath}/General/owner/Signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json", "x-user": "admin" },
                body: JSON.stringify({
                    ownerfirstname: firstName,
                    ownerlastname: lastName,
                    email,
                    password,
                    phone,
                    gender,
                    referralCode: referralCode || null
                }),
            });
            const data = await response.json();
            if (response.ok) {
                setSignupData(data);
                setCurrentStep(4);
                setFormError('');
            } else {
                const errorMessages = {
                    "Invalid referral code": translations.invalidreferralcode,
                    "All fields are required": translations.allfieldrequired,
                    "Email ID Already Exists": translations.emailalreadyexists,
                    "Server error": translations.servererror
                };
                setReferralError(errorMessages[data.message] || translations.servererror);
            }
        } catch {
            setWarningMessage(translations.servererror);
            setShowWarning(true);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSkipReferral = async () => {
        setIsLoading(true);
        setReferralError('');
        setFormError('');

        try {
            const response = await fetch(`${BackendPath}/General/owner/Signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json", "x-user": "admin" },
                body: JSON.stringify({
                    ownerfirstname: firstName,
                    ownerlastname: lastName,
                    email,
                    password,
                    phone,
                    gender,
                    referralCode: null
                }),
            });
            const data = await response.json();
            if (response.ok) {
                setSignupData(data);
                setCurrentStep(4);
                setFormError('');
            } else {
                const errorMessages = {
                    "All fields are required": translations.allfieldrequired,
                    "Email ID Already Exists": translations.emailalreadyexists,
                    "Server error": translations.servererror
                };
                setReferralError(errorMessages[data.message] || translations.servererror);
            }
        } catch {
            setWarningMessage(translations.servererror);
            setShowWarning(true);
        } finally {
            setIsLoading(false);
        }
    };

    const handleFinish = () => {
        if (signupData && signupData.owner) {
            const { token, id, subdomain } = signupData.owner;
            const subdomainUrl = `${host}://${subdomain}.savoryops.${tld}/token-middleware?token=${token}&id=${id}&success=${translations.signupsuccessful}`;
            window.location.href = subdomainUrl;
        } else {
            window.location.href = '/Signin';
        }
    };

    const steps = [
        {
            number: 1,
            title: translations.yourdetails,
            description: translations.provideemailandpassword,
            icon: "👤"
        },
        {
            number: 2,
            title: translations.verifyyourphone,
            description: translations.enteryourverificationcode,
            icon: "📱"
        },
        {
            number: 3,
            title: translations.referralcode,
            description: translations.referralcodedescription,
            icon: "🎁"
        },
        {
            number: 4,
            title: translations.welcometosystem,
            description: translations.getupandrunning,
            icon: "🚀"
        }
    ];

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
                <div className="signup-wrapper">
                    <div className="progress-tracker">
                        {steps.map((step, index) => (
                            <div key={step.number} className={`progress-step ${currentStep >= step.number ? 'active' : ''} ${currentStep > step.number ? 'completed' : ''}`}>
                                <div className="step-icon">{step.icon}</div>
                                <div className="step-content">
                                    <div className="step-title">{step.title}</div>
                                    <div className="step-description">{step.description}</div>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className={`step-connector ${currentStep > step.number ? 'completed' : ''}`}></div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="signup-content">
                        {currentStep === 1 ? (
                            <form onSubmit={handleBasicInfoSubmit} className="signup-form">
                                <div className="step-header">
                                    <h2 className="step-title">{translations.yourdetails}</h2>
                                    <p className="step-subtitle">{translations.provideemailandpassword}</p>
                                </div>
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
                                        <div className="password-input-wrapper">
                                            <input
                                                type="password"
                                                placeholder={translations.passwordplaceholder}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                        </div>
                                        {password && (
                                            <div className="password-strength">
                                                <div className={`strength-indicator ${password.length >= 8 && password.length <= 14 ? 'valid' : 'invalid'}`}></div>
                                                <span className="password-hint">{translations.passwordLengthError || 'Password must be 8-14 characters'}</span>
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
                                    {isLoading ? (
                                        <>
                                            <span className="spinner"></span>
                                            {translations.sendingotp}
                                        </>
                                    ) : (
                                        <>
                                            {translations.continue}
                                            <span className="button-arrow">→</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        ) : currentStep === 2 ? (
                            <form onSubmit={handleOtpSubmit}>
                                <div className="otp-container">
                                    <div className="step-header">
                                        <h3>{translations.verifyyourphone}</h3>
                                        <p className="otp-description">
                                            {translations.otpsentmessage}
                                        </p>
                                    </div>
                                    <div className="otp-input-group">
                                        {otp.map((digit, index) => (
                                            <input
                                                key={index}
                                                id={`otp-${index}`}
                                                type="text"
                                                inputMode="numeric"
                                                maxLength={1}
                                                value={digit}
                                                onChange={(e) => handleOtpChange(index, e.target.value.replace(/\D/g, ''))}
                                                onKeyDown={(e) => handleOtpKeyDown(index, e)}
                                                onPaste={index === 0 ? handleOtpPaste : undefined}
                                                className="otp-input"
                                                autoFocus={index === 0}
                                            />
                                        ))}
                                    </div>
                                    {otpError && <div className="error-message">{otpError}</div>}
                                    <button type="submit" className="signup-button" disabled={isLoading}>
                                        {isLoading ? (
                                            <>
                                                <span className="spinner"></span>
                                                {translations.verifying}
                                            </>
                                        ) : (
                                            <>
                                                {translations.verify}
                                                <span className="button-arrow">→</span>
                                            </>
                                        )}
                                    </button>
                                    <div className="resend-otp">
                                        <span>{translations.didntreceiveotp}</span>
                                        <button type="button" onClick={handleResendOtp} disabled={isLoading} className="resend-button">
                                            {translations.resendotp}
                                        </button>
                                    </div>
                                    <button type="button" onClick={() => setCurrentStep(1)} className="back-button">
                                        {translations.back}
                                    </button>
                                </div>
                            </form>
                        ) : currentStep === 3 ? (
                            <form onSubmit={handleReferralSubmit}>
                                <div className="referral-container">
                                    <div className="step-header">
                                        <h3>{translations.referralcode}</h3>
                                        <p className="referral-description">
                                            {translations.referralcodedescription}
                                        </p>
                                    </div>
                                    <div className="form-group">
                                        <label>{translations.referralcode}</label>
                                        <input
                                            type="text"
                                            placeholder={translations.enteryourreferralcode}
                                            value={referralCode}
                                            onChange={(e) => setReferralCode(e.target.value)}
                                            className="referral-input"
                                        />
                                    </div>
                                    {referralError && <div className="error-message">{referralError}</div>}
                                    <button type="submit" className="signup-button" disabled={isLoading}>
                                        {isLoading ? (
                                            <>
                                                <span className="spinner"></span>
                                                {translations.processing}
                                            </>
                                        ) : (
                                            <>
                                                {translations.continue}
                                                <span className="button-arrow">→</span>
                                            </>
                                        )}
                                    </button>
                                    <button type="button" onClick={handleSkipReferral} disabled={isLoading} className="skip-button">
                                        {translations.skip}
                                    </button>
                                    <button type="button" onClick={() => setCurrentStep(2)} className="back-button">
                                        {translations.back}
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <div className="welcome-container">
                                <div className="step-header">
                                    <h2>{translations.welcometosystem}</h2>
                                    <p className="welcome-description">
                                        {translations.getupandrunning}
                                    </p>
                                </div>
                                <div className="welcome-content">
                                    <div className="welcome-icon">🎉</div>
                                    <p>{translations.accountcreatedsuccessfully}</p>
                                </div>
                                <button onClick={handleFinish} className="signup-button finish-button">
                                    {translations.finishup}
                                    <span className="button-arrow">→</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                {currentStep === 1 && (
                    <div className="form-group signin">
                        <div className="signin-divider">
                            <span className="divider-line"></span>
                            <span className="divider-text">{translations.alreadyhaveanaccount}</span>
                            <span className="divider-line"></span>
                        </div>
                        <NavLink to="/Signin" className="signin-link">
                            {translations.signin}
                        </NavLink>
                    </div>
                )}
            </div>
        </div>
    </>);
};

export default OwnerSignUp;
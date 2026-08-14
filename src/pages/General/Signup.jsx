import { useEffect, useState } from 'react';
import PhoneInput, { isValidPhoneNumber, parsePhoneNumber } from "react-phone-number-input";
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

const OwnerSignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [otpError, setOtpError] = useState('');
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
    const [isSendingOtp, setIsSendingOtp] = useState(false);
    const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
    const [isResendingOtp, setIsResendingOtp] = useState(false);
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

    const getMaskedPhone = (phoneNum) => {
        if (!phoneNum) return '';
        try {
            const parsed = parsePhoneNumber(phoneNum);
            if (parsed) {
                const countryCode = `+${parsed.countryCallingCode}`;
                const national = parsed.nationalNumber || '';
                if (national.length > 3) {
                    const last3 = national.slice(-3);
                    const mask = '*'.repeat(Math.max(national.length - 3, 4));
                    return `${countryCode} ${mask}${last3}`;
                }
            }
        } catch {
            // fallback if parse fails
        }
        const str = String(phoneNum).trim();
        if (str.length <= 4) return str;
        const last3 = str.slice(-3);
        const prefix = str.startsWith('+') ? str.slice(0, str.length > 6 ? 3 : 2) : str.slice(0, 2);
        const mask = '*'.repeat(Math.max(str.length - prefix.length - 3, 4));
        return `${prefix} ${mask}${last3}`;
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

    const handleBasicInfoSubmit = async (e) => {
        e.preventDefault();
        setIsSendingOtp(true);
        setFormError('');

        if (password.length < 8 || password.length > 14) {
            setFormError(translations.passwordLengthError);
            setIsSendingOtp(false);
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
            setIsSendingOtp(false);
            return;
        }

        setPhoneError("");

        if (!termsAccepted) {
            setFormError(translations.youmustacceptthetermsandconditions);
            setIsSendingOtp(false);
            return;
        }

        if (referralError) {
            setIsSendingOtp(false);
            return;
        }

        if (referralCode && referralCode.trim() !== '') {
            const isValid = await validateReferralCode(referralCode);
            if (!isValid) {
                setIsSendingOtp(false);
                return;
            }
        }

        try {
            const response = await fetch(`${BackendPath}/General/owner/SendOTP`, {
                method: "POST",
                headers: { "Content-Type": "application/json", "x-user": "admin" },
                body: JSON.stringify({ phone }),
            });
            const data = await response.json();
            if (response.ok) {
                setOtp(['', '', '', '', '', '']);
                setOtpError('');
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
            setIsSendingOtp(false);
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

            if (usedReferralCode) {
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
                setCurrentStep(3);
                setFormError('');
            } else {
                const errorMessages = {
                    "All fields are required": translations.allfieldrequired,
                    "Email ID Already Exists": translations.emailalreadyexists,
                    "Invalid referral code": translations.invalidreferralcode,
                    "Server error": translations.servererror
                };
                setReferralError(errorMessages[signupResult.message] || translations.servererror);
                if (signupResult.message === "Invalid referral code") {
                    setCurrentStep(1);
                }
            }
        } catch {
            setWarningMessage(translations.servererror);
            setShowWarning(true);
        } finally {
            setIsCreatingAccount(false);
        }
    };

    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        setIsVerifyingOtp(true);
        setOtpError('');
        setFormError('');

        const otpValue = otp.join('');
        if (otpValue.length !== 6) {
            setOtpError(translations.invalidotpmessage);
            setIsVerifyingOtp(false);
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
                setOtpError('');
                setOtp(['', '', '', '', '', '']);
                setFormError('');
                await createAccount(referralCode);
            } else {
                const errorMessages = {
                    "Invalid OTP format. OTP must be 6 digits.": translations.invalidotpformatotpmustbe6digits,
                    "Invalid OTP. Please Enter Correct OTP.": translations.invalidotppleaseentercorrectotp,
                    "OTP not found or expired. Please request a new OTP.": translations.otpnotfoundorexpires,
                    "OTP has expired. Please request a new OTP.": translations.otphasexpiresrequestanewotp,
                    "Maximum verification attempts exceeded. Please request a new OTP.": translations.maximumverificationattemptsexceeded,
                    "Server error": translations.servererror
                };
                setOtpError(errorMessages[data.message] || translations.servererror);
                setOtp(['', '', '', '', '', '']);
                setTimeout(() => {
                    const firstInput = document.getElementById('otp-0');
                    if (firstInput) firstInput.focus();
                }, 50);
            }
        } catch {
            setWarningMessage(translations.servererror);
            setShowWarning(true);
        } finally {
            setIsVerifyingOtp(false);
        }
    };

    const handleResendOtp = async () => {
        setIsResendingOtp(true);
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
            setIsResendingOtp(false);
        }
    };

    const handleBackToStepOne = () => {
        setOtp(['', '', '', '', '', '']);
        setOtpError('');
        setCurrentStep(1);
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

    return (<>
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
                            <form onSubmit={handleBasicInfoSubmit} className="signup-form">
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
                                        {translations.bysignupingyouagreetoour}
                                        <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">{translations.privacypolicy}</a>.
                                    </label>
                                </div>
                                {formError && <div className="error-message">{formError}</div>}
                                <button type="submit" className="login-button signup-login-button" disabled={isSendingOtp || isValidatingReferral}>
                                    {isSendingOtp || isValidatingReferral ? (
                                        <>
                                            <span className="spinner"></span>
                                            {isValidatingReferral ? translations.validatingreferralcode : translations.sendingotp}
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
                            <form onSubmit={handleOtpSubmit} className="signup-form">
                                <div className="otp-container">
                                    <div className="otp-header">
                                        <p className="otp-description">
                                            {translations.otpsentmessage}
                                        </p>
                                        <p className="otp-phone-number">
                                            {getMaskedPhone(phone)}
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
                                    <button type="submit" className="login-button signup-login-button" disabled={isVerifyingOtp || isCreatingAccount || isResendingOtp}>
                                        {isVerifyingOtp || isCreatingAccount ? (
                                            <>
                                                <span className="spinner"></span>
                                                {isVerifyingOtp ? translations.verifying : translations.creatingaccount}
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
                                        <button type="button" onClick={handleResendOtp} disabled={isResendingOtp || isVerifyingOtp || isCreatingAccount} className="resend-button">
                                            {isResendingOtp ? (
                                                <>
                                                    <span className="spinner"></span>
                                                    {translations.sendingotp}
                                                </>
                                            ) : (
                                                translations.resendotp
                                            )}
                                        </button>
                                    </div>
                                    <button type="button" onClick={handleBackToStepOne} className="demo-admin-button signup-back-button" disabled={isVerifyingOtp || isCreatingAccount}>
                                        {translations.back}
                                    </button>
                                </div>
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
                            <NavLink to="/Signin" className="signin-link">
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
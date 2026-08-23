import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Flag from 'react-world-flags';
import PhoneInput, { isValidPhoneNumber, parsePhoneNumber } from "react-phone-number-input";
import 'react-phone-number-input/style.css';
import { useLanguage } from '../../context/LanguageContext';
import { getLanguageOptions } from '../../constants/languages';
import { useAppSettings } from '../../context/AppSettingsContext.jsx';
import { getBrowserAndDeviceDetails, getIpAndLocation } from '../../utils/deviceDetails';
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
    const [alertMessage, setAlertMessage] = useState("");
    const [isLanguageDropdownVisible, setLanguageDropdownVisible] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(() => localStorage.getItem('selectedLanguage') || 'English');
    const { translations } = useLanguage();
    const [isLoading, setIsLoading] = useState(false);
    const [formError, setFormError] = useState('');
    const [warningMessage, setWarningMessage] = useState("");
    const [showWarning, setShowWarning] = useState(false);
    const { logoUrl, softwareName, setLogoUrl } = useAppSettings();

    // Forgot Password States
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [forgotStep, setForgotStep] = useState(1); // 1: Phone, 2: OTP, 3: New Password
    const [forgotPhone, setForgotPhone] = useState('');
    const [forgotPhoneError, setForgotPhoneError] = useState('');
    const [forgotOtp, setForgotOtp] = useState(['', '', '', '', '', '']);
    const [forgotOtpError, setForgotOtpError] = useState('');
    const [forgotTimer, setForgotTimer] = useState(0);
    const [isSendingForgotOtp, setIsSendingForgotOtp] = useState(false);
    const [isVerifyingForgotOtp, setIsVerifyingForgotOtp] = useState(false);
    const [isResendingForgotOtp, setIsResendingForgotOtp] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isResettingPassword, setIsResettingPassword] = useState(false);
    const [forgotModalError, setForgotModalError] = useState('');

    const languages = getLanguageOptions();

    // Timer effect for OTP resend countdown
    useEffect(() => {
        let interval = null;
        if (forgotTimer > 0) {
            interval = setInterval(() => {
                setForgotTimer((prev) => prev - 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [forgotTimer]);

    const formatTimer = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

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

    // Pre-request / warm-up browser location so it is instantly available upon Sign In
    useEffect(() => {
        if (typeof window !== 'undefined' && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                () => {},
                () => {},
                { enableHighAccuracy: true, timeout: 5000, maximumAge: 300000 }
            );
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setFormError('');
        try {
            const { browserdetails, device } = getBrowserAndDeviceDetails();
            const { ipaddress, location } = await getIpAndLocation();

            const response = await fetch(`${BackendPath}/General/owner/Signin`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', "x-user": "admin" },
                body: JSON.stringify({
                    email,
                    password,
                    browserdetails,
                    ipaddress,
                    device,
                    location
                }),
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

    // Forgot Password Handlers
    const handleOpenForgotPassword = () => {
        setForgotStep(1);
        setForgotPhone('');
        setForgotPhoneError('');
        setForgotOtp(['', '', '', '', '', '']);
        setForgotOtpError('');
        setForgotTimer(0);
        setNewPassword('');
        setConfirmPassword('');
        setPasswordError('');
        setForgotModalError('');
        setShowForgotPassword(true);
    };

    const handleCloseForgotPassword = () => {
        setShowForgotPassword(false);
        setForgotStep(1);
        setForgotPhone('');
        setForgotPhoneError('');
        setForgotOtp(['', '', '', '', '', '']);
        setForgotOtpError('');
        setForgotTimer(0);
        setNewPassword('');
        setConfirmPassword('');
        setPasswordError('');
        setForgotModalError('');
    };

    const handleForgotPhoneChange = (value) => {
        setForgotPhone(value || '');
        if (!value || value.trim() === '') {
            setForgotPhoneError('');
            return;
        }

        try {
            const isValid = isValidPhoneNumber(value);
            if (isValid) {
                setForgotPhoneError('');
            } else {
                if (value.length >= 10) {
                    setForgotPhoneError(translations.invalidphonenumber);
                } else {
                    setForgotPhoneError('');
                }
            }
        } catch {
            if (value.length >= 10) {
                setForgotPhoneError(translations.invalidphonenumber);
            } else {
                setForgotPhoneError('');
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

    const handleSendForgotOtp = async (e) => {
        e.preventDefault();
        setForgotModalError('');
        setForgotPhoneError('');

        let isPhoneValid = false;
        if (forgotPhone && forgotPhone.trim() !== '') {
            try {
                isPhoneValid = isValidPhoneNumber(forgotPhone);
            } catch {
                isPhoneValid = false;
            }
        }

        if (!isPhoneValid || !forgotPhone || forgotPhone.trim() === '') {
            setForgotPhoneError(translations.invalidphonenumber);
            return;
        }

        setIsSendingForgotOtp(true);
        try {
            const response = await fetch(`${BackendPath}/General/owner/ForgotPasswordSendOTP`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'x-user': 'admin' },
                body: JSON.stringify({ phone: forgotPhone }),
            });

            const data = await response.json();
            if (response.ok) {
                setForgotOtp(['', '', '', '', '', '']);
                setForgotOtpError('');
                setForgotTimer(60);
                setForgotStep(2);
                setForgotModalError('');
            } else {
                const errorMessages = {
                    "No account found for this phone number.": translations.noaccountfoundwithphone,
                    "Invalid phone number format": translations.invalidphonenumber,
                    "Phone number is required": translations.allfieldrequired,
                    "Server error": translations.servererror
                };
                setForgotModalError(errorMessages[data.message] || data.message || translations.servererror);
            }
        } catch {
            setWarningMessage(translations.servererror);
            setShowWarning(true);
        } finally {
            setIsSendingForgotOtp(false);
        }
    };

    const handleForgotOtpChange = (index, value) => {
        if (value.length > 1) return;
        const newOtp = [...forgotOtp];
        newOtp[index] = value;
        setForgotOtp(newOtp);
        setForgotOtpError('');

        if (value && index < 5) {
            const nextInput = document.getElementById(`forgot-otp-${index + 1}`);
            if (nextInput) nextInput.focus();
        }
    };

    const handleForgotOtpKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !forgotOtp[index] && index > 0) {
            const prevInput = document.getElementById(`forgot-otp-${index - 1}`);
            if (prevInput) prevInput.focus();
        }
    };

    const handleForgotOtpPaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, 6);
        const newOtp = pastedData.split('').concat(Array(6 - pastedData.length).fill(''));
        setForgotOtp(newOtp.slice(0, 6));
        const lastFilledIndex = Math.min(pastedData.length - 1, 5);
        const nextInput = document.getElementById(`forgot-otp-${lastFilledIndex}`);
        if (nextInput) nextInput.focus();
    };

    const handleVerifyForgotOtp = async (e) => {
        e.preventDefault();
        setIsVerifyingForgotOtp(true);
        setForgotOtpError('');
        setForgotModalError('');

        const otpValue = forgotOtp.join('');
        if (otpValue.length !== 6) {
            setForgotOtpError(translations.invalidotpmessage);
            setIsVerifyingForgotOtp(false);
            return;
        }

        try {
            const response = await fetch(`${BackendPath}/General/owner/ForgotPasswordVerifyOTP`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'x-user': 'admin' },
                body: JSON.stringify({ phone: forgotPhone, otp: otpValue }),
            });

            const data = await response.json();
            if (response.ok) {
                setForgotOtpError('');
                setForgotModalError('');
                setForgotStep(3);
            } else {
                const errorMessages = {
                    "Invalid OTP format. OTP must be 6 digits.": translations.invalidotpformatotpmustbe6digits,
                    "Invalid OTP. Please Enter Correct OTP.": translations.invalidotppleaseentercorrectotp,
                    "OTP not found or expired. Please request a new OTP.": translations.otpnotfoundorexpires,
                    "OTP has expired. Please request a new OTP.": translations.otphasexpiresrequestanewotp,
                    "Maximum verification attempts exceeded. Please request a new OTP.": translations.maximumverificationattemptsexceeded,
                    "Server error": translations.servererror
                };
                setForgotOtpError(errorMessages[data.message] || data.message || translations.servererror);
                setForgotOtp(['', '', '', '', '', '']);
                setTimeout(() => {
                    const firstInput = document.getElementById('forgot-otp-0');
                    if (firstInput) firstInput.focus();
                }, 50);
            }
        } catch {
            setWarningMessage(translations.servererror);
            setShowWarning(true);
        } finally {
            setIsVerifyingForgotOtp(false);
        }
    };

    const handleResendForgotOtp = async () => {
        setIsResendingForgotOtp(true);
        setForgotOtpError('');
        setForgotModalError('');
        try {
            const response = await fetch(`${BackendPath}/General/owner/ForgotPasswordResendOTP`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'x-user': 'admin' },
                body: JSON.stringify({ phone: forgotPhone }),
            });

            const data = await response.json();
            if (response.ok) {
                setForgotOtp(['', '', '', '', '', '']);
                setForgotOtpError('');
                setForgotTimer(60);
                setForgotModalError('');
            } else {
                setForgotOtpError(data.message || translations.servererror);
            }
        } catch {
            setWarningMessage(translations.servererror);
            setShowWarning(true);
        } finally {
            setIsResendingForgotOtp(false);
        }
    };

    const handleResetPasswordSubmit = async (e) => {
        e.preventDefault();
        setPasswordError('');
        setForgotModalError('');

        if (newPassword.length < 8 || newPassword.length > 14) {
            setPasswordError(translations.passwordLengthError);
            return;
        }

        if (newPassword !== confirmPassword) {
            setPasswordError(translations.passwordsdonotmatch);
            return;
        }

        setIsResettingPassword(true);
        try {
            const response = await fetch(`${BackendPath}/General/owner/ForgotPasswordResetPassword`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'x-user': 'admin' },
                body: JSON.stringify({ phone: forgotPhone, password: newPassword }),
            });

            const data = await response.json();
            if (response.ok) {
                handleCloseForgotPassword();
                setAlertMessage(translations.passwordresetsuccessful);
            } else {
                const errorMessages = {
                    "Password must be between 8 and 14 characters long.": translations.passwordLengthError,
                    "Please verify your phone with OTP first, or start again — your verification has expired.": translations.otpnotfoundorexpires,
                    "No account found for this phone number.": translations.noaccountfoundwithphone,
                    "Server error": translations.servererror
                };
                setForgotModalError(errorMessages[data.message] || data.message || translations.servererror);
            }
        } catch {
            setWarningMessage(translations.servererror);
            setShowWarning(true);
        } finally {
            setIsResettingPassword(false);
        }
    };

    return (<>
        {showWarning && <WarningModal message={warningMessage} onClose={() => setShowWarning(false)} />}
        {alertMessage && <AlertMessage message={alertMessage} onClose={() => setAlertMessage("")} />}

        {/* Forgot Password Modal */}
        {showForgotPassword && (
            <div className="forgot-password-overlay" onClick={handleCloseForgotPassword}>
                <div className="forgot-password-modal" onClick={(e) => e.stopPropagation()}>
                    <button
                        type="button"
                        className="modal-close-btn"
                        onClick={handleCloseForgotPassword}
                        aria-label="Close"
                    >
                        &times;
                    </button>

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

                    <div className="modal-header-text">
                        <h3>{translations.forgotpasswordtitle}</h3>
                        <p>
                            {forgotStep === 1
                                ? translations.forgotpassworddesc
                                : forgotStep === 2
                                    ? translations.otpsentmessage
                                    : translations.newpassworddesc}
                        </p>
                    </div>

                    {/* Step 1: Phone Number */}
                    {forgotStep === 1 && (
                        <form onSubmit={handleSendForgotOtp}>
                            <div className="form-group">
                                <label>{translations.phone}</label>
                                <div className={`phone-input-wrapper ${forgotPhoneError ? 'has-phone-error' : ''}`}>
                                    <PhoneInput
                                        international
                                        defaultCountry="US"
                                        value={forgotPhone}
                                        onChange={handleForgotPhoneChange}
                                        placeholder={translations.phone}
                                        required
                                        autoFocus
                                    />
                                    {forgotPhoneError && (
                                        <div className="phone-error-message">{forgotPhoneError}</div>
                                    )}
                                </div>
                            </div>

                            {forgotModalError && <div className="error-message">{forgotModalError}</div>}

                            <div className="modal-action-buttons">
                                <button
                                    type="submit"
                                    className="submit-btn"
                                    disabled={isSendingForgotOtp}
                                >
                                    {isSendingForgotOtp ? (
                                        <>
                                            <span className="spinner"></span>
                                            {translations.sendingotp}
                                        </>
                                    ) : (
                                        translations.continue
                                    )}
                                </button>
                                <button
                                    type="button"
                                    className="cancel-back-btn"
                                    onClick={handleCloseForgotPassword}
                                    disabled={isSendingForgotOtp}
                                >
                                    {translations.cancel}
                                </button>
                            </div>
                        </form>
                    )}

                    {/* Step 2: OTP Entry */}
                    {forgotStep === 2 && (
                        <form onSubmit={handleVerifyForgotOtp}>
                            <div className="otp-container">
                                <div className="otp-header">
                                    <p className="otp-phone-number">
                                        {getMaskedPhone(forgotPhone)}
                                    </p>
                                </div>
                                <div className="otp-input-group">
                                    {forgotOtp.map((digit, index) => (
                                        <input
                                            key={index}
                                            id={`forgot-otp-${index}`}
                                            type="text"
                                            inputMode="numeric"
                                            maxLength={1}
                                            value={digit}
                                            onChange={(e) => handleForgotOtpChange(index, e.target.value.replace(/\D/g, ''))}
                                            onKeyDown={(e) => handleForgotOtpKeyDown(index, e)}
                                            onPaste={index === 0 ? handleForgotOtpPaste : undefined}
                                            className="otp-input"
                                            autoFocus={index === 0}
                                        />
                                    ))}
                                </div>

                                {forgotOtpError && <div className="error-message">{forgotOtpError}</div>}
                                {forgotModalError && <div className="error-message">{forgotModalError}</div>}

                                <div className="resend-otp">
                                    {forgotTimer > 0 ? (
                                        <span className="timer-text">
                                            {translations.resendotpin} <strong className="timer-count">{formatTimer(forgotTimer)}</strong>
                                        </span>
                                    ) : (
                                        <>
                                            <span>{translations.didntreceiveotp}</span>
                                            <button
                                                type="button"
                                                onClick={handleResendForgotOtp}
                                                disabled={isResendingForgotOtp || isVerifyingForgotOtp}
                                                className="resend-button"
                                            >
                                                {isResendingForgotOtp ? (
                                                    <>
                                                        <span className="spinner"></span>
                                                        {translations.sendingotp}
                                                    </>
                                                ) : (
                                                    translations.resendotp
                                                )}
                                            </button>
                                        </>
                                    )}
                                </div>

                                <div className="modal-action-buttons">
                                    <button
                                        type="submit"
                                        className="submit-btn"
                                        disabled={isVerifyingForgotOtp || isResendingForgotOtp}
                                    >
                                        {isVerifyingForgotOtp ? (
                                            <>
                                                <span className="spinner"></span>
                                                {translations.verifying}
                                            </>
                                        ) : (
                                            translations.verify
                                        )}
                                    </button>
                                    <button
                                        type="button"
                                        className="cancel-back-btn"
                                        onClick={() => {
                                            setForgotStep(1);
                                            setForgotOtp(['', '', '', '', '', '']);
                                            setForgotOtpError('');
                                            setForgotModalError('');
                                        }}
                                        disabled={isVerifyingForgotOtp}
                                    >
                                        {translations.back}
                                    </button>
                                </div>
                            </div>
                        </form>
                    )}

                    {/* Step 3: New Password & Confirm Password */}
                    {forgotStep === 3 && (
                        <form onSubmit={handleResetPasswordSubmit}>
                            <div className="form-group">
                                <label>{translations.newpassword}</label>
                                <div className="password-input-wrapper">
                                    <input
                                        type="password"
                                        placeholder={translations.newpasswordplaceholder}
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        required
                                        autoFocus
                                    />
                                </div>
                                {newPassword && (newPassword.length < 8 || newPassword.length > 14) && (
                                    <div className="password-strength">
                                        <span className={`password-hint ${newPassword.length > 14 ? 'invalid' : 'warning'}`}>
                                            {translations.passwordLengthError}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div className="form-group">
                                <label>{translations.confirmnewpassword}</label>
                                <div className="password-input-wrapper">
                                    <input
                                        type="password"
                                        placeholder={translations.confirmnewpasswordplaceholder}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                {confirmPassword && newPassword && newPassword !== confirmPassword && (
                                    <div className="password-strength">
                                        <span className="password-hint invalid">
                                            {translations.passwordsdonotmatch}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {passwordError && <div className="error-message">{passwordError}</div>}
                            {forgotModalError && <div className="error-message">{forgotModalError}</div>}

                            <div className="modal-action-buttons">
                                <button
                                    type="submit"
                                    className="submit-btn"
                                    disabled={isResettingPassword}
                                >
                                    {isResettingPassword ? (
                                        <>
                                            <span className="spinner"></span>
                                            {translations.resettingpassword}
                                        </>
                                    ) : (
                                        translations.resetpassword
                                    )}
                                </button>
                                <button
                                    type="button"
                                    className="cancel-back-btn"
                                    onClick={handleCloseForgotPassword}
                                    disabled={isResettingPassword}
                                >
                                    {translations.cancel}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        )}

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

                    <div className="forgot-password-link-wrapper">
                        <button
                            type="button"
                            className="forgot-password-link"
                            onClick={handleOpenForgotPassword}
                        >
                            {translations.forgotpassword}
                        </button>
                    </div>

                    {formError && <div className="error-message">{formError}</div>}
                    <button type="submit" className="login-button" disabled={isLoading}>
                        {isLoading ? translations.signingin : translations.signin}
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
            </div>
        </div>
    </>);
};

export default OwnerLogin;
import { useEffect } from 'react';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import { useLanguage } from "../../context/LanguageContext";
import '../../styles/General/warningmodal.scss';

const WarningModal = ({ message, onClose, title }) => {
    const { translations } = useLanguage();

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose?.();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
        <div 
            className="warning-modal-overlay" 
            onClick={onClose}
            role="dialog" 
            aria-modal="true"
        >
            <div className="warning-modal-card" onClick={(e) => e.stopPropagation()}>
                <button 
                    type="button" 
                    className="warning-modal-close-btn" 
                    onClick={onClose} 
                    aria-label="Close"
                >
                    &times;
                </button>
                <div className="warning-icon-wrapper">
                    <ErrorRoundedIcon className="warning-icon" />
                </div>
                <h3 className="warning-modal-title">
                    {title || translations?.warning || "Warning"}
                </h3>
                <p className="warning-modal-message">
                    {message}
                </p>
                <button 
                    type="button" 
                    className="warning-modal-confirm-btn" 
                    onClick={onClose}
                >
                    {translations?.okgotit || "OK, Got It"}
                </button>
            </div>
        </div>
    );
};

export default WarningModal;
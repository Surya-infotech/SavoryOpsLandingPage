import ErrorIcon from '@mui/icons-material/Error';
import { useLanguage } from "../../context/LanguageContext";

const WarningModal = ({ message, onClose }) => {
    const { translations } = useLanguage();

    return (<>
        <div className="modal show" tabIndex="-1" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <div className="modal-dialog" style={{ maxWidth: "460px", width: "100%" }}>
                <div className="modal-content" style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", height: "100%" }}>
                    <div className="modal-header"
                        style={{ flexDirection: "column", alignItems: "center", borderBottom: "none" }}>
                        <ErrorIcon style={{ fontSize: "48px", color: "red", marginBottom: "0" }} />
                        <h5 className="modal-title"
                            style={{ color: "red", margin: 0, padding: "0" }}>{translations.warning}</h5>
                    </div>
                    <div className="modal-body text-center" style={{ borderBottom: "none", paddingTop: "5px" }}>
                        <p>{message}</p>
                    </div>
                    <div className="modal-footer justify-content-center" style={{ borderTop: "none" }}>
                        <button type="button" className="btn btn-primary" onClick={onClose}>
                            {translations.okgotit}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>);
};

export default WarningModal;

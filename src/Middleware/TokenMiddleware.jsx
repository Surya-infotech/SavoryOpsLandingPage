import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';

const TokenMiddleware = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { storetoken } = useAuth();
    const URL = import.meta.env.VITE_URL;

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const queryToken = urlParams.get("token");
        const queryId = urlParams.get("id");
        const successmessage = urlParams.get("success");

        if (queryToken && queryId && successmessage) {
            const processedToken = queryToken;
            const processedId = queryId;
            const sucessmessage = successmessage;

            storetoken(processedToken, processedId, sucessmessage);
            navigate('/Home/Dashboard');

        } else {
            console.log("Token or ID missing in the redirect URL");
            window.location.href = `${URL}`;
        }
    }, [location, navigate, storetoken]);

    return (
        <>
            <div>
                <p>Processing login...</p>
            </div>
        </>
    );
};

export default TokenMiddleware;
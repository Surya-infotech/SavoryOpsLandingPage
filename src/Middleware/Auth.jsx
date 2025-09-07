import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const tokenname = import.meta.env.VITE_AdminTOKEN_NAME;
    const idname = "OWNER_ID";
    const [token, setToken] = useState(localStorage.getItem(tokenname));
    const [ownerId, setOwnerId] = useState(localStorage.getItem(idname));

    const storetoken = (serverToken, ownerId, sucessmessage) => {
        localStorage.setItem('loginSuccessMessage', sucessmessage);
        localStorage.setItem(tokenname, serverToken);
        localStorage.setItem(idname, ownerId);
        setToken(serverToken);
        setOwnerId(ownerId);
    };

    const logoutUser = () => {
        setToken("");
        setOwnerId("");
        localStorage.removeItem(tokenname);
        localStorage.removeItem(idname);
    };

    return (
        <AuthContext.Provider value={{ token, ownerId, storetoken, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
}
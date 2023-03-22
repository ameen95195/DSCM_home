import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authKey, setAuthKey] = useState(null);

    const login = async (username, password) => {
        // make API request to authenticate user and retrieve auth key
        const authKey = await authenticateUser(username, password);

        // store auth key in state
        setAuthKey(authKey);
    };

    const logout = () => {
        // clear auth key from state
        setAuthKey(null);
    };

    return (
        <AuthContext.Provider value={{ authKey, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
import React, {createContext, useEffect, useState} from 'react';
import {logoutApi} from "./APIs/AuthApis.js";
import {useDispatch} from "react-redux";
import {resetCart} from "./redux/cartReducer.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authKey, setAuthKey] = useState(null);
    const [userInfo, setUserInfo] = useState({})
    const dispatch = useDispatch()
    useEffect(() => {
        const key = sessionStorage.getItem('authKey')
        if (key)
            setAuthKey(key)
    }, [authKey])

    const login = async (token, userInfo) => {
        // make API request to authenticate user and retrieve auth key
        setUserInfo(userInfo)
        // store auth key in state
        setAuthKey(token);
        sessionStorage.setItem('authKey', token)
    };

    const logout = () => {
        // clear auth key from state
        logoutApi(authKey)
            .then(res => res.json())
            .then(() => {
                sessionStorage.clear()
                setUserInfo(null)
                setAuthKey(null);
                dispatch(resetCart())
            })

    };

    return (
        <AuthContext.Provider value={{ authKey, userInfo, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
import React, {useContext, useEffect, useState} from 'react';
import './Login.css';
import {AuthContext} from "../../AuthContext.jsx";
import {useNavigate} from "react-router-dom";
import {loginApi} from "../../APIs/AuthApis.js";

function Login() {
    const [formData, setFormData] = useState({});
    const {authKey, login} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleChange = (event) => {
        setFormData({...formData, [event.target.id]: event.target.value});
    };

    useEffect(() => {
        console.log(authKey)
        if (authKey) navigate("/")
    }, [])

    function handleSubmit(e) {
        e.preventDefault()

        // register
        loginApi(formData.email, formData.password)
            .then(response => response.json()) //
            .then(result => {
                if (result["data"]) if (result["data"]["token"] !== undefined) {
                    login(result["data"]["token"], result["data"]["user"])
                    navigate("/")
                } else
                    alert("Email or password is invalid")

            })
            .catch(error => alert(error));
    }


    return (
        <div className="login-page">
            <div className="login-box">
                <div className={"register-title"}>
                    <h2><strong>Login</strong></h2>
                    <h4>&nbsp; don't you have an account? <a style={{color: "blue"}} href={"/register"}>register</a>
                    </h4>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input required type="email" id="email" onChange={handleChange}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input required type="password" id="password" onChange={handleChange}/>
                    </div>
                    <button id="btnSub" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
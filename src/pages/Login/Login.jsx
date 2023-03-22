import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className="login-page">
            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="username">Email</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <button id="btnSub" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
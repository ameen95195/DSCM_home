import React, {useContext, useState} from 'react';
import './Register.css';
import {registerApi} from "../../APIs/AuthApis.js";
import {AuthContext} from "../../AuthContext.jsx";
import {redirect, useNavigate} from "react-router-dom";

function Register() {
    const [formData, setFormData] = useState({});
    const {login} = useContext(AuthContext)
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        // register
        registerApi(formData.name, formData.email, formData.password, formData.address,
            formData.phone, formData.confirm_password, formData.role_id, formData.commercial_register)
            .then(response => response.json()) //
            .then(result => {
                console.log(result)
                if (result["errors"])
                    alert(result["message"])
                if (result["data"]) if (result["data"]["token"] !== undefined) {
                    login(result["data"]["token"], result["data"]["user"])
                    console.log(result["data"]["token"])
                    navigate("/")
                }
            })
            .catch(error => alert(error));
    }

    const handleChange = (event) => {
        setFormData({...formData, [event.target.id]: event.target.value});
    };

    return (<div className="register-page">
        <div className="register-box">
            <div className={"register-title"}>
                <h2><strong>Register</strong></h2>
                <h4>&nbsp; do you have an account? <a style={{color: "blue"}} href={"/login"}>login</a> </h4>
            </div>

            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <div className="input-group">
                                <label htmlFor="name">Name</label>
                                <input required type="text" id="name" onChange={handleChange}/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="email">Email</label>
                                <input required type="email" id="email" onChange={handleChange}/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input required type="password" id="password" onChange={handleChange}/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="confirm_password">Confirm Password</label>
                                <input required type="password" id="confirm_password" onChange={handleChange}/>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div className="input-group">
                                <label htmlFor="phone">Phone</label>
                                <input required type="number" id="phone" onChange={handleChange}/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="role_id">Role id</label>
                                <input required type="number" id="role_id" onChange={handleChange}/>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div className="input-group">
                                <label htmlFor="address">Address</label>
                                <input required type="text" id="address" onChange={handleChange}/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="commercial_register">Commercial Register</label>
                                <input required type="number" id="commercial_register" onChange={handleChange}/>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>


                <button id="btnSub" type="submit">Register</button>
            </form>
        </div>
    </div>);
}

export default Register;
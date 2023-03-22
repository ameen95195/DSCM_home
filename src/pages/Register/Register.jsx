import React, {useState} from 'react';
import './Register.css';
import {registerApi} from "../../APIs/AuthApis.js";
import {deleteDrugApi, getDrugsByDrugTypeApi} from "../../APIs/DrugsCRUDApis.js";

function Register() {
    const [formData, setFormData] = useState({});

    function handleSubmit(e) {
        e.preventDefault()

        // register
        registerApi(formData.name, formData.email, formData.password, formData.address, formData.phone,
            formData.confirm_password, formData.role_id, formData.commercial_register)
            .then(response => response.text()) //
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    const handleChange = (event) => {
        setFormData({...formData, [event.target.id]: event.target.value});
    };

    return (
        <div className="register-page">
            <div className="register-box">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" onChange={handleChange}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={handleChange}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={handleChange}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm_password">Confirm Password</label>
                        <input type="password" id="confirm_password" onChange={handleChange}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="number" id="phone" onChange={handleChange}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="role_id">Role id</label>
                        <input type="number" id="role_id" onChange={handleChange}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" onChange={handleChange}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="commercial_register">Commercial Register</label>
                        <input type="number" id="commercial_register" onChange={handleChange}/>
                    </div>

                    <button id="btnSub" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
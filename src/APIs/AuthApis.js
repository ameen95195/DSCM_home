import BaseRequestApis from "./BaseRequestApis.js";

export function loginApi(email, password) {
    const formData = {};
    formData["email"] = email
    formData["password"] = password

    return BaseRequestApis('POST', formData, "/api/login")
}

export function registerApi(name, email, password, address, phone, password_confirmation, role_id, commercial_register) {
    const formData = {};
    formData["name"] = name
    formData["email"] = email
    formData["password"] = password
    formData["address"] = address
    formData["phone"] = phone
    formData["password_confirmation"] = password_confirmation
    formData["role_id"] = role_id
    formData["commercial_register"] = commercial_register

    return BaseRequestApis('POST', formData, "/api/register")
}

export function logoutApi() {
    return BaseRequestApis('POST', null, "/api/logout")
}
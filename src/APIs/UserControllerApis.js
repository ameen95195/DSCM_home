import BaseRequestApis from "./BaseRequestApis.js";

export function getAllUsersApi(authKey) {
    return BaseRequestApis("GET", null, "/api/users", authKey)
}

export function showSingleUserApi(id, authKey) {
    return BaseRequestApis("GET", null, "/api/users/" + id, authKey)
}

export function updateUserInformationApi(id, address, authKey) {
    const updatedData = {
        address: address,
        //add the rest of data you want to update
    }
    const urlencoded = new URLSearchParams();
    for (const key in updatedData) {
        if (updatedData[key] != null || updatedData[key].trim() !== "")
            urlencoded.append(key, updatedData[key])
    }
    return BaseRequestApis("PATCH", urlencoded, "/api/users/" + id, authKey)
}

export function deleteUserApi(id, authKey) {
    return BaseRequestApis("DELETE", null, "/api/users/" + id, authKey)
}

export function getAllWholesalersApi(authKey) {
    return BaseRequestApis("GET", null, "/api/users/wholesalers", authKey)
}

export function getAllRetailersApi(authKey) {
    return BaseRequestApis("GET", null, "/api/users/retailers", authKey)
}

export function getAllEmployeesApi(authKey) {
    return BaseRequestApis("GET", null, "/api/users/employees", authKey)
}




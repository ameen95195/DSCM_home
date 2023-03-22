import BaseRequestApis from "./BaseRequestApis.js";

export function getAllClientsApi(authKey) {
    return BaseRequestApis("GET", null, "/api/clients", authKey)
}

export function stockMonitoringApi(authKey) {
    return BaseRequestApis("GET", null, "/api/monitoring", authKey)
}

export function searchApi(text, authKey) {
    const formData = {trade_name: text}
    return BaseRequestApis("GET", formData, "/api/monitoring", authKey)
}



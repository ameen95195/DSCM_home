import BaseRequestApis from "./BaseRequestApis.js";

export function getAllDrugTypesApi(authKey) {
    return BaseRequestApis("GET", null, "/api/durgType/index", authKey)
}

export function StoreDrugTypeApi(drugTypeTitle, drugTypeDescription, authKey) {
    const formData = {};
    formData["drug_type_title"] = drugTypeTitle
    formData["drug_type_description"] = drugTypeDescription
    return BaseRequestApis("POST", formdata, "/api/durgType/store", authKey)
}


export function showSingleDrugTypeApi(id, authKey) {
    return BaseRequestApis("GET", null, "/api/durgType/store/" + id, authKey)
}

export function updateDrugTypeRequestApi(id, drugTypeTitle, drugTypeDescription, authKey) {
    const urlencoded = new URLSearchParams();
    urlencoded.append("drug_type_title", drugTypeTitle);
    urlencoded.append("drug_type_description", drugTypeDescription);
    return BaseRequestApis("PATCH", urlencoded, "/api/durgType/update/" + id, authKey)
}

export function deleteDrugTypeApi(id, authKey) {
    return BaseRequestApis("DELETE", null, "/api/durgType/destroy/" + id, authKey)
}

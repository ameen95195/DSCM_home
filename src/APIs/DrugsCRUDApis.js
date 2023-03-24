import BaseRequestApis from "./BaseRequestApis.js";
import {data} from "autoprefixer";

export function getAllDrugsApi(authKey) {
    return BaseRequestApis("GET", null, "/api/durgs/index", authKey)
}

export function storeDrugRequest(tradeName, scientificName, drugDescription, drugDose, drugTypeId, authKey) {
    const formData = {};
    formData["trade_name"] = tradeName
    formData["scientific_name"] = scientificName
    formData["drug_description"] = drugDescription
    formData["drug_dose"] = drugDose
    formData["drug_type_id"] = drugTypeId


    return BaseRequestApis("POST", formData, "/api/durgs/store", authKey)
}

export function showSingleDrugApi(id, authKey) {
    return BaseRequestApis("GET", null, "/api/durgs/show/" + id, authKey)
}

export function updateDrugApi(id, trade_name, drug_dose, drug_description, scientific_name, drug_type_id, authKey) {
    const updatedData = {
        trade_name: trade_name,
        drug_dose: drug_dose,
        drug_description: drug_description,
        scientific_name: scientific_name,
        drug_type_id: drug_type_id
    }
    const urlencoded = new URLSearchParams();
    for (const key in updatedData) {
        if (updatedData[key] != null || updatedData[key].trim() !== "")
            urlencoded.append(key, updatedData[key])
    }
    return BaseRequestApis("PATCH", urlencoded, "/api/durgs/update/" + id, authKey)
}

export function deleteDrugApi(id, authKey) {
    return BaseRequestApis("DELETE", null, "/api/durgs/destroy/" + id, authKey)
}

export function getDrugsByDrugTypeApi(id, authKey) {
    return BaseRequestApis("GET", null, "/api/drugs/getDrugsByType/" + id, authKey)
}

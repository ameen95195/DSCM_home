import BaseRequestApis from "./BaseRequestApis.js";

export function getStockDetailsOfStockApi(id, authKey) {
    return BaseRequestApis("GET", null, "/api/stock/stockDetails/" + id, authKey)
}

export function showSingleStockDetailsApi(id, authKey) {
    return BaseRequestApis("GET", null, "/api/stockDetails", authKey)
}

export function getStockDetailsOfAllStocks(authKey) {
    return BaseRequestApis("GET", null, "/api/stockDetails", authKey)
}

export function addStoreStockDetailsApi(drug_amount, drug_entry_date, drug_residual, stock_id, drug_id,
                                        production_date, expiration_date, drug_unit_price, authKey) {
    const formData = {}
    formData["drug_amount"] = drug_amount
    formData["drug_entry_date"] = drug_entry_date
    formData["drug_residual"] = drug_residual
    formData["stock_id"] = stock_id
    formData["drug_id"] = drug_id
    formData["production_date"] = production_date
    formData["expiration_date"] = expiration_date
    formData["drug_unit_price"] = drug_unit_price

    return BaseRequestApis("POST", formData, "/api/stockDetails", authKey)
}

export function updateStockDetailsApi(id, drug_amount, authKey) {
    const updatedData = {
        drug_amount: drug_amount,
        //add the rest of data you want to update
    }
    const urlencoded = new URLSearchParams();
    for (const key in updatedData) {
        if (updatedData[key] != null || updatedData[key].trim() !== "")
            urlencoded.append(key, updatedData[key])
    }
    return BaseRequestApis("PUT", urlencoded, "/api/stockDetails/" + id, authKey)
}

export function deleteStockDetailsApi(id, authKey) {
    return BaseRequestApis("DELETE", null, "/api/stockDetails/" + id, authKey)
}


export function getStockDetailsOfUser(id, authKey) {
    return BaseRequestApis("GET", null, "/api/getStockDetailsOfUser/" + id, authKey)
}


import BaseRequestApis from "./BaseRequestApis.js";

export function getAllStocksApi(authKey) {
    return BaseRequestApis("GET", null, "/api/stocks", authKey)
}

export function addStockApi(stock_number, stock_supervisor, stock_location, authKey) {
    const formData = {}
    formData["stock_number"] = stock_number
    formData["stock_supervisor"] = stock_supervisor
    formData["stock_location"] = stock_location


    return BaseRequestApis("POST", formData, "/api/stocks", authKey)
}


export function showSingleStockApi(id, authKey) {
    return BaseRequestApis("GET", null, "/api/stocks/" + id, authKey)
}

export function updateOrderDetailsApi(id, stock_number, stock_supervisor, stock_location, stock_details, authKey) {
    const updatedData = {
        stock_number: stock_number,
        stock_supervisor: stock_supervisor,
        stock_location: stock_location,
        stock_details: stock_details
        //add the rest of data you want to update
    }
    const urlencoded = new URLSearchParams();
    for (const key in updatedData) {
        if (updatedData[key] != null || updatedData[key].trim() !== "")
            urlencoded.append(key, updatedData[key])
    }
    return BaseRequestApis("PATCH", urlencoded, "/api/stocks/" + id, authKey)
}

export function deleteStockApi(id, authKey) {
    return BaseRequestApis("DELETE", null, "/api/stocks/" + id, authKey)
}

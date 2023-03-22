import BaseRequestApis from "./BaseRequestApis.js";

export function storeOrderDetailsApi(drug_amount, stock_details_id, order_id, authKey) {
    const formData = {}
    formData["drug_amount"] = drug_amount
    formData["stock_details_id"] = stock_details_id
    formData["order_id"] = order_id


    return BaseRequestApis("POST", formData, "/api/orderDetails", authKey)
}

export function showOrderDetailsOfAnOrderApi(id, authKey) {
    return BaseRequestApis("GET", null, "/api/order/" + id, authKey)
}

export function updateOrderDetailsApi(id, drug_amount, authKey) {
    const updatedData = {
        drug_amount: drug_amount
        //add the rest of data you want to update
    }
    const urlencoded = new URLSearchParams();
    for (const key in updatedData) {
        if (updatedData[key] != null || updatedData[key].trim() !== "")
            urlencoded.append(key, updatedData[key])
    }
    return BaseRequestApis("PUT", urlencoded, "/api/orderDetails/" + id, authKey)
}

export function showSingleOrderDetailsApi(id, authKey) {
    return BaseRequestApis("GET", null, "/api/orderDetails/" + id, authKey)
}

export function deleteOrderDetailsApi(id, authKey) {
    return BaseRequestApis("DELETE", null, "/api/orderDetails/" + id, authKey)
}

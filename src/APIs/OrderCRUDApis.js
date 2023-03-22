import BaseRequestApis from "./BaseRequestApis.js";


export function storeOrderApi(orderDescription, sellerID, buyerStockNumber, destinationCity, destinationAddress, authKey) {
    const formData = {}
    formData["order_description"] = orderDescription
    formData["seller_id"] = sellerID
    formData["buyer_stock_number"] = buyerStockNumber
    formData["destination_city"] = destinationCity
    formData["destination_address"] = destinationAddress

    return BaseRequestApis("POST", formData, "/api/orders", authKey)
}

export function getSellerOrdersApi(authKey) {
    return BaseRequestApis("GET", null, "/api/orders/sellerOrders", authKey)
}

export function getBuyerOrdersApi(authKey) {
    return BaseRequestApis("GET", null, "/api/orders/buyerOrders", authKey)
}

export function updateOrderApi(id, order_description, authKey) {
    const updatedData = {
        order_description: order_description
        //add the rest of data you want to update
    }
    const urlencoded = new URLSearchParams();
    for (const key in updatedData) {
        if (updatedData[key] != null || updatedData[key].trim() !== "")
            urlencoded.append(key, updatedData[key])
    }
    return BaseRequestApis("PATCH", urlencoded, "/api/orders/" + id, authKey)
}

export function deleteOrderApi(id, authKey) {
    return BaseRequestApis("DELETE", null, "/api/orders/" + id, authKey)
}

export function getSingleOrderApi(id, authKey) {
    return BaseRequestApis("GET", null, "/api/orders/" + id, authKey)
}


export function performOrderApi(id, authKey) {
    return BaseRequestApis("PUT", null, "/api/orders/performOrder/" + id, authKey)
}


export function approveOrderApi(id, authKey) {
    return BaseRequestApis("PUT", null, "/api/orders/approveOrder/" + id, authKey)
}


export function cancelOrderApi(id, authKey) {
    return BaseRequestApis("PUT", null, "/api/orders/cancelOrder/" + id, authKey)
}

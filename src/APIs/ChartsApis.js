import BaseRequestApis from "./BaseRequestApis.js";

export function ordersChartGroupedByMonthApi(authKey) {
    return BaseRequestApis("GET", null, "/api/chart/groupByMonth", authKey)
}

export function ordersChartGroupedByYearApi(authKey) {
    return BaseRequestApis("GET", null, "/api/chart/groupByYear", authKey)
}

export function ordersChartGroupedByCityApi(authKey) {
    return BaseRequestApis("GET", null, "/api/chart/groupByCity", authKey)
}


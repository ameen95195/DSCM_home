
const host = "http://127.0.0.1:8000"
/**
 * @param method it should be POST, GET, PUT, UPDATE or DELETE
 * @param formdata is object of the data of body request {"key", "value"}
 * @param apiUrl url of api request
 * @param authKey default is null, but I should pass when request need auth key
 * @return json object
 * */
export default async function (method, formdata, apiUrl, authKey = null) {
    const headerProps = {"Content-Type": "application/vnd.api+json"}
    if (formdata instanceof URLSearchParams) {
        headerProps["Content-Type"] = "application/x-www-form-urlencoded"
    }else {
         formdata = formdata? JSON.stringify(formdata? formdata:""): null
    }
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/vnd.api+json");
    myHeaders.append("Content-Type", headerProps["Content-Type"]);
    if (authKey)
        myHeaders.append("Authorization", "Bearer " + authKey);


    const requestOptions = {
        method: method.toUpperCase(),
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return await fetch(host + apiUrl, requestOptions)
}
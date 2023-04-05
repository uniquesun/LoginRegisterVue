import axios from "axios";
import store from "../store"

const instance = axios.create({
    baseURL: 'http://bbs.test/api',
    timeout: 1000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});


instance.interceptors.request.use(function (config) {

    const token = store.state.token

    token && (config.headers.Authorization = 'Bearer '+token)

    return config;
}, function (error) {
    return Promise.reject(error);
});


instance.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {

    // http 300 400 500  exception
    const response_data = error.response.data
    let response_status = error.response.status

    handleException(response_status, response_data)
    return Promise.reject(error);
});


// todo handle exception
function handleException(response_status, response_data) {

}

export default instance 
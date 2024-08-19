import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { error } from "console";

const axiosClient = axios.create({
    baseURL: '',
    headers: {
        'Content-Type': 'application/json'
    }
})
axiosClient.interceptors.response.use(
    (response: AxiosResponse) => {
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)
export default axiosClient
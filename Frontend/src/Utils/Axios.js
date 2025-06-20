import axios from "axios";

//Create an Axios instance with a base URL and credentials
export const Axios = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true
})
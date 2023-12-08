import axios from "axios"

export const api = axios.create({
    baseURL: 'http://15.228.157.166:3000/api'
});
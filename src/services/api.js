import axios from "axios";

const api = axios.create({
    baseURL: "https://sua-api.com/api",
    headers:{
        "Content-Type":"application/json",
    },
});

export default api;
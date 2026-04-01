import axios from "axios";
const commonConfig = {
    headers: {
        "Content-Type": "application/json", // dữ liệu gửi đi dạng json
        Accept: "application/json", // nhận dữ liệu trả về dạng json
    },
};
export default (baseURL) => {
    const instance = axios.create({
        baseURL, // "/api/contacts"
        headers: {
            "Content-Type": "application/json",
        },
    });

    // TỰ ĐỘNG GẮN TOKEN
    instance.interceptors.request.use((config) => {
        const token = localStorage.getItem("userToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });

    return instance;
};
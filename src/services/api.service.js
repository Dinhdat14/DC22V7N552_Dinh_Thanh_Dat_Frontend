import axios from "axios";
const commonConfig = {
    headers: {
        "Content-Type": "application/json", // dữ liệu gửi đi dạng json
        Accept: "application/json", // nhận dữ liệu trả về dạng json
    },
};
export default (baseURL) => {
    return axios.create({
        baseURL,
        ...commonConfig,
    });
};
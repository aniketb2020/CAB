import axios from "axios";
const BASE_URL = "http://localhost:8080/user";

export const logInCustomer = (userName, password) => {
    return axios.post('${BASE_URL}/customer',{userName, password});
};
export const logInDriver =(userName,password) => {
    return axios.post('${BASE_URL}/driver',{userName,password});
};

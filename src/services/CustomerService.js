import axios from 'axios';
const BASE_URL = "http://localhost:8080/customer";

export const RegisterCustomer =(customerName,userName,password,userId,address,email,mobileNumber,roles,logOutMsg) =>
 {
    return axios.post('${BASE_URL}/customer',{customerName,userName,password,userId,address,email,mobileNumber,roles,logOutMsg});
};
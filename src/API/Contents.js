import axios from "axios";

axios.defaults.baseURL = "https://fakestoreapi.com";

export const getProductApi = async () => axios.get(`/products`);
export const getquery = async (data) =>
  axios.get(`/products?limit=${data}`, {
    headers: {
      "Content-Type": "multipart/form-data"
    },
  });

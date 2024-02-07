import axios from "axios";

axios.defaults.baseURL="https://fakestoreapi.com"

export const getProductApi = async () => axios.get(`/products`)

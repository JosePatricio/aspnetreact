import axios from "axios";
const BASE_BACKEND_URL = "http://localhost:55211/api";

export default {
  getAll: (params) => axios.get(`${BASE_BACKEND_URL}/getall`, {
    params: params,
  })
  
};

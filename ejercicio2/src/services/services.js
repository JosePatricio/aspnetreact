import axios from "axios";
const BASE_BACKEND_URL = "https://jsonplaceholder.typicode.com";

export default {
  getAll: () => axios.get(`${BASE_BACKEND_URL}/users`),
  add: (user) => axios.post(`${BASE_BACKEND_URL}/users`, user),
  edit: (userId) => axios.get(`${BASE_BACKEND_URL}/users/${userId}`),
  update: (user) => axios.put(`${BASE_BACKEND_URL}/users/${user.id}`, user),
  delete: (userId) => axios.delete(`${BASE_BACKEND_URL}/users/${userId}`),
};

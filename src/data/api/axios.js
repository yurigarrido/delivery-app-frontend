import axios from "axios";

const api = axios.create({
  baseURL: 'https://delivery-app-backend-1.herokuapp.com/',
  headers: { 'Content-Type': 'application/json'}
});

export default api;
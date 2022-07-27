import axios from "axios";

const api = axios.create({
  baseURL: 'https://delivery-app-backend-1.herokuapp.com/',
  headers: {'X-Custom-Header': 'foobar'}
});

export default api;
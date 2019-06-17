import axios from 'axios';
  const api = axios.create({
    baseURL: 'https://backend-instagram.herokuapp.com',
  });
export default api;
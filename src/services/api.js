import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-instagram.herokuapp.com/',
  timeout: 1000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Authorization': true,
    withCredentials: true,
    mode: 'no-cors',
  }
});

export default api;
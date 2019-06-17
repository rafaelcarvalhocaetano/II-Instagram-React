import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-instagram.herokuapp.com/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'mode': 'no-cors',
  }
});

export default api;
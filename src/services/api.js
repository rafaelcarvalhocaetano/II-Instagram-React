import axios from 'axios';

const api = axios.create({
  withCredentials: true,
  baseURL: 'https://dashboard.heroku.com/apps/backend-instagram/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Content-Type': 'application/json;charset=UTF-8'
  },
});

export default api;
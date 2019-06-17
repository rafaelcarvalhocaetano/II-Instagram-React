import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-instagram.herokuapp.com/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'X-Custom-Header': 'foobar',
    'X-Requested-With': 'XMLHttpRequest',
    'content-type': 'application/x-www-form-urlencoded',
    'mode': 'no-cors',
  }
});


api.defaults.baseURL = 'https://backend-instagram.herokuapp.com';
api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default api;
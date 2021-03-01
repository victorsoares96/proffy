import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.31.103:3333',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
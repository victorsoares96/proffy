import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nlw-proffy-victorsoares96.herokuapp.com'
});

export default api;
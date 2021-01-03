import axios from 'axios';

/*const api = axios.create({
  baseURL: 'https://nlw-proffy-victorsoares96.herokuapp.com'
});*/

const api = axios.create({
  baseURL: 'http://192.168.31.103:3333'
});

export default api;
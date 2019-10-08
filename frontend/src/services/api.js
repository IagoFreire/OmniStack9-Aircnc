import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.16.2.181:3333',
});

export default api;
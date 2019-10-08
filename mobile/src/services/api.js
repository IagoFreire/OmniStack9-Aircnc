import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.57.138:3333',
});

export default api;
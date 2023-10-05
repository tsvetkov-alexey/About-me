import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://651bff84194f77f2a5af3510.mockapi.io',
});

export default instance;

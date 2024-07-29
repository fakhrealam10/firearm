import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://fire-arms.net/api/',
});
export default axiosInstance;

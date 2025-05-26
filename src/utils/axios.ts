import axios from 'axios';

const instance = axios.create({
  baseURL: '/api', // 可根据实际情况调整
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    // 可在此添加 token
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // 可全局处理错误
    return Promise.reject(error);
  }
);

export default instance; 
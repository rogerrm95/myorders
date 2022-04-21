import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_AUTH_API_URL,
});

api.interceptors.request.use(
  function (config: any) {
    const data = localStorage.getItem('@my-orders');

    if (data !== null) {
      const { token } = JSON.parse(data)
      const auth = token ? `Bearer ${token}` : '';

      config.headers.common['Authorization'] = auth as string;

      return config;
    } 

    return config
  },
  function (error) {
    return Promise.reject(error);
  });

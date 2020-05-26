import axios from 'axios';

export function request(option) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: '',
      timeout: 5000
    });

    instance.interceptors.request.use(config => {
      return config;
    },error => {
      return error;
    });

    instance.interceptors.response.use(rep => {
      return rep.data;
    },error => {
      return error;
    });

    instance(option).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  });
}

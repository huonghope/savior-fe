// import queryString from 'querystring';
// import axios from 'axios';
// import {isAuthenticated} from '../routes/permissionChecker';

// const axiosClient = axios.create({
//   baseURL: process.env.REACT_APP_SERVER_API,
//   headers: {
//     'content-type': 'application/json',
//   },
//   paramsSerializer: (params) => queryString.stringify(params),
// });

// // handle token for request
// axiosClient.interceptors.request.use(
//     async (config) => {
//       if (isAuthenticated()) {
//         config.headers['Authorization'] = `Bearer ${isAuthenticated()}`;
//       }
//       config.headers['Content-Type'] = 'application/json';
//       return config;
//     },
//     (error) => {
//       Promise.reject(error);
//     },
// );

// // return data from all response
// axiosClient.interceptors.response.use(
//     (response) => {
//       if (response && response.data) {
//         return response.data;
//       }
//       return response;
//     },
//     (error) => {
//       throw error;
//     },
// );
// // Now all requests using this instance will wait 2.5 seconds before timing out
// axiosClient.defaults.timeout = 2500;

// export default axiosClient;

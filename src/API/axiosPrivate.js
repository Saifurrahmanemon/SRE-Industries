import axios from "axios";

const axiosPrivate = axios.create({});

axiosPrivate.interceptors.request.use(
   function (config) {
      // Do something before request is sent
      if (!config.headers.authorization) {
         config.headers.authorization = `Bearer ${localStorage.getItem(
            "accessToken"
         )}`;
      }
      return config;
   },
   function (error) {
      // Do something with request error
   }
);

// Add a response interceptor
axiosPrivate.interceptors.response.use(
   function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data

      return response;
   },
   function (error) {
      return Promise.reject(error);
   }
);

export default axiosPrivate;

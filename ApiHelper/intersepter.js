import apiService from "./apiService";

// Add a request interceptor
apiService.interceptors.request.use(
  (config) => {
    // Modify headers, add tokens, etc. before sending the request
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
apiService.interceptors.response.use(
  (response) => {
    // Modify response data or handle common success cases
    return response;
  },
  (error) => {
    // Handle errors globally
    return Promise.reject(error);
  }
);

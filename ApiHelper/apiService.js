import axios from "axios";

const API_BASE_URL = "https://admin.hubara.com/api/user-inventory/85";

const apiService = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // Add any common headers here
  },
});

export default apiService;

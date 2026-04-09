import axios from "axios";

// ✅ Get base URL from .env
const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "https://codestudio-ats.onrender.com";

// ✅ Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
});

// ✅ Add token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token && config.headers) {
    config.headers.Authorization = token;
  }

  return config;
});

export default api;
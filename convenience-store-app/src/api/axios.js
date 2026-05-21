import axios from "axios";
import { getToken } from "../utils/auth";

const api = axios.create({
  baseURL: "http://192.168.0.8:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  const token = await getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

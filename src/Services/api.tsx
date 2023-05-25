import axios from "axios";

export const instance = axios.create({
  baseURL: "https://restaurant-api-deploy.onrender.com",
  timeout: 8000,
  headers: { "Content-Type": "application/json" },
});

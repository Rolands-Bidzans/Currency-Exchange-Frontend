import axios from "axios";

console.log("API URL:", import.meta.env.VITE_API_URL);

// Create an Axios instance
const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  // withCredentials: true, // No need if no sessions/auth cookies
});

export default api;

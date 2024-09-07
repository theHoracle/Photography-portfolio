import { auth } from "@/firebase/config";
import axios from "axios";

// Create the base Axios instance without the token
const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach an interceptor to add the token dynamically
api.interceptors.request.use(async (config) => {
  const user = auth.currentUser;

  if (user) {
    // Fetch the current user's ID token
    const token = await user.getIdToken();

    // Add the token to the Authorization header
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
}, (error) => {
  // Handle request error here
  console.error(error)
  return Promise.reject(error);
});

export default api;

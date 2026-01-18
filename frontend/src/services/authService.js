import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;


// Axios instance (token auto-attach)
const axiosInstance = axios.create({
  baseURL: API_URL,
});

//  Automatically attach token to every request
axiosInstance.interceptors.request.use((config) => {
  const user = localStorage.getItem("user");
  if (user) {
    const token = JSON.parse(user).token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Register
export const registerUser = async (name, email, password) => {
  const { data } = await axiosInstance.post("/auth/register", {
    name,
    email,
    password,
  });
  return data;
};

// Login
export const loginUser = async (email, password) => {
  const { data } = await axiosInstance.post("/auth/login", {
    email,
    password,
  });
  return data;
};

// Get courses (protected route example)
export const getCourses = async () => {
  const { data } = await axiosInstance.get("/courses");
  return data;
};

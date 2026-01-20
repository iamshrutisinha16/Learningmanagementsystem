import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

// Safety check
if (!BASE_URL) {
  console.error(
    "REACT_APP_API_URL is missing! Please set it in your .env file."
  );
}

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

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

export const registerUser = async (name, email, password) => {
  try {
    const { data } = await axiosInstance.post("/api/auth/register", {
      name,
      email,
      password,
    });
    return data;
  } catch (error) {
    console.error("Registration failed:", error);
    throw error.response?.data?.message || "Registration failed";
  }
};

export const loginUser = async (email, password) => {
  try {
    const { data } = await axiosInstance.post("/api/auth/login", {
      email,
      password,
    });
    return data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error.response?.data?.message || "Login failed";
  }
};

export const getCourses = async () => {
  try {
    const { data } = await axiosInstance.get("/api/courses");
    return data;
  } catch (error) {
    console.error("Fetching courses failed:", error);
    throw error.response?.data?.message || "Failed to fetch courses";
  }
};

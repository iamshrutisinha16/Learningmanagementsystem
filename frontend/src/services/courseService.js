import axios from "axios";
const BASE_URL = process.env.REACT_APP_API_URL;

if (!BASE_URL) {
  console.error(
    " VITE_API_URL is missing! Please set it in .env or Vercel Environment Variables."
  );
}

const API_URL = BASE_URL ? `${BASE_URL}/courses` : "";

export const getCourses = async () => {
  if (!API_URL) throw new Error("API URL is missing");

  try {
    const { data } = await axios.get(API_URL);
    return data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error.response?.data?.message || "Failed to fetch courses";
  }
};

export const getCourseById = async (id) => {
  if (!API_URL) throw new Error("API URL is missing");

  try {
    const { data } = await axios.get(`${API_URL}/${id}`);
    return data;
  } catch (error) {
    console.error(`Error fetching course with ID ${id}:`, error);
    throw error.response?.data?.message || "Failed to fetch course details";
  }
};

export const createCourse = async (courseData, token) => {
  if (!API_URL) throw new Error("API URL is missing");

  try {
    const { data } = await axios.post(API_URL, courseData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    console.error("Error creating course:", error);
    throw error.response?.data?.message || "Failed to create course";
  }
};

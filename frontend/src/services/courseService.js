import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL + "/courses";

// Get all courses
export const getCourses = async () => {
  try {
    const { data } = await axios.get(API_URL);
    return data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error.response?.data?.message || "Failed to fetch courses";
  }
};

// Get single course by ID
export const getCourseById = async (id) => {
  try {
    const { data } = await axios.get(`${API_URL}/${id}`);
    return data;
  } catch (error) {
    console.error(`Error fetching course with ID ${id}:`, error);
    throw error.response?.data?.message || "Failed to fetch course details";
  }
};

// Create a new course
export const createCourse = async (courseData, token) => {
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

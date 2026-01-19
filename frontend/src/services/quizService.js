import axios from "axios";

// CRA environment variable
const BASE_URL = process.env.REACT_APP_API_URL;

// Safety check
if (!BASE_URL) {
  console.error("❌ REACT_APP_API_URL is missing! Please set it in your .env file.");
}

// Final API endpoint for quizzes
const API_URL = `${BASE_URL}/quizzes`;

// ---------------- GET ALL QUIZZES ----------------
export const getQuizzes = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    console.error("Error fetching quizzes:", error);
    throw error.response?.data?.message || "Failed to fetch quizzes";
  }
};

// ---------------- GET QUIZ BY ID ----------------
export const getQuizById = async (id) => {
  try {
    const res = await axios.get(`${API_URL}/${id}`);
    return res.data;
  } catch (error) {
    console.error(`Error fetching quiz with ID ${id}:`, error);
    throw error.response?.data?.message || "Failed to fetch quiz details";
  }
};

// ---------------- SUBMIT QUIZ ----------------
export const submitQuiz = async (quizId, answers) => {
  try {
    const res = await axios.post(`${API_URL}/${quizId}/submit`, { answers });
    return res.data;
  } catch (error) {
    console.error(`Error submitting quiz ${quizId}:`, error);
    throw error.response?.data?.message || "Failed to submit quiz";
  }
};

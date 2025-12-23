import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

// Get all quizzes
export const getQuizzes = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

// Get quiz by ID ( ye missing tha)
export const getQuizById = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};

// Submit quiz answers
export const submitQuiz = async (quizId, answers) => {
  const res = await axios.post(`${API_URL}/${quizId}/submit`, { answers });
  return res.data;
};


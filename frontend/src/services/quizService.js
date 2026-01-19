import axios from "axios";
const BASE_URL = process.env.REACT_APP_API_URL;

export const getQuizzes = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const getQuizById = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};

export const submitQuiz = async (quizId, answers) => {
  const res = await axios.post(`${API_URL}/${quizId}/submit`, { answers });
  return res.data;
};


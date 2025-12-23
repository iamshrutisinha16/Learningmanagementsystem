import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const makePayment = async (courseId, amount, token) => {
  const { data } = await axios.post(
    `${API_URL}/checkout`,
    { courseId, amount },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return data;
};

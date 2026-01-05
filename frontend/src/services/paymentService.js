import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

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

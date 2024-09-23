import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  localStorage.setItem('token', response.data.token);
};

export const signup = async (email, password) => {
  const response = await axios.post(`${API_URL}/signup`, { email, password });
  localStorage.setItem('token', response.data.token);
};

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

const handleApiError = (error) => {
  console.error('API call failed:', error.response?.data || error.message);
  return error.response?.data?.message || error.message;
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const signup = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { name, email, password });
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const getUser = async () => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.get(`${API_URL}/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

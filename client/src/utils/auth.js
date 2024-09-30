import axios from 'axios';

// Base URL for authentication API
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/auth';

// Function to handle API errors
const handleApiError = (error) => {
  console.error('API call failed:', error.response?.data || error.message);
  return error.response?.data || error.message;
};

// Login function
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

// Signup function
export const signup = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { name, email, password });
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

// Logout function
export const logout = () => {
  localStorage.removeItem('token');
};

// Get User function
export const getUser = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

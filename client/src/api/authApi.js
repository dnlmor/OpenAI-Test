import axios from 'axios';

const API_URL = '/api/auth/';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Register a new user
export const registerUser = async (userData) => {
  try {
    const response = await apiClient.post('register', userData);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Login a user
export const loginUser = async (credentials) => {
  try {
    const response = await apiClient.post('login', credentials);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Request password reset
export const requestPasswordReset = async (email) => {
  try {
    const response = await apiClient.post('password-reset', { email });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Reset password
export const resetPassword = async (token, password) => {
  try {
    const response = await apiClient.post('reset-password', { token, password });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Error handling
const handleError = (error) => {
  if (error.response) {
    throw new Error(error.response.data.message || 'Something went wrong');
  } else {
    throw new Error('Network error: Please try again later');
  }
};

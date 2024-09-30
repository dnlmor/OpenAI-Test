import axios from 'axios';

const API_URL = '/api/languages/';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fetch available languages
export const fetchLanguages = async () => {
  try {
    const response = await apiClient.get('');
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Handle errors
const handleError = (error) => {
  if (error.response) {
    throw new Error(error.response.data.message || 'Error fetching languages');
  } else {
    throw new Error('Network error: Please try again later');
  }
};

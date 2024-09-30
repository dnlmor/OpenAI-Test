import axios from 'axios';

const API_URL = '/api/profile/';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fetch saved conversations
export const getConversations = async () => {
  try {
    const response = await apiClient.get('conversations');
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

// Delete a specific conversation
export const deleteConversation = async (id) => {
  try {
    const response = await apiClient.delete(`conversations/${id}`);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

// Handle errors
const handleError = (error) => {
  const message = error.response?.data?.message || 'Network error';
  console.error(message);
  return { error: message };
};

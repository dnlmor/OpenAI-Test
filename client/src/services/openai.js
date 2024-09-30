import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Function to send a message to the chatbot
export const sendMessage = async (message, language, section) => {
  try {
    const response = await axios.post(`${API_URL}/chat`, {
      prompt: message,
      language,
      section,
    }, { headers: getAuthHeaders() });
    return response.data.response;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};

// Helper to get authentication headers
const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return { Authorization: `Bearer ${token}` };
};

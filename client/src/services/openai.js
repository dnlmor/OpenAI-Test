import axios from 'axios';

const API_URL = 'http://localhost:5000/api/openai';

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return { Authorization: `Bearer ${token}` };
};

export const sendMessage = async (message, testType, section) => {
  try {
    const response = await axios.post(
      `${API_URL}/chat`, 
      { prompt: message, testType, section }, 
      { headers: getAuthHeaders() }
    );
    return response.data.response;
  } catch (error) {
    console.error('Error sending message:', error);
    return 'Error communicating with the server';
  }
};

// Save conversation
export const saveConversation = async (conversationData) => {
  try {
    const response = await axios.post(`${API_URL}/save-conversation`, conversationData, { headers: getAuthHeaders() });
    return response.data;
  } catch (error) {
    console.error('Error saving conversation:', error);
  }
};

// Fetch saved conversations
export const getSavedConversations = async () => {
  const userId = localStorage.getItem('userId');
  try {
    const response = await axios.get(`${API_URL}/saved-conversations/${userId}`, { headers: getAuthHeaders() });
    return response.data.conversations;
  } catch (error) {
    console.error('Error fetching saved conversations:', error);
  }
};

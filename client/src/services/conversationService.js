import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Fetch saved conversations
export const getConversations = async () => {
  try {
    const response = await axios.get(`${API_URL}/conversations`, { headers: getAuthHeaders() });
    return response.data;
  } catch (error) {
    console.error('Error fetching conversations:', error);
    throw error;
  }
};

// Fetch all conversations and update context
export const fetchAndSetConversations = async (dispatch) => {
  try {
    const conversations = await getConversations();
    dispatch({ type: 'SET_CONVERSATIONS', payload: conversations });
  } catch (error) {
    console.error('Failed to fetch conversations:', error);
  }
};

// Save new conversation
export const saveConversation = async (conversationData) => {
  try {
    const response = await axios.post(`${API_URL}/conversations`, conversationData, { headers: getAuthHeaders() });
    return response.data;
  } catch (error) {
    console.error('Error saving conversation:', error);
    throw error;
  }
};

// Helper to get authentication headers
const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return { Authorization: `Bearer ${token}` };
};

// Helper to delete a conversation
export const deleteConversation = async (id) => {
  try {
    await axios.delete(`${API_URL}/conversations/${id}`, { headers: getAuthHeaders() });
  } catch (error) {
    console.error('Error deleting conversation:', error);
    throw error;
  }
};

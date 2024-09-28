import axios from 'axios';

export const getConversations = async () => {
  try {
    const response = await axios.get('/api/conversations');
    return response.data;
  } catch (error) {
    console.error('Error fetching conversations:', error);
    throw error;
  }
};

// Function to save a new conversation
export const saveConversation = async (conversationData) => {
  try {
    const response = await axios.post('/api/conversations', conversationData);
    return response.data;
  } catch (error) {
    console.error('Error saving conversation:', error);
    throw error;
  }
};

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/conversations';

// Helper to get authentication headers
const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return { Authorization: `Bearer ${token}` };
};

// Function to save a conversation
export const saveConversation = async ({ userId, language, section, messages }) => {
  if (!userId || !language || !section || !messages.length) {
    throw new Error('Missing required fields for conversation.');
  }

  const conversationData = { userId, language, section, messages };

  try {
    const response = await axios.post(API_URL, conversationData, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error) {
    console.error('Error saving conversation:', error.response ? error.response.data : error.message);
    throw new Error('Failed to save conversation.');
  }
};

// Function to download a conversation as PDF
export const downloadConversationPDF = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}/download`, {
      headers: getAuthHeaders(),
      responseType: 'blob', // Important for downloading files
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `conversation-${id}.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (error) {
    console.error('Error downloading PDF:', error.response ? error.response.data : error.message);
    throw new Error('Failed to download PDF.');
  }
};

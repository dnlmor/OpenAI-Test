import axios from 'axios';

const API_URL = 'http://localhost:5000/api/openai';

export const sendMessage = async (message) => {
  try {
    // POST request to the backend
    const response = await axios.post(`${API_URL}/message`, { prompt: message });
    
    // Extract the proper response data
    return response.data.response;
  } catch (error) {
    console.error('Error sending message:', error);
    return 'Error communicating with the server';
  }
};

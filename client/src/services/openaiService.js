import { sendMessageToAI } from '../api/chatApi';

// Send a message and return the AI response
export const getAIResponse = async (message) => {
  try {
    const response = await sendMessageToAI({ message });
    return response;
  } catch (error) {
    console.error('Failed to get response from AI:', error);
    throw error;
  }
};

// Format messages consistently
export const formatMessage = (sender, message) => ({
  sender,
  message,
  timestamp: new Date().toISOString(),
});

// Load chat history from local storage
export const loadChatHistory = () => {
  try {
    const history = JSON.parse(localStorage.getItem('chatHistory'));
    return history || [];
  } catch (error) {
    console.error('Failed to load chat history', error);
    return [];
  }
};

// Save chat history to local storage
export const saveChatHistory = (messages) => {
  try {
    localStorage.setItem('chatHistory', JSON.stringify(messages));
  } catch (error) {
    console.error('Failed to save chat history', error);
  }
};

// Basic input validation
export const validateMessageInput = (input) => {
  return input && input.trim().length > 0;
};

// Check if the message is appropriate
export const isMessageAppropriate = (message) => {
  // Define a list of inappropriate words
  const inappropriateWords = ['shut up', 'damn'];
  return !inappropriateWords.some((word) => message.toLowerCase().includes(word));
};

const Conversation = require('../models/Conversation');

// Save conversation to the database
const saveConversation = async (userId, language, section, messages) => {
  const conversation = new Conversation({
    user: userId,
    language,
    section,
    messages,
  });
  
  await conversation.save();
  return conversation;
};

// Get conversations for a specific user
const getUserConversations = async (userId) => {
  return await Conversation.find({ user: userId });
};

module.exports = {
  saveConversation,
  getUserConversations,
};

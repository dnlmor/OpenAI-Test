const Conversation = require('../models/Conversation');

// Fetch all saved conversations for a user
const getUserConversations = async (userId) => {
  return await Conversation.find({ user: userId });
};

// Delete a conversation by its ID
const deleteConversationById = async (conversationId) => {
  return await Conversation.findByIdAndDelete(conversationId);
};

module.exports = {
  getUserConversations,
  deleteConversationById,
};

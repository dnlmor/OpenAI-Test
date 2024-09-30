const asyncHandler = require('express-async-handler');
const logger = require('../utils/logger'); 
const Conversation = require('../models/Conversation'); 

const saveConversation = asyncHandler(async (req, res) => {
  const conversationData = req.body;
  const conversation = await Conversation.create(conversationData);
  res.status(201).json(conversation);
});

const getConversations = asyncHandler(async (req, res) => {
  const conversations = await Conversation.find({ userId: req.user.id });
  res.status(200).json(conversations);
});

const downloadConversationPDF = asyncHandler(async (req, res) => {
  // Implementation for downloading the conversation as PDF
  res.status(200).send("Download PDF functionality is not implemented yet.");
});

const deleteConversation = asyncHandler(async (req, res) => {
  try {
    const conversation = await Conversation.findByIdAndDelete(req.params.id);
    if (!conversation) {
      logger.warn('Conversation not found for deletion.', { conversationId: req.params.id });
      return res.status(404).json({ error: 'Conversation not found.' });
    }
    logger.info('Conversation deleted successfully.', { conversationId: req.params.id });
    return res.status(204).send();
  } catch (error) {
    logger.error(`Error deleting conversation: ${error.message}`, { conversationId: req.params.id });
    return res.status(500).json({ error: 'Failed to delete conversation.' });
  }
});

module.exports = {
  saveConversation,
  getConversations,
  downloadConversationPDF,
  deleteConversation,
};

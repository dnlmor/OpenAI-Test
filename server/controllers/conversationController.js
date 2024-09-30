const deleteConversation = asyncHandler(async (req, res) => {
  try {
    const conversation = await Conversation.findByIdAndDelete(req.params.id);
    if (!conversation) {
      logger.warn('Conversation not found for deletion.', { conversationId: req.params.id });
      return res.status(404).json({ error: 'Conversation not found.' });
    }
    logger.info('Conversation deleted successfully.', { conversationId: req.params.id });
    res.status(204).send();
  } catch (error) {
    logger.error(`Error deleting conversation: ${error.message}`, { conversationId: req.params.id });
    res.status(500).json({ error: 'Failed to delete conversation.' });
  }
});

// Export the new controller
module.exports = {
  saveConversation,
  getConversations,
  downloadConversationPDF,
  deleteConversation,
};

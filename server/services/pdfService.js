const { createPDF } = require('../utils/pdfUtils');
const Conversation = require('../models/Conversation');

exports.generatePDF = async (conversationId) => {
  const conversation = await Conversation.findById(conversationId);
  if (!conversation) {
    throw new Error('Conversation not found');
  }
  
  const pdfBuffer = await createPDF(conversation);
  return pdfBuffer;
};

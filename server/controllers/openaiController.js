const { getOpenAIResponse } = require('../utils/openaiHelper');
const Conversation = require('../models/Conversation');

// Get response from OpenAI
const getChatbotResponse = async (req, res) => {
  const { prompt, testType, section } = req.body;

  try {
    const response = await getOpenAIResponse(prompt);
    res.json({ response });
  } catch (error) {
    console.error('OpenAI response error:', error);
    res.status(500).json({ error: 'Failed to get response from OpenAI' });
  }
};

// Save conversation
const saveConversation = async (req, res) => {
  const { userId, messages, testType, section } = req.body;

  try {
    const conversation = new Conversation({ userId, messages, testType, section });
    await conversation.save();
    res.status(201).json({ message: 'Conversation saved!', conversation });
  } catch (error) {
    console.error('Save conversation error:', error);
    res.status(500).json({ error: 'Failed to save conversation' });
  }
};

// Fetch saved conversations
const getSavedConversations = async (req, res) => {
  const { userId } = req.params;

  try {
    const conversations = await Conversation.find({ userId });
    res.status(200).json({ conversations });
  } catch (error) {
    console.error('Fetch conversations error:', error);
    res.status(500).json({ error: 'Failed to fetch conversations' });
  }
};

module.exports = { getChatbotResponse, saveConversation, getSavedConversations };

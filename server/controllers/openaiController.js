const { getOpenAIResponse } = require('../utils/openaiHelper');
const Conversation = require('../models/Conversation');

const getChatbotResponse = async (req, res) => {
  const { prompt, language, section } = req.body;

  try {
    // Ensure all necessary parameters are available
    if (!prompt || !language || !section) {
      return res.status(400).json({ error: 'Prompt, language, and section are required.' });
    }

    // Call the helper function with the prompt, language, and section
    const response = await getOpenAIResponse(prompt, language, section);
    res.json({ response });
  } catch (error) {
    console.error('OpenAI response error:', error);
    res.status(500).json({ error: 'Failed to get response from OpenAI.' });
  }
};

const saveConversation = async (req, res) => {
  const { userId, messages, section, name } = req.body;

  try {
    const conversation = new Conversation({ userId, messages, section, name });
    await conversation.save();
    res.status(201).json({ message: 'Conversation saved!', conversation });
  } catch (error) {
    console.error('Save conversation error:', error);
    res.status(500).json({ error: 'Failed to save conversation.' });
  }
};

const getSavedConversations = async (req, res) => {
  const userId = req.user?.id;

  if (!userId) {
    return res.status(400).json({ error: 'User ID is required.' });
  }

  try {
    const conversations = await Conversation.find({ userId });
    res.status(200).json({ conversations });
  } catch (error) {
    console.error('Fetch conversations error:', error);
    res.status(500).json({ error: 'Failed to fetch conversations.' });
  }
};

module.exports = { getChatbotResponse, saveConversation, getSavedConversations };

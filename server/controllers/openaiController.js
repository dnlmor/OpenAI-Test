const { getOpenAIResponse } = require('../utils/openaiHelper');

const getChatbotResponse = async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await getOpenAIResponse(prompt);
    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get response from OpenAI' });
  }
};

module.exports = { getChatbotResponse };

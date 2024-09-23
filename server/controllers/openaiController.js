const { getOpenAIResponse } = require('../utils/openaiHelper');

const askOpenAI = async (req, res) => {
  const { prompt } = req.body;
  
  try {
    const response = await getOpenAIResponse(prompt);
    res.json({ response });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { askOpenAI };

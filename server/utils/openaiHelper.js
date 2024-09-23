const axios = require('axios');

const openai = axios.create({
  baseURL: 'https://api.openai.com/v1/chat/completions',
  headers: {
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

// Function to get response from OpenAI
const getOpenAIResponse = async (prompt) => {
  try {
    const response = await openai.post('', {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });
    return response.data.choices[0].message.content;
  } catch (error) {
    throw new Error('Error communicating with OpenAI API');
  }
};

module.exports = { getOpenAIResponse };

const axios = require('axios');

const openai = axios.create({
  baseURL: 'https://api.openai.com/v1/chat/completions',
  headers: {
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

const getOpenAIResponse = async (prompt) => {
  const response = await openai.post('', {
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
  });
  
  return response.data.choices[0].message.content;
};

module.exports = { getOpenAIResponse };

const axios = require('axios');

const openai = axios.create({
  baseURL: 'https://api.openai.com/v1/chat/completions',
  headers: {
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

const getOpenAIResponse = async (prompt) => {
  try {
    const response = await openai.post('', {
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
    });
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error fetching OpenAI response:', error);
    throw new Error('Failed to get response from OpenAI');
  }
};

module.exports = { getOpenAIResponse };

const Conversation = require('../models/Conversation');

exports.saveConversation = async (req, res) => {
  const { messages, name } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Messages array is required' });
  }

  try {
    const newConversation = new Conversation({
      name,
      messages,
      createdAt: new Date(),
    });

    await newConversation.save();
    res.status(201).json(newConversation);
  } catch (error) {
    console.error('Error saving conversation:', error);
    res.status(500).json({ error: 'Error saving conversation' });
  }
};

exports.getConversations = async (req, res) => {
  try {
    const conversations = await Conversation.find().sort({ createdAt: -1 });
    res.status(200).json(conversations);
  } catch (error) {
    console.error('Error fetching conversations:', error);
    res.status(500).json({ error: 'Error fetching conversations' });
  }
};

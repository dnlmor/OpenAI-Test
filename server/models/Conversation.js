const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  messages: [{ type: String }],
  testType: { type: String, required: true },
  section: { type: String, required: true },
}, {
  timestamps: true,
});

const Conversation = mongoose.model('Conversation', conversationSchema);
module.exports = Conversation;

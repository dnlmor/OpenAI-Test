const express = require('express');
const { getChatbotResponse, saveConversation, getSavedConversations } = require('../controllers/openaiController');
const authenticate = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/chat', authenticate, getChatbotResponse);
router.post('/save-conversation', authenticate, saveConversation);
router.get('/saved-conversations/:userId', authenticate, getSavedConversations);

module.exports = router;

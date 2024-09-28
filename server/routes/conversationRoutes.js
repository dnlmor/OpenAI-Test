const express = require('express');
const router = express.Router();
const { saveConversation, getConversations } = require('../controllers/conversationController');
const authenticate = require('../middleware/authMiddleware');

router.post('/save-conversation', authenticate, saveConversation);
router.get('/get-conversations', authenticate, getConversations);

module.exports = router;

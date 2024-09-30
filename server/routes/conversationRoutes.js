const express = require('express');
const router = express.Router();
const { saveConversation, getConversations, downloadConversationPDF, deleteConversation } = require('../controllers/conversationController');

router.post('/', saveConversation);
router.get('/', getConversations);
router.get('/:id/download', downloadConversationPDF);
router.delete('/:id', deleteConversation);

module.exports = router;

const express = require('express');
const router = express.Router();
const { getChatbotResponse } = require('../controllers/openaiController');

// POST route for chat
router.post('/chat', getChatbotResponse);

module.exports = router;

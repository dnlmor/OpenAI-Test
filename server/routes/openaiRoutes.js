const express = require('express');
const { askOpenAI } = require('../controllers/openaiController');
const router = express.Router();

router.post('/ask', askOpenAI);

module.exports = router;

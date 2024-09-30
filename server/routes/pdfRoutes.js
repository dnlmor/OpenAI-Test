const express = require('express');
const router = express.Router();
const pdfController = require('../controllers/pdfController');

router.get('/download/:conversationId', pdfController.downloadPDF);

module.exports = router;

const express = require('express');
const { getLanguages, createLanguage } = require('../controllers/languageController');
const router = express.Router();

router.get('/', getLanguages);
router.post('/', createLanguage);

module.exports = router;

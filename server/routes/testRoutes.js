const express = require('express');
const { saveTestResult } = require('../controllers/testController');
const router = express.Router();

router.post('/results', saveTestResult);

module.exports = router;

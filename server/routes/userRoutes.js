const express = require('express');
const { getUserProfile } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Protected route to get user profile
router.route('/user').get(protect, getUserProfile); 

module.exports = router;

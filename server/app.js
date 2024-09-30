const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { errorHandler } = require('./middleware/errorHandler');
const requestLogger = require('./middleware/requestLogger');
const authRoutes = require('./routes/authRoutes');
const openaiRoutes = require('./routes/openaiRoutes');
const conversationRoutes = require('./routes/conversationRoutes');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

// Log incoming requests
app.use(requestLogger); 

// Rate limiting for API requests
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use('/api/', apiLimiter);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/openai', openaiRoutes);
app.use('/api/conversations', conversationRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;

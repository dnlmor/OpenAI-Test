const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const openaiRoutes = require('./routes/openaiRoutes');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

// Connect to the database
connectDB();

// CORS options
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/openai', openaiRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;

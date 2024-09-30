const http = require('http');
const connectDB = require('./config/db');
const app = require('./app');
const logger = require('./utils/logger');

// Load environment variables
require('dotenv').config();

// Connect to MongoDB
connectDB();

// Initialize HTTP server
const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

// Start server
server.listen(PORT, () => {
  logger.info(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode`);
});

// Handle unhandled rejections
process.on('unhandledRejection', (err) => {
  logger.error(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});

// middleware/requestLogger.js
const logger = require('../utils/logger');

const requestLogger = (req, res, next) => {
  logger.info(`Incoming request: ${req.method} ${req.originalUrl}`);
  
  // Capture the original send method to log responses
  const originalSend = res.send.bind(res);
  res.send = (body) => {
    logger.info(`Response: ${res.statusCode} ${body}`);
    return originalSend(body);
  };

  next();
};

module.exports = requestLogger;

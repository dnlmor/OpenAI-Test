const logger = require('../utils/logger');

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message || 'Internal Server Error';

  // Log the error details
  logger.error(`Error: ${message} | Status Code: ${statusCode} | Request URL: ${req.originalUrl} | Request Method: ${req.method}`);

  // Specific error handling
  if (err.name === 'CastError') {
    message = `Resource not found with ID: ${err.value}`;
    statusCode = 404;
  }

  if (err.name === 'ValidationError') {
    message = Object.values(err.errors).map(val => val.message).join(', ');
    statusCode = 400;
  }

  // Sending the error response
  res.status(statusCode).json({
    success: false,
    message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

module.exports = { errorHandler };

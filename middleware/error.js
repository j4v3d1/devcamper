const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  // * Log to console for dev
  console.error(err.stack.red);

  //* Mongoose Bad ObjectID error
  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    const message = `Bootcamp not found with id ${err.value}`;
    error = new ErrorResponse(message, 404);
  }
  //* Mongoose duplicate key error

  if (err.code === 11000) {
    const message = 'Duplicate field value entered';
    error = new ErrorResponse(message, 400);
  }
  //* Mongoose validation error

  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }

  //* Server error

  res.status(error.statusCode || 500).json({
    success: false,
    error: err.message || 'Server Error',
  });
};
module.exports = errorHandler;

class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.success = false;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ApiError;

/**
  {
  success:false,
  statusCode:404,
  message:"Note not found",
  isOperational:true
  }
*/

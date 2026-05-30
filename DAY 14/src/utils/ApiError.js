class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);

    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ApiError;

/**
  Why ApiError?
  -----------------------
  
  Instead of:
  throw new Error("User not found");
  
  We'll use: throw new ApiError(404,"User not found"
  
  =====================
  Much better for APIs.
  =====================

  Example:
  =====================
  throw new ApiError(401,"Invalid Credentials")
  throw new ApiError(403,"Access Denied")
  throw new ApiError(404,"Note Not Found")
 */

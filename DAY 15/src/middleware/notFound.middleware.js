const ApiError = require("../utils/ApiError");

const notFound = (req, res, next) => {
  next(new ApiError(404, `Route ${req.originalUrl} not found`));
};

module.exports = notFound;

/**
  Why?
 ============
  Instead of returning 404 everywhere, we can use this middleware.
  GET /xyz
  
  Now
 ============
 {
  "success": false,
  "message": "Route /xyz not found"
}
 
 */

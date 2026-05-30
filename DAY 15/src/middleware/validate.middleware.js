const ApiError = require("../utils/ApiError");

const validate = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    next(new ApiError(400, error.issues[0].message));
  }
};

module.exports = validate;

/**
Flow
 ==========
    Request
       ↓
    Validation Middleware
       ↓
    Valid ?
       ↓
    Yes → Controller
    
    No → Return 400
 */

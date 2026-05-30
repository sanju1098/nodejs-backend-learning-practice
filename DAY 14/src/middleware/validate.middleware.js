const validate = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);

    next();
  } catch (error) {
    next(new ApiError(401, "Invalid token"));
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

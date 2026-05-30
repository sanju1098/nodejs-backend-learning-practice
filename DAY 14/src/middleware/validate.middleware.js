const validate = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);

    next();
  } catch (error) {
    return res.status(400).json({
      success: false,

      errors: error.issues,
    });
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

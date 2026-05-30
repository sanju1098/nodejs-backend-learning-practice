const errorResponse = (res, statusCode, message) => {
  return res.status(statusCode).json({
    success: false,
    message,
  });
};

module.exports = errorResponse;

/**
 Why?
 ==============

 Instead of repeating:
 res.status(404).json({
    success:false,
    message:"Not found"
});
everywhere.

Use:
============
errorResponse(
 res,
 404,
 "Not found"
);
 */

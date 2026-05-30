const errorMiddleware = (err, req, res, next) => {
  console.error("ERROR:", err.message);
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};

module.exports = errorMiddleware;

/**
  Why?
  =======
  Development:
  {
    "success": false,
    "message": "Note not found",
    "stack": "...."
  }

  Production:
  {
    "success": false,
    "message": "Note not found"
  }
  No stack leak.
 */

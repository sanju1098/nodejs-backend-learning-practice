function sendResponse(res, statusCode, success, message, data = null) {
  res.status(statusCode).json({
    success,
    message,
    data,
  });
}

module.exports = sendResponse;
/** Why This is Useful

Instead of repeating:

res.status(200).json({
  success: true,
  message: "Success",

  everywhere,

you use:

sendResponse(res, 200, true, "Success");

Cleaner and reusable.
}); */

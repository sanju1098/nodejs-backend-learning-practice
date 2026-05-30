const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,

  max: 25, // Limit each IP to 25 requests per `window` (here, per 15 minutes)

  message: "Too many requests, try later",
});

module.exports = limiter;

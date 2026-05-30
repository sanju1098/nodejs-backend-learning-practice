const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,

  max: 20,

  message: "Too many requests. Try again later.",
});

module.exports = limiter;

/**
Why Rate Limiting?
=========================

    Protects from:
    * Brute Force Login
    * Spam Requests
    * API Abuse
    * DDoS Attempts
    
    Example:
    =========
    100 Requests
        ↓
    Allowed

    101st Request
        ↓
    Blocked
 */

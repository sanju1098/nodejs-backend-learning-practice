# Logging & Debugging in Node.js Backend Applications

Logging is one of the most important skills for backend developers. It helps monitor applications, debug issues, track user activity, and identify production failures.

---

# Why Logging Matters

Imagine your API crashes at **2:00 AM**.

A user reports:

> Login is not working.

Without logs:

```text
No clue what happened.
```

With logs:

```text
2026-06-02 02:13:20
POST /auth/login

User:
sanjay@gmail.com

Error:
Password mismatch
```

You immediately know:

- Which API failed
- Which user was affected
- What caused the issue
- When the issue occurred

---

# What is Logging?

Logging is the process of recording important application events.

Examples:

- User Registered
- User Logged In
- Note Created
- Database Connected
- API Failed
- Payment Processed
- External API Called

---

# Types of Logs

## 1. Info Logs

Used for normal application activity.

Examples:

```text
User Registered
User Logged In
Note Created
Database Connected
```

Example:

```js
logger.info("User Logged In");
```

---

## 2. Warning Logs

Used for potential issues that may require attention.

Examples:

```text
Too Many Requests
Invalid Login Attempts
High Memory Usage
```

Example:

```js
logger.warn("Rate Limit Exceeded");
```

---

## 3. Error Logs

Used when application functionality fails.

Examples:

```text
Database Connection Failed
JWT Verification Failed
Payment Failed
```

Example:

```js
logger.error("Database Connection Failed");
```

---

## 4. Debug Logs

Used during development to inspect application behavior.

Examples:

```text
Request Body
Response Data
MongoDB Query
```

Example:

```js
logger.debug(req.body);
```

---

# Why Not Just Use console.log()?

Example:

```js
console.log("User Created");
```

### Problems

- No timestamp
- No log levels
- No filtering
- No file storage
- Difficult to manage
- Not scalable

For small projects it works.

For production applications, use proper logging libraries.

---

# Production Logging

Instead of:

```js
console.log("User Logged In");
```

Use:

```text
[INFO]
User Logged In
```

Instead of:

```js
console.log(error);
```

Use:

```text
[ERROR]
JWT Token Invalid
```

Benefits:

- Structured logs
- Better monitoring
- Easier debugging
- Production-ready

---

# Popular Logging Libraries

## Morgan

Morgan is an HTTP request logger middleware for Express applications.

### Installation

```bash
npm install morgan
```

### Example

```js
const morgan = require("morgan");

app.use(morgan("combined"));
```

### Sample Log

```text
::1 - - [02/Jun/2026:02:13:20 +0000]
"POST /auth/login HTTP/1.1"
200 1234
```

### Best For

- Request Logging
- API Monitoring
- Express Applications

---

## Winston

Winston is a versatile logging library for Node.js.

### Installation

```bash
npm install winston
```

### Example

```js
const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({
      filename: "error.log",
      level: "error",
    }),
    new winston.transports.File({
      filename: "combined.log",
    }),
  ],
});

logger.info("User Logged In");

logger.error("JWT Token Invalid");
```

### Best For

- Application Logging
- Error Tracking
- File-Based Logging
- Production Systems

---

## Pino

Pino is a high-performance JSON logger.

### Installation

```bash
npm install pino
```

### Example

```js
const pino = require("pino");

const logger = pino({
  level: "info",
});

logger.info("User Logged In");

logger.error("JWT Token Invalid");
```

### Best For

- High Traffic APIs
- Microservices
- Performance-Critical Systems

---

# Morgan vs Winston vs Pino

| Feature             | Morgan | Winston | Pino      |
| ------------------- | ------ | ------- | --------- |
| Request Logging     | ✅     | ❌      | ❌        |
| Application Logging | ❌     | ✅      | ✅        |
| File Logging        | ❌     | ✅      | ✅        |
| Performance         | Good   | Good    | Excellent |
| JSON Logs           | ❌     | ✅      | ✅        |
| Production Use      | Medium | High    | High      |

---

# Log Levels

Professional applications organize logs using levels.

| Level | Purpose               | Example                    |
| ----- | --------------------- | -------------------------- |
| Error | Application failure   | Database Connection Failed |
| Warn  | Potential issue       | Rate Limit Exceeded        |
| Info  | Normal activity       | User Logged In             |
| Debug | Development debugging | Request Body               |

---

## Error Logs

Example:

```js
logger.error("Database Connection Failed");
```

Used when:

- APIs fail
- Database is unavailable
- External services fail

---

## Warning Logs

Example:

```js
logger.warn("Too Many Login Attempts");
```

Used when:

- Suspicious activity occurs
- Limits are exceeded
- Something unusual happens

---

## Info Logs

Example:

```js
logger.info("User Registered");
```

Used for:

- Successful operations
- User actions
- System events

---

## Debug Logs

Example:

```js
logger.debug(req.body);
```

Used during:

- Development
- Troubleshooting
- Feature testing

---

# What Should Be Logged?

Always log:

- Server Started
- Database Connected
- Authentication Events
- Authorization Failures
- API Errors
- File Uploads
- Payment Transactions
- External API Calls

---

# What Should NOT Be Logged?

Never log sensitive information.

Examples:

- Passwords
- OTPs
- JWT Secrets
- API Keys
- Credit Card Information
- Banking Information

Bad Example:

```js
logger.info(password);
```

Good Example:

```js
logger.info("User Login Attempt");
```

---

# Debugging APIs

A large part of backend development is debugging.

Example:

```http
POST /notes
```

Response:

```text
500 Internal Server Error
```

### Debugging Process

```text
Check Request
      ↓
Check Logs
      ↓
Check Controller
      ↓
Check Service Layer
      ↓
Check Database
      ↓
Fix Root Cause
```

---

# Debugging Example

Bad Code:

```js
const note = await Note.findById(id);
```

Error:

```text
Cannot read properties of null
```

Better Logging:

```js
logger.error(`Note not found: ${id}`);
```

Now the issue becomes obvious immediately.

---

# Environment-Based Logging

## Development

```text
Info
Warn
Error
Debug
```

---

## Production

Enable:

```text
Info
Warn
Error
```

Disable:

```text
Debug
```

This prevents unnecessary logs and improves performance.

---

# Logging Flow in a Notes Application

```text
Request
   ↓
Morgan Logs Request
   ↓
Controller
   ↓
Service
   ↓
MongoDB
   ↓
Response
   ↓
Winston/Pino Logs Result
```

---

---

# Interview Questions & Answers

## 1. What is logging?

**Answer:**

Logging is the process of recording important application events such as requests, errors, user actions, and system activities. Logs help developers monitor applications and debug issues.

---

## 2. Why do we use logging?

**Answer:**

Logging helps:

- Debug application issues
- Track user activity
- Monitor application health
- Investigate production failures
- Improve observability

---

## 3. What is the difference between Morgan and Winston?

**Answer:**

| Morgan                 | Winston                         |
| ---------------------- | ------------------------------- |
| Request logger         | Application logger              |
| Logs HTTP requests     | Logs business events and errors |
| Middleware for Express | General-purpose logging library |

Morgan is mainly used for API request logging, while Winston is used for application logging.

---

## 4. What should be logged?

**Answer:**

Important events such as:

- Server startup
- Database connections
- Authentication events
- Authorization failures
- API errors
- Payment transactions
- External API calls

---

## 5. What should never be logged?

**Answer:**

Sensitive information should never be logged, including:

- Passwords
- OTPs
- JWT Secrets
- API Keys
- Credit Card Data

---

## 6. What are log levels?

**Answer:**

Log levels categorize logs based on severity.

Common log levels:

- Error
- Warn
- Info
- Debug

They help filter logs efficiently.

---

## 7. What is the difference between Error and Warning logs?

**Answer:**

### Error Log

Indicates a failure in the application.

Example:

```text
Database Connection Failed
```

### Warning Log

Indicates a potential issue but the application is still working.

Example:

```text
Too Many Login Attempts
```

---

## 8. How do logs help in debugging?

**Answer:**

Logs provide visibility into application behavior by showing:

- What happened
- When it happened
- Where it happened
- Why it happened

This makes troubleshooting much faster and more effective.

---

# Key Takeaways

- Logging is essential for backend applications.
- Avoid using only `console.log()` in production.
- Morgan is used for request logging.
- Winston and Pino are used for application logging.
- Use log levels to organize logs.
- Never log sensitive information.
- Good logging significantly improves debugging and monitoring.

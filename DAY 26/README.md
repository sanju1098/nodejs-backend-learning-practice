# Clean Architecture & Project Structure

# Why Do We Need Architecture?

In the beginning, most developers build APIs like this:

```text
Route
 ↓
Controller
 ↓
MongoDB
```

Example:

```js
const User = require("../models/user.model");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
```

Everything exists in one file:

- Request Handling
- Database Queries
- Business Logic
- Error Handling

---

# Problems with This Approach

As the application grows:

```text
10 APIs
50 APIs
100 APIs
```

Problems start appearing:

❌ Huge Controller Files

❌ Duplicate Logic

❌ Difficult Testing

❌ Difficult Maintenance

❌ Difficult Team Collaboration

❌ Difficult Database Migration

---

# Solution: Clean Architecture

Clean Architecture separates responsibilities into layers.

Instead of:

```text
Route
 ↓
Controller
 ↓
Database
```

We use:

```text
Route
 ↓
Controller
 ↓
Service
 ↓
Repository
 ↓
Database
```

Each layer has a single responsibility.

---

# Clean Architecture Flow

```text
Client Request
      ↓
Routes
      ↓
Controllers
      ↓
Services
      ↓
Repositories
      ↓
Database
      ↓
Response
```

---

# Layer 1: Routes

## Responsibility

Routes should only map URLs to controllers.

---

## Example

```js
router.get("/users", userController.getUsers);

router.post("/users", userController.createUser);
```

---

## What Routes Should NOT Do

❌ Database Queries

❌ Business Logic

❌ Validation Logic

❌ Authentication Logic

---

Routes should only be responsible for:

```text
URL Mapping
```

---

# Layer 2: Controllers

## Responsibility

Controllers should:

- Receive Request
- Extract Data
- Call Service
- Send Response

---

## Example

```js
const getUsers = async (req, res) => {
  const users = await userService.getUsers();

  res.status(200).json(users);
};
```

---

## Think of Controller As

```text
Traffic Police
```

Controllers decide where requests should go.

---

## What Controllers Should NOT Do

❌ Database Queries

❌ Password Hashing

❌ Business Calculations

❌ Complex Logic

---

# Layer 3: Services

## Responsibility

This is the most important layer.

Services contain:

```text
Business Logic
```

---

## Examples of Business Logic

- User Registration Rules
- Login Validation
- Payment Validation
- Discount Calculation
- Order Processing
- Email Verification

---

## Example

```js
const registerUser = async (userData) => {
  const existingUser = await userRepository.findByEmail(userData.email);

  if (existingUser) {
    throw new Error("User already exists");
  }

  return await userRepository.create(userData);
};
```

---

## Why Services?

Business rules frequently change.

Example:

Today:

```text
Minimum password length = 8
```

Tomorrow:

```text
Minimum password length = 12
```

Only Service Layer changes.

---

# Layer 4: Repository

## Responsibility

Repository Layer talks directly to the database.

---

## Example

```js
const User = require("../models/user.model");

const findAll = async () => {
  return await User.find();
};

const create = async (data) => {
  return await User.create(data);
};
```

---

## What Repository Should Contain

- MongoDB Queries
- PostgreSQL Queries
- Redis Queries

---

## What Repository Should NOT Contain

❌ Business Logic

❌ Validation Logic

❌ Authentication Logic

---

# Why Repository Layer?

Imagine:

Today:

```text
MongoDB
```

Tomorrow:

```text
PostgreSQL
```

Only Repository Layer changes.

Everything else remains untouched.

---

# Layer 5: Models

## Responsibility

Models define database structure.

---

## Example

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("User", userSchema);
```

---

Models should only contain:

```text
Schema Definition
```

---

# Layer 6: Middleware

## Responsibility

Middleware contains reusable request processing logic.

---

## Common Middleware Examples

### Authentication

```js
const auth = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  next();
};
```

---

### Authorization

```js
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: "Forbidden",
      });
    }

    next();
  };
};
```

---

### Validation

```js
Validate Request Body
```

---

### Logging

```js
Log Every Request
```

---

### Rate Limiting

```js
Prevent Abuse
```

---

# Layer 7: Utilities

## Responsibility

Utilities contain reusable helper functions.

---

## Examples

### JWT Utility

```js
const jwt = require("jsonwebtoken");

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET);
};
```

---

### Password Utility

```js
const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  return bcrypt.hash(password, 10);
};
```

---

### Date Utility

```js
Format Dates
```

---

### Email Utility

```js
Send Emails
```

---

# Production Folder Structure

A common production-ready Node.js project:

```text
src
│
├── config
│   ├── db.js
│
├── controllers
│   ├── auth.controller.js
│   ├── user.controller.js
│   └── note.controller.js
│
├── services
│   ├── auth.service.js
│   ├── user.service.js
│   └── note.service.js
│
├── repositories
│   ├── auth.repository.js
│   ├── user.repository.js
│   └── note.repository.js
│
├── middleware
│   ├── auth.middleware.js
│   ├── error.middleware.js
│   ├── validate.middleware.js
│   └── role.middleware.js
│
├── routes
│   ├── auth.routes.js
│   ├── user.routes.js
│   └── note.routes.js
│
├── models
│   ├── user.model.js
│   └── note.model.js
│
├── utils
│   ├── jwt.util.js
│   ├── password.util.js
│   └── logger.util.js
│
├── validations
│   ├── auth.validation.js
│   └── note.validation.js
│
├── app.js
│
└── server.js
```

---

# Complete Request Flow Example

## API

```http
POST /auth/register
```

---

# Route

```js
router.post("/register", authController.register);
```

---

# Controller

```js
const register = async (req, res) => {
  const user = await authService.register(req.body);

  res.status(201).json(user);
};
```

---

# Service

```js
const register = async (data) => {
  const existingUser = await authRepository.findByEmail(data.email);

  if (existingUser) {
    throw new Error("Email already exists");
  }

  return await authRepository.create(data);
};
```

---

# Repository

```js
const create = async (data) => {
  return await User.create(data);
};
```

---

# Database

```text
MongoDB
```

---

# Full Flow

```text
Request

↓

Route

↓

Controller

↓

Service

↓

Repository

↓

MongoDB

↓

Response
```

---

# Error Handling in Clean Architecture

## Bad Practice

```js
try {
} catch {}
```

inside every controller.

---

## Better Practice

Create:

```js
class AppError
```

and

```js
globalErrorHandler;
```

---

Example:

```js
throw new AppError("User Not Found", 404);
```

Global middleware handles response.

---

# Dependency Flow Rule

Always follow:

```text
Routes
 ↓
Controllers
 ↓
Services
 ↓
Repositories
 ↓
Database
```

---

Never:

```text
Repository
 ↓
Controller
```

or

```text
Database
 ↓
Controller
```

---

# Benefits of Clean Architecture

## Easy Testing

You can test:

```js
authService.register();
```

without running Express.

---

## Easy Maintenance

Business logic exists in one place.

---

## Easy Collaboration

Developer A:

```text
Controllers
```

Developer B:

```text
Services
```

Developer C:

```text
Repositories
```

---

## Easy Database Migration

MongoDB:

```text
Today
```

PostgreSQL:

```text
Tomorrow
```

Only repositories change.

---

## Reusable Logic

Services can be reused by:

- APIs
- Cron Jobs
- Workers
- Queues

---

# Real-World Architectures

Large companies use variations of:

- Layered Architecture
- Clean Architecture
- Hexagonal Architecture
- Onion Architecture

The principles remain similar.

---

# Interview Questions

## What is Clean Architecture?

Separating application responsibilities into layers.

---

## Why use a Service Layer?

To keep business logic separate from controllers.

---

## Why use a Repository Layer?

To isolate database access logic.

---

## What should Controllers do?

Receive requests and return responses.

---

## What should Middleware do?

Handle reusable request processing logic.

---

## Why not put everything in Controllers?

It makes applications difficult to maintain, test, and scale.

---

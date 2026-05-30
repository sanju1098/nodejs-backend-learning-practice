# Advanced Error Handling & Production Patterns

Modern backend applications should never handle errors individually inside every controller.

Instead, they use a centralized error-handling strategy.

---

## Architecture Flow

```text
Request
   ↓
Route
   ↓
Middleware
   ↓
Controller
   ↓
Service
   ↓
Error ?
   ↓
next(error)
   ↓
Global Error Middleware
   ↓
Response
```

---

## Features Covered

- Centralized Error Handling
- Custom Error Classes
- 404 Not Found Middleware
- Async Handler Pattern
- Production-Ready Error Responses
- Cleaner Validation Errors
- Better Debugging Practices

---

## Why Centralized Error Handling?

Instead of writing:

```js
try {
  // logic
} catch (error) {
  res.status(500).json({
    success: false,
    message: error.message,
  });
}
```

inside every controller,

use:

```js
next(error);
```

and let a global error middleware handle all errors.

### Benefits

- Cleaner controllers
- Consistent error responses
- Easier maintenance
- Better scalability

---

## Custom Error Classes

Instead of:

```js
throw new Error("User not found");
```

Use:

```js
throw new ApiError(404, "User not found");
```

### Benefits

- Status code support
- Better error messages
- Consistent API responses

---

## Async Handler Pattern

Instead of:

```js
try {
  // async logic
} catch (error) {
  next(error);
}
```

Use:

```js
asyncHandler(async (req, res) => {
  // async logic
});
```

### Benefits

- Less boilerplate code
- Cleaner controllers
- Automatic error forwarding

---

## 404 Middleware

Handles routes that do not exist.

### Example Request

```http
GET /unknown-route
```

### Example Response

```json
{
  "success": false,
  "message": "Route not found"
}
```

---

## Validation Errors

Validation errors should return meaningful responses.

### Example Response

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Email is required"
    }
  ]
}
```

---

## Production Error Response Format

### Standard Response

```json
{
  "success": false,
  "message": "User not found"
}
```

### Development Response

```json
{
  "success": false,
  "message": "User not found",
  "stack": "..."
}
```

---

## Benefits of Proper Error Handling

- Cleaner Architecture
- Consistent API Responses
- Easier Debugging
- Better Developer Experience
- Improved Maintainability
- Production-Ready Codebase

---

## Request Lifecycle With Error Handling

```text
Client Request
      ↓
Route
      ↓
Middleware
      ↓
Controller
      ↓
Service
      ↓
Database
      ↓
Error Occurs
      ↓
next(error)
      ↓
Global Error Middleware
      ↓
Formatted Response
      ↓
Client
```

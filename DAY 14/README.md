# Authenticated Notes Backend (Production Version)

A production-ready Notes API built with **Node.js**, **Express.js**, **MongoDB**, **Mongoose**, and **JWT Authentication**.

---

## Features

### Authentication

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- User Profile API

### Notes Management

- Create Note
- Get All Notes
- Get Single Note
- Update Note
- Delete Note
- User-Specific Notes

### Advanced Features

- Pagination
- Search
- Sorting
- Request Validation
- Centralized Error Handling
- Async Wrapper
- Custom Error Class

### Security

- JWT Authentication
- Authorization Middleware
- Helmet Security
- CORS Support
- Rate Limiting

### Architecture

- Controllers
- Services
- Routes
- Middleware
- Validators
- Utilities
- Error Handling Layer

---

## Project Structure

```text
src
│
├── config
│   ├── db.js
│   └── index.js
│
├── controllers
│   ├── auth.controller.js
│   └── note.controller.js
│
├── services
│   ├── auth.service.js
│   └── note.service.js
│
├── routes
│   ├── auth.routes.js
│   └── note.routes.js
│
├── middleware
│   ├── auth.middleware.js
│   ├── error.middleware.js
│   ├── validate.middleware.js
│   └── rateLimit.middleware.js
│
├── models
│   ├── user.model.js
│   └── note.model.js
│
├── validators
│   ├── auth.validator.js
│   └── note.validator.js
│
├── utils
│   ├── jwt.util.js
│   ├── ApiError.js
│   └── asyncHandler.js
│
└── app.js

.env
.gitignore
```

---

## What New Things Are We Learning?

### ApiError

Instead of:

```js
throw new Error("User not found");
```

Use:

```js
throw new ApiError(404, "User not found");
```

Benefits:

- Consistent error responses
- Better debugging
- Cleaner code

---

### Async Handler

Instead of writing:

```js
try {
  // logic
} catch (error) {
  // handle error
}
```

inside every controller, use:

```js
asyncHandler(async (req, res) => {
  // logic
});
```

Benefits:

- Less boilerplate code
- Cleaner controllers
- Centralized error handling

---

### Validation

Instead of:

```js
if (!email) {
}
```

Use Zod schemas.

Benefits:

- Cleaner validation
- Reusable schemas
- Better error messages

---

### Pagination

Example:

```http
GET /notes?page=1&limit=5
```

Returns:

```text
First 5 notes
```

---

### Search

Example:

```http
GET /notes?search=jwt
```

Returns notes containing:

```text
jwt
```

---

### Sorting

Ascending:

```http
GET /notes?sort=title
```

Descending:

```http
GET /notes?sort=-createdAt
```

---

## Request Flow

```text
Request
   ↓
Route
   ↓
Validation
   ↓
Controller
   ↓
Service
   ↓
Database
   ↓
Response
```

---

# API Endpoints

## Base URL

```http
http://localhost:5000
```

---

## Authentication APIs

| Method | Endpoint         | Description      |
| ------ | ---------------- | ---------------- |
| POST   | `/auth/register` | Register User    |
| POST   | `/auth/login`    | Login User       |
| GET    | `/auth/profile`  | Get User Profile |

---

### Register User

```http
POST /auth/register
```

Request Body:

```json
{
  "name": "Sanjay",
  "email": "sanjay@gmail.com",
  "password": "123456"
}
```

Authentication Required:

```text
No
```

---

### Login User

```http
POST /auth/login
```

Request Body:

```json
{
  "email": "sanjay@gmail.com",
  "password": "123456"
}
```

Authentication Required:

```text
No
```

---

### Get Profile

```http
GET /auth/profile
```

Headers:

```http
Authorization: Bearer <JWT_TOKEN>
```

Authentication Required:

```text
Yes
```

---

## Notes APIs

All Notes APIs require:

```http
Authorization: Bearer <JWT_TOKEN>
```

---

| Method | Endpoint     | Description     |
| ------ | ------------ | --------------- |
| POST   | `/notes`     | Create Note     |
| GET    | `/notes`     | Get All Notes   |
| GET    | `/notes/:id` | Get Single Note |
| PUT    | `/notes/:id` | Update Note     |
| DELETE | `/notes/:id` | Delete Note     |

---

### Create Note

```http
POST /notes
```

Request Body:

```json
{
  "title": "JWT Authentication",
  "content": "Learning JWT in Node.js",
  "category": "backend"
}
```

---

### Get Notes

```http
GET /notes
```

#### Pagination

```http
GET /notes?page=1&limit=5
```

#### Search

```http
GET /notes?search=jwt
```

#### Sort By Title

```http
GET /notes?sort=title
```

#### Sort By Latest

```http
GET /notes?sort=-createdAt
```

#### Combined Query

```http
GET /notes?page=1&limit=5&search=jwt&sort=-createdAt
```

---

### Get Single Note

```http
GET /notes/:id
```

Example:

```http
GET /notes/6866c12f91f8cabc12345678
```

---

### Update Note

```http
PUT /notes/:id
```

Request Body:

```json
{
  "title": "Updated JWT Authentication",
  "content": "Updated content",
  "category": "security"
}
```

---

### Delete Note

```http
DELETE /notes/:id
```

Example:

```http
DELETE /notes/6866c12f91f8cabc12345678
```

---

## Query Parameters

| Parameter | Description             | Example            |
| --------- | ----------------------- | ------------------ |
| `page`    | Current page number     | `?page=1`          |
| `limit`   | Records per page        | `?limit=5`         |
| `search`  | Search by title/content | `?search=jwt`      |
| `sort`    | Sort ascending          | `?sort=title`      |
| `sort`    | Sort descending         | `?sort=-createdAt` |

---

## Authentication Flow

```text
Register User
      ↓
Login User
      ↓
Receive JWT Token
      ↓
Store Token
      ↓
Send Token In Header

Authorization: Bearer <JWT_TOKEN>

      ↓
Access Protected APIs
```

---

## Project Features Summary

- JWT Authentication
- Protected Routes
- User-Specific Notes
- MongoDB & Mongoose
- Zod Validation
- Pagination
- Search
- Sorting
- Async Handler
- Custom ApiError
- Global Error Handling
- Rate Limiting
- Helmet Security
- CORS Support
- Service Layer Architecture
- Production Folder Structure

# Authorization + Security

Modern backend applications require much more than authentication.

A production-ready backend should include:

```text
Authorization & Security
├── Roles
├── Permissions
├── Admin Routes
├── CORS
├── Helmet
├── Rate Limiting
└── Security Best Practices
```

---

# Features Implemented

This project upgrades the Auth + Notes API with:

- User Roles (`user`, `admin`)
- Admin-Only APIs
- JWT Authentication
- Protected Routes
- User-Specific Notes
- Authorization Checks
- Helmet Security
- CORS Configuration
- Rate Limiting
- Role-Based Middleware
- Permission-Based Middleware

---

# Authentication vs Authorization

This is one of the most common backend interview questions.

## Authentication

Authentication answers:

> Who are you?

Example:

```http
POST /auth/login
```

The system verifies:

- Email
- Password

---

## Authorization

Authorization answers:

> What are you allowed to do?

### User

- Cannot access admin routes
- Cannot manage other users

### Admin

- Can access admin routes
- Can view all users
- Can access dashboard statistics

---

# Install Dependencies

## Application Dependencies

```bash
npm install express mongoose dotenv bcrypt jsonwebtoken
```

---

## Security Dependencies

```bash
npm install cors helmet express-rate-limit
```

---

## Development Dependencies

```bash
npm install -D nodemon
```

---

# Package Overview

| Package              | Purpose                       |
| -------------------- | ----------------------------- |
| `express`            | Backend framework             |
| `mongoose`           | MongoDB integration           |
| `dotenv`             | Environment variables         |
| `bcrypt`             | Password hashing              |
| `jsonwebtoken`       | JWT authentication            |
| `cors`               | Cross-Origin Resource Sharing |
| `helmet`             | Security headers              |
| `express-rate-limit` | API abuse protection          |

---

# Registration Flow

```text
Request
   ↓
Check Existing User
   ↓
Hash Password
   ↓
Store User
   ↓
Return User Data
```

---

# Login Flow

```text
Email
   ↓
Find User
   ↓
Compare Password
   ↓
Generate JWT
   ↓
Return Token
```

---

# API Reference

## Base URL

```http
http://localhost:5000
```

---

# Authentication APIs

## Register User

### Endpoint

```http
POST /auth/register
```

### Full URL

```http
http://localhost:5000/auth/register
```

### Request Body

```json
{
  "name": "Sanjay",
  "email": "sanjay@gmail.com",
  "password": "123456"
}
```

---

## Login User

### Endpoint

```http
POST /auth/login
```

### Full URL

```http
http://localhost:5000/auth/login
```

### Request Body

```json
{
  "email": "sanjay@gmail.com",
  "password": "123456"
}
```

---

## Get Profile

### Endpoint

```http
GET /auth/profile
```

### Full URL

```http
http://localhost:5000/auth/profile
```

### Headers

```http
Authorization: Bearer JWT_TOKEN
```

---

# Notes APIs

All Notes APIs require:

```http
Authorization: Bearer JWT_TOKEN
```

---

## Create Note

### Endpoint

```http
POST /notes
```

### Full URL

```http
http://localhost:5000/notes
```

### Request Body

```json
{
  "title": "Learn JWT",
  "content": "JWT Authentication Concepts",
  "category": "backend"
}
```

---

## Get My Notes

### Endpoint

```http
GET /notes
```

### Full URL

```http
http://localhost:5000/notes
```

---

## Get Single Note

### Endpoint

```http
GET /notes/:id
```

### Example

```http
GET /notes/6866c12f91f8cabc12345678
```

### Full URL

```http
http://localhost:5000/notes/6866c12f91f8cabc12345678
```

---

## Update Note

### Endpoint

```http
PUT /notes/:id
```

### Example

```http
PUT /notes/6866c12f91f8cabc12345678
```

### Request Body

```json
{
  "title": "Updated JWT Notes",
  "content": "Updated content",
  "category": "security"
}
```

---

## Delete Note

### Endpoint

```http
DELETE /notes/:id
```

### Example

```http
DELETE /notes/6866c12f91f8cabc12345678
```

---

# Admin APIs

All Admin APIs require:

```http
Authorization: Bearer JWT_TOKEN
```

And the authenticated user's role must be:

```text
admin
```

---

## Get All Users

### Endpoint

```http
GET /admin/users
```

### Full URL

```http
http://localhost:5000/admin/users
```

---

## Get Dashboard Statistics

### Endpoint

```http
GET /admin/stats
```

### Full URL

```http
http://localhost:5000/admin/stats
```

---

# Security Features

## CORS

Allows controlled cross-origin requests.

```js
app.use(cors());
```

---

## Helmet

Adds secure HTTP headers.

```js
app.use(helmet());
```

---

## Rate Limiting

Protects APIs from abuse and brute-force attacks.

Example:

```js
100 requests per 15 minutes
```

---

# Authorization Flow

```text
User Login
    ↓
JWT Generated
    ↓
Token Sent With Request
    ↓
Authentication Middleware
    ↓
Role Middleware
    ↓
Permission Check
    ↓
Protected Resource Access
```

---

# Best Practices

- Hash passwords using bcrypt
- Never store plain-text passwords
- Use JWT expiration
- Store secrets in `.env`
- Protect admin routes
- Enable CORS properly
- Use Helmet for security headers
- Apply rate limiting
- Validate all incoming requests
- Implement role-based authorization

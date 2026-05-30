# Production-Style Authentication Architecture

## Authentication Routes

```http
POST /auth/register
POST /auth/login
GET  /auth/profile
```

---

## Notes Routes

```http
POST   /notes
GET    /notes
DELETE /notes/:id
```

---

# Features

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- User-Specific Notes
- Authorization Checks
- Production-Style Folder Structure
- Better Error Handling

---

# Install Development Dependency

Install Nodemon for automatic server restarts during development:

```bash
npm install -D nodemon
```

---

# What You Will Learn

- User Authentication
- Password Hashing
- JWT Token Generation
- Protected APIs
- Middleware-Based Authorization
- User Ownership Validation
- Production Backend Architecture
- Error Handling Best Practices

---

# Authentication Flow

```text
User Registers
      ↓
Password Gets Hashed
      ↓
User Stored in Database
      ↓
User Logs In
      ↓
JWT Token Generated
      ↓
Client Stores Token
      ↓
Protected Routes Access
      ↓
Authorization Check
```

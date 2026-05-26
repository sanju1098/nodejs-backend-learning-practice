# Authentication Basics

# Authentication vs Authorization

Authentication and Authorization are two of the most important backend security concepts.

---

# Authentication

Authentication means:

> Who are you?

It verifies the identity of a user.

Examples:

- Login
- Verify email/password
- Token verification

---

# Authorization

Authorization means:

> What are you allowed to access?

It decides what resources or actions a user can access.

Examples:

- Admin routes
- Role-based permissions
- Protected resources

---

# Focus of This Module

Today mainly focuses on:

- Authentication

---

# Important Packages

| Package        | Purpose               |
| -------------- | --------------------- |
| `express`      | Backend framework     |
| `mongoose`     | MongoDB connection    |
| `dotenv`       | Environment variables |
| `bcrypt`       | Password hashing      |
| `jsonwebtoken` | JWT token generation  |

---

# JWT Secret

`JWT_SECRET` is used to:

- Sign JWT tokens
- Verify JWT tokens

Example:

```env
JWT_SECRET=mysecretkey
```

Important:

- Never expose this publicly
- Never commit secrets to GitHub

---

# Understanding bcrypt

## `bcrypt.hash()`

Used to hash passwords before storing in database.

Example:

```js
bcrypt.hash(password, 10);
```

This converts:

```text
mypassword
```

into a secure hashed value.

---

## `bcrypt.compare()`

Used to compare:

- Entered password
- Stored hashed password

Example:

```js
bcrypt.compare(password, hashedPassword);
```

---

# Understanding JWT

## `jwt.sign()`

Used to generate JWT tokens.

Example:

```js
jwt.sign(payload, secretKey);
```

---

# `expiresIn`

Defines token expiration time.

Example:

```js
expiresIn: "1d";
```

Examples:

| Value  | Meaning |
| ------ | ------- |
| `"1h"` | 1 hour  |
| `"1d"` | 1 day   |
| `"7d"` | 7 days  |

---

# Complete Authentication Flow

```text
Register
   ↓
Hash Password
   ↓
Store User
   ↓
Login
   ↓
Verify Password
   ↓
Generate JWT
   ↓
Client Stores Token
   ↓
Protected API Access
```

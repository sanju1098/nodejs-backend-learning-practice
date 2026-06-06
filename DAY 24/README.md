# Testing APIs with Jest & Supertest

Testing is a critical part of backend development. It helps ensure your application behaves as expected and prevents bugs from reaching production.

---

# What is Testing?

Testing is the process of verifying that your code behaves correctly.

### Example

```javascript
function add(a, b) {
  return a + b;
}
```

### Test Case

```javascript
add(2, 3);
```

### Expected Output

```javascript
5;
```

If the function returns:

```javascript
6;
```

The test fails.

---

# Why Testing?

Imagine the following scenario:

```text
Login API Working
        ↓
Code Changes Made
        ↓
Login API Breaks
```

Without tests:

```text
Bug discovered in production
```

With tests:

```text
Tests fail immediately
```

This allows developers to catch issues before deployment.

---

# Types of Testing

## 1. Unit Testing

Unit testing focuses on testing a single function or module in isolation.

### Examples

```javascript
generateToken();
hashPassword();
calculatePrice();
```

### Flow

```text
Function
   ↓
Input
   ↓
Output
```

### Goal

Verify that a function returns the expected result.

---

## 2. Integration Testing

Integration testing verifies that multiple parts of the application work together correctly.

### Example Flow

```text
Route
   ↓
Controller
   ↓
Service
   ↓
Response
```

### Example API

```http
POST /auth/login
```

The entire request lifecycle is tested.

---

# Testing Libraries

The most commonly used testing libraries in Node.js are:

- Jest
- Supertest

---

# Jest

Jest is a JavaScript testing framework.

### Features

- Test Runner
- Assertions
- Mocking
- Code Coverage

### Example

```javascript
test("adds two numbers", () => {
  expect(2 + 3).toBe(5);
});
```

---

# Supertest

Supertest is used for API testing.

It allows you to test API endpoints without using tools like Postman.

### Example

```javascript
request(app).post("/login").send({
  email: "test@gmail.com",
  password: "123456",
});
```

---

# Assertions

Assertions verify that the actual output matches the expected output.

### Example

```javascript
expect(result).toBe(5);
```

If the value is not `5`, the test fails.

---

# Test Coverage

Test coverage measures how much of your application code is covered by tests.

### Benefits

- Identifies untested code
- Improves code quality
- Reduces production bugs
- Increases confidence during refactoring

### Example

```text
80% Coverage
```

Means:

```text
80% of the codebase is covered by tests
```

---

# Testing Flow

```text
Write Code
     ↓
Write Tests
     ↓
Run Tests
     ↓
Verify Results
     ↓
Deploy Confidently
```

---

# Common Use Cases

## Unit Testing

- Utility Functions
- Password Hashing
- JWT Generation
- Price Calculations

## Integration Testing

- Authentication APIs
- CRUD APIs
- Database Operations
- Protected Routes

---

# Interview Questions & Answers

## What is Unit Testing?

**Answer:**

Unit testing verifies that a single function or module behaves correctly in isolation.

---

## What is Integration Testing?

**Answer:**

Integration testing verifies that multiple layers of an application work together correctly, such as routes, controllers, services, and databases.

---

## Why Use Jest?

**Answer:**

Jest is a testing framework that provides assertions, mocking capabilities, test execution, and code coverage reporting.

---

## Why Use Supertest?

**Answer:**

Supertest is used to test HTTP APIs directly from code without needing external tools like Postman.

---

## What is an Assertion?

**Answer:**

An assertion verifies that the actual output matches the expected output.

Example:

```javascript
expect(result).toBe(5);
```

---

## What is Test Coverage?

**Answer:**

Test coverage measures how much of the application's code is executed during testing.

Higher coverage generally indicates better-tested code.

---

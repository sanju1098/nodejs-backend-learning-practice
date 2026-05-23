# Users API with Express.js

## Users API Endpoints

This project includes the following API endpoints:

| Method   | Endpoint     | Description         |
| -------- | ------------ | ------------------- |
| `GET`    | `/users`     | Fetch all users     |
| `POST`   | `/users`     | Create a new user   |
| `DELETE` | `/users/:id` | Delete a user by ID |

---

# PART 1 — What is an API?

API stands for:

> Application Programming Interface

Backend APIs allow the frontend and backend to communicate with each other.

Example:

Frontend sends request:

```http
GET /users
```

Backend responds:

```json
[
  {
    "id": 1,
    "name": "Sanjay"
  }
]
```

---

# PART 2 — What is HTTP?

HTTP stands for:

> HyperText Transfer Protocol

It is used for communication between:

- Client
- Server

---

# Important HTTP Methods

| Method   | Purpose             |
| -------- | ------------------- |
| `GET`    | Fetch data          |
| `POST`   | Create data         |
| `PUT`    | Update full data    |
| `PATCH`  | Update partial data |
| `DELETE` | Delete data         |

---

## Example

```http
GET /users
```

Meaning:

> "Give me all users"

---

# PART 3 — What is Express.js?

[Express.js](https://expressjs.com/) is the most popular backend framework for Node.js.

Without Express.js:

- Routing becomes difficult
- Request handling is verbose
- Middleware management becomes complex

Express simplifies backend development significantly.

---

# PART 4 — Setup Express Project

## Step 1 — Create Project Folder

```bash
mkdir day-3-express
cd day-3-express
```

---

## Step 2 — Initialize Node Project

```bash
npm init -y
```

---

## Step 3 — Install Express

```bash
npm install express
```

---

# Final Project Structure

```bash
day-3-express/
│
├── app.js
├── package.json
└── node_modules/
```

---

# PART 5 — Understanding `req` and `res`

## `req` → Request Object

The request object contains information sent by the client.

Common properties:

- `params`
- `body`
- `query`
- `headers`

Example:

```js
req.params;
req.body;
req.query;
```

---

## `res` → Response Object

Used to send response back to the client.

Example:

```js
res.send("Hello World");
```

or

```js
res.json(users);
```

---

# PART 6 — HTTP Status Codes

HTTP status codes are very important in backend development.

---

# Common Status Codes

| Code  | Meaning      |
| ----- | ------------ |
| `200` | Success      |
| `201` | Created      |
| `400` | Bad Request  |
| `401` | Unauthorized |
| `404` | Not Found    |
| `500` | Server Error |

---

# Example Express API

## app.js

```js
const express = require("express");

const app = express();

app.use(express.json());

const users = [
  { id: 1, name: "Sanjay" },
  { id: 2, name: "Rahul" },
];

// GET Users
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

// POST User
app.post("/users", (req, res) => {
  const newUser = req.body;

  users.push(newUser);

  res.status(201).json({
    message: "User created successfully",
    user: newUser,
  });
});

// DELETE User
app.delete("/users/:id", (req, res) => {
  const userId = Number(req.params.id);

  const filteredUsers = users.filter((user) => user.id !== userId);

  res.status(200).json({
    message: "User deleted successfully",
    users: filteredUsers,
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
```

---

# Run the Server

```bash
node app.js
```

---

# Test APIs

## GET Users

```http
GET http://localhost:5000/users
```

---

## POST User

```http
POST http://localhost:5000/users
```

Request Body:

```json
{
  "id": 3,
  "name": "Amit"
}
```

---

## DELETE User

```http
DELETE http://localhost:5000/users/1
```

# Express.js Practice Tasks Solution

## app.js

```js
const express = require("express");

const app = express();

app.use(express.json());

// ==========================================
// Users Data
// ==========================================

let users = [
  { id: 1, name: "Sanjay" },
  { id: 2, name: "Rahul" },
];

// ==========================================
// Products Data
// ==========================================

let products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mobile" },
];

// ==========================================
// GET ALL USERS
// ==========================================

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

// ==========================================
// GET USER BY ID
// ==========================================

app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id);

  const user = users.find((user) => user.id === userId);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.status(200).json(user);
});

// ==========================================
// CREATE USER
// ==========================================

app.post("/users", (req, res) => {
  const { id, name } = req.body;

  // Validation
  if (!name) {
    return res.status(400).json({
      message: "Name is required",
    });
  }

  const newUser = {
    id,
    name,
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created successfully",
    user: newUser,
  });
});

// ==========================================
// UPDATE USER
// ==========================================

app.put("/users/:id", (req, res) => {
  const userId = Number(req.params.id);

  const { name } = req.body;

  // Validation
  if (!name) {
    return res.status(400).json({
      message: "Name is required",
    });
  }

  const user = users.find((user) => user.id === userId);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  user.name = name;

  res.status(200).json({
    message: "User updated successfully",
    user,
  });
});

// ==========================================
// DELETE USER
// ==========================================

app.delete("/users/:id", (req, res) => {
  const userId = Number(req.params.id);

  const userExists = users.find((user) => user.id === userId);

  if (!userExists) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  users = users.filter((user) => user.id !== userId);

  res.status(200).json({
    message: "User deleted successfully",
    users,
  });
});

// ==========================================
// GET ALL PRODUCTS
// ==========================================

app.get("/products", (req, res) => {
  res.status(200).json(products);
});

// ==========================================
// CREATE PRODUCT
// ==========================================

app.post("/products", (req, res) => {
  const { id, name } = req.body;

  // Validation
  if (!name) {
    return res.status(400).json({
      message: "Product name is required",
    });
  }

  const newProduct = {
    id,
    name,
  };

  products.push(newProduct);

  res.status(201).json({
    message: "Product created successfully",
    product: newProduct,
  });
});

// ==========================================
// DELETE PRODUCT
// ==========================================

app.delete("/products/:id", (req, res) => {
  const productId = Number(req.params.id);

  const productExists = products.find((product) => product.id === productId);

  if (!productExists) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  products = products.filter((product) => product.id !== productId);

  res.status(200).json({
    message: "Product deleted successfully",
    products,
  });
});

// ==========================================
// START SERVER
// ==========================================

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

---

# Install Dependencies

```bash
npm install express
```

---

# Run Server

```bash
node app.js
```

---

# API Endpoints

## Users APIs

| Method | Endpoint     | Description    |
| ------ | ------------ | -------------- |
| GET    | `/users`     | Get all users  |
| GET    | `/users/:id` | Get user by ID |
| POST   | `/users`     | Create user    |
| PUT    | `/users/:id` | Update user    |
| DELETE | `/users/:id` | Delete user    |

---

## Products APIs

| Method | Endpoint        | Description      |
| ------ | --------------- | ---------------- |
| GET    | `/products`     | Get all products |
| POST   | `/products`     | Create product   |
| DELETE | `/products/:id` | Delete product   |

---

# Example Request Bodies

## Create User

```json
{
  "id": 3,
  "name": "Amit"
}
```

---

## Update User

```json
{
  "name": "Kumar"
}
```

---

## Create Product

```json
{
  "id": 3,
  "name": "Keyboard"
}
```

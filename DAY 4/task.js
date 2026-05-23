const express = require("express");

const app = express();

const PORT = 5000;

// Parse JSON request body
app.use(express.json());

// Logger middleware
function logger(req, res, next) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] - ${req.method} ${req.url}`);
  next();
}

app.use(logger);

// Fake Todos Database
let todos = [
  {
    id: 1,
    title: "Learn Node.js",
    completed: false,
    createdAt: new Date().toISOString(),
  },
];

// Fake Users Database
let users = [
  {
    id: 1,
    name: "Sanjay",
    email: "sanjay@gmail.com",
  },
];

// Validate Todo Middleware
function validateTodo(req, res, next) {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({
      success: false,
      message: "Title is required",
    });
  }

  next();
}

// Validate User Middleware
function validateUser(req, res, next) {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: "Name and Email are required",
    });
  }

  next();
}

// ======================================================
// GET All Todos
// API:
// GET http://localhost:5000/todos
//
// Query Filter Example:
// GET http://localhost:5000/todos?completed=true
// ======================================================

app.get("/todos", (req, res) => {
  const { completed } = req.query;

  let filteredTodos = todos;

  if (completed !== undefined) {
    filteredTodos = todos.filter(
      (todo) => todo.completed === (completed === "true"),
    );
  }

  res.status(200).json({
    success: true,
    message: "Todos fetched successfully",
    data: filteredTodos,
  });
});

// ======================================================
// GET Todo By ID
// API:
// GET http://localhost:5000/todos/1
// ======================================================

app.get("/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);

  const todo = todos.find((todo) => todo.id === todoId);

  if (!todo) {
    return res.status(404).json({
      success: false,
      message: "Todo not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Todo fetched successfully",
    data: todo,
  });
});

// ======================================================
// CREATE Todo
// API:
// POST http://localhost:5000/todos
//
// Body:
// {
//   "title": "Learn Express",
//   "completed": false
// }
// ======================================================

app.post("/todos", validateTodo, (req, res) => {
  const { title, completed } = req.body;

  const newTodo = {
    id: todos.length + 1,
    title,
    completed: completed || false,
    createdAt: new Date().toISOString(),
  };

  todos.push(newTodo);

  res.status(201).json({
    success: true,
    message: "Todo created successfully",
    data: newTodo,
  });
});

// ======================================================
// UPDATE Todo
// API:
// PUT http://localhost:5000/todos/1
//
// Body:
// {
//   "title": "Updated Todo",
//   "completed": true
// }
// ======================================================

app.put("/todos/:id", validateTodo, (req, res) => {
  const todoId = parseInt(req.params.id);

  const todo = todos.find((todo) => todo.id === todoId);

  if (!todo) {
    return res.status(404).json({
      success: false,
      message: "Todo not found",
    });
  }

  todo.title = req.body.title;
  todo.completed = req.body.completed;

  res.status(200).json({
    success: true,
    message: "Todo updated successfully",
    data: todo,
  });
});

// ======================================================
// PATCH Todo Completed Status
// API:
// PATCH http://localhost:5000/todos/1
//
// Body:
// {
//   "completed": true
// }
// ======================================================

app.patch("/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);

  const { completed } = req.body;

  const todo = todos.find((todo) => todo.id === todoId);

  if (!todo) {
    return res.status(404).json({
      success: false,
      message: "Todo not found",
    });
  }

  todo.completed = completed;

  res.status(200).json({
    success: true,
    message: "Todo status updated successfully",
    data: todo,
  });
});

// ======================================================
// DELETE Todo
// API:
// DELETE http://localhost:5000/todos/1
// ======================================================

app.delete("/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);

  const todoExists = todos.some((todo) => todo.id === todoId);

  if (!todoExists) {
    return res.status(404).json({
      success: false,
      message: "Todo not found",
    });
  }

  todos = todos.filter((todo) => todo.id !== todoId);

  res.status(200).json({
    success: true,
    message: "Todo deleted successfully",
  });
});

// ======================================================
// GET All Users
// API:
// GET http://localhost:5000/users
// ======================================================

app.get("/users", (req, res) => {
  res.status(200).json({
    success: true,
    data: users,
  });
});

// ======================================================
// GET User By ID
// API:
// GET http://localhost:5000/users/1
// ======================================================

app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  const user = users.find((user) => user.id === userId);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  res.status(200).json({
    success: true,
    data: user,
  });
});

// ======================================================
// CREATE User
// API:
// POST http://localhost:5000/users
//
// Body:
// {
//   "name": "Rahul",
//   "email": "rahul@gmail.com"
// }
// ======================================================

app.post("/users", validateUser, (req, res) => {
  const { name, email } = req.body;

  const newUser = {
    id: users.length + 1,
    name,
    email,
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: newUser,
  });
});

// ======================================================
// UPDATE User
// API:
// PUT http://localhost:5000/users/1
//
// Body:
// {
//   "name": "Updated Name",
//   "email": "updated@gmail.com"
// }
// ======================================================

app.put("/users/:id", validateUser, (req, res) => {
  const userId = parseInt(req.params.id);

  const user = users.find((user) => user.id === userId);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  user.name = req.body.name;
  user.email = req.body.email;

  res.status(200).json({
    success: true,
    message: "User updated successfully",
    data: user,
  });
});

// ======================================================
// DELETE User
// API:
// DELETE http://localhost:5000/users/1
// ======================================================

app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  const userExists = users.some((user) => user.id === userId);

  if (!userExists) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  users = users.filter((user) => user.id !== userId);

  res.status(200).json({
    success: true,
    message: "User deleted successfully",
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

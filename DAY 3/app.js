const express = require("express");

const app = express();

const PORT = 5000;

/*
|--------------------------------------------------------------------------
| Middleware
|--------------------------------------------------------------------------
*/

// Parse incoming JSON
app.use(express.json());

// Logger Middleware
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}

app.use(logger);

/*
|--------------------------------------------------------------------------
| Fake Database
|--------------------------------------------------------------------------
*/

let users = [
  { id: 1, name: "Sanjay" },
  { id: 2, name: "Rahul" },
];

/*
|--------------------------------------------------------------------------
| Basic Routes
|--------------------------------------------------------------------------
*/

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to Express Server");
});

// About Route
app.get("/about", (req, res) => {
  res.send("About Page");
});

/*
|--------------------------------------------------------------------------
| Users APIs
|--------------------------------------------------------------------------
*/

/**
 * GET /users
 * Fetch all users
 */
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

/**
 * GET /users/:id
 * Fetch single user by ID
 */
app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  const user = users.find((user) => user.id === userId);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.status(200).json(user);
});

/**
 * POST /users
 * Create new user
 */
app.post("/users", (req, res) => {
  const newUser = req.body;

  // Validation
  if (!newUser.name) {
    return res.status(400).json({
      message: "Name is required",
    });
  }

  users.push(newUser);

  res.status(201).json({
    message: "User added successfully",
    user: newUser,
  });
});

/**
 * DELETE /users/:id
 * Delete user by ID
 */
app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  const userExists = users.some((user) => user.id === userId);

  if (!userExists) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  users = users.filter((user) => user.id !== userId);

  res.status(200).json({
    message: "User deleted successfully",
  });
});

/*
|--------------------------------------------------------------------------
| Start Server
|--------------------------------------------------------------------------
*/

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const express = require("express");
const app = express();

// Parse JSON request body
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
  // Get ID from URL params
  const userId = Number(req.params.id);

  // Find user
  const user = users.find((user) => user.id === userId);

  // Check if user exists
  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  // Send response
  res.status(200).json(user);
});

// ==========================================
// CREATE USER
// ==========================================

app.post("/users", (req, res) => {
  // Extract data from request body
  const { id, name } = req.body;

  // Validation
  if (!name) {
    return res.status(400).json({
      message: "Name is required",
    });
  }

  // Create new user object
  const newUser = {
    id,
    name,
  };

  // Add user to array
  users.push(newUser);

  // Send response
  res.status(201).json({
    message: "User created successfully",
    user: newUser,
  });
});

// ==========================================
// UPDATE USER
// ==========================================

app.put("/users/:id", (req, res) => {
  // Get user ID from params
  const userId = Number(req.params.id);

  // Get updated name from body
  const { name } = req.body;

  // Validation
  if (!name) {
    return res.status(400).json({
      message: "Name is required",
    });
  }

  // Find user
  const user = users.find((user) => user.id === userId);

  // Check if user exists
  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  // Update user name
  user.name = name;

  // Send response
  res.status(200).json({
    message: "User updated successfully",
    user,
  });
});

// ==========================================
// DELETE USER
// ==========================================

app.delete("/users/:id", (req, res) => {
  // Get user ID from params
  const userId = Number(req.params.id);

  // Check if user exists
  const userExists = users.find((user) => user.id === userId);

  if (!userExists) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  // Remove user from array
  users = users.filter((user) => user.id !== userId);

  // Send response
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
  // Extract product data
  const { id, name } = req.body;

  // Validation
  if (!name) {
    return res.status(400).json({
      message: "Product name is required",
    });
  }

  // Create product object
  const newProduct = {
    id,
    name,
  };

  // Add product
  products.push(newProduct);

  // Send response
  res.status(201).json({
    message: "Product created successfully",
    product: newProduct,
  });
});

// ==========================================
// DELETE PRODUCT
// ==========================================

app.delete("/products/:id", (req, res) => {
  // Get product ID
  const productId = Number(req.params.id);

  // Check if product exists
  const productExists = products.find((product) => product.id === productId);

  if (!productExists) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  // Delete product
  products = products.filter((product) => product.id !== productId);

  // Send response
  res.status(200).json({
    message: "Product deleted successfully",
    products,
  });
});

// ==========================================
// Start Server
// ==========================================

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

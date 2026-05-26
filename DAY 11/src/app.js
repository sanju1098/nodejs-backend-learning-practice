const express = require("express");

const connectDB = require("./config/db");

const config = require("./config");

const authRoutes = require("./routes/auth.routes");

const app = express();

connectDB();

app.use(express.json());

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Authentication API Running");
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

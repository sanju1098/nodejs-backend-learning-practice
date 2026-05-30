const express = require("express");
const connectDB = require("./config/db");
const config = require("./config");
const authRoutes = require("./routes/auth.routes");
const noteRoutes = require("./routes/note.routes");

const app = express();

connectDB();

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/notes", noteRoutes);

app.get("/", (req, res) => {
  res.send("Day 12 Auth API Running");
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

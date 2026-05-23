const express = require("express");

const app = express();

const logger = require("./middleware/logger.middleware");

const todoRoutes = require("./routes/todo.routes");

app.use(express.json());

app.use(logger);

app.use("/todos", todoRoutes);

app.get("/", (req, res) => {
  res.send("Production Backend Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

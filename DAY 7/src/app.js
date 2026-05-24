const express = require("express");

const config = require("./config");

const logger = require("./middleware/logger.middleware");

const noteRoutes = require("./routes/note.routes");

const app = express();

app.use(express.json());

app.use(logger);

app.use("/notes", noteRoutes);

app.get("/", (req, res) => {
  res.send(`${config.appName} Running`);
});

app.listen(config.port, () => {
  console.log(`${config.appName} running on port ${config.port}`);
});

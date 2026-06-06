const express = require("express");
const userRoutes = require("./routes/user.routes");

const app = express();

app.use(express.json());

app.use("/users", userRoutes);

module.exports = app;

/**
Notice:
module.exports = app;
No listen() here.
Supertest needs direct access to app.
*/

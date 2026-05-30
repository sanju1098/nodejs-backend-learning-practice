const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const connectDB = require("./config/db");
const config = require("./config");

const authRoutes = require("./routes/auth.routes");
const noteRoutes = require("./routes/note.routes");

const limiter = require("./middleware/rateLimit.middleware");
const errorMiddleware = require("./middleware/error.middleware");

const app = express();

connectDB();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(limiter);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Day 14 Notes Backend Running",
  });
});

app.use("/auth", authRoutes);
app.use("/notes", noteRoutes);

app.use(errorMiddleware);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

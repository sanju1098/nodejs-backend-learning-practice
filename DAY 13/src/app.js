const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const connectDB = require("./config/db");
const limiter = require("./middleware/rateLimit.middleware");
const authRoutes = require("./routes/auth.routes");
const noteRoutes = require("./routes/note.routes");
const adminRoutes = require("./routes/admin.routes");
const config = require("./config");
const app = express();

connectDB();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(limiter);

app.get("/", (req, res) => {
  res.json({
    message: "Day 13 Auth Security API Running",
  });
});

app.use("/auth", authRoutes);
app.use("/notes", noteRoutes);
app.use("/admin", adminRoutes);
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

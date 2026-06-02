const express = require("express");
const uploadRoutes = require("./routes/upload.routes");

const app = express();

app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "File Upload API Running",
  });
});

app.use("/upload", uploadRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

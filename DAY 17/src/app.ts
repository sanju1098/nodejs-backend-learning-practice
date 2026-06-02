import express from "express";

import userRoutes from "./routes/user.routes";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Prisma MongoDB API Running",
  });
});

app.use("/users", userRoutes);

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});

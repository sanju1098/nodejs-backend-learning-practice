require("dotenv").config();

const express = require("express");

const app = express();

const PORT = process.env.PORT || 4000;
console.log("ENV PORT", process.env.PORT);
console.log("ENV DB_URL", process.env.DB_URL);
console.log("ENV NODE_ENV", process.env.NODE_ENV);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");
const authorize = require("../middleware/role.middleware");
const adminController = require("../controllers/admin.controller");

router.get(
  "/users",
  authMiddleware,
  authorize("admin"),
  adminController.getUsers,
);

router.get(
  "/stats",
  authMiddleware,
  authorize("admin"),
  adminController.getStats,
);

module.exports = router;

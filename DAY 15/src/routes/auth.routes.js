const express = require("express");

const authController = require("../controllers/auth.controller");
const validate = require("../middleware/validate.middleware");
const authMiddleware = require("../middleware/auth.middleware");
const { registerSchema, loginSchema } = require("../validators/auth.validator");

const router = express.Router();

router.post("/register", validate(registerSchema), authController.register);
router.post("/login", validate(loginSchema), authController.login);
router.get("/profile", authMiddleware, authController.profile);

module.exports = router;

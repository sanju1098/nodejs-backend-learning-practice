const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");

const noteController = require("../controllers/note.controller");

router.use(authMiddleware);

router.post("/", noteController.createNote);

router.get("/", noteController.getMyNotes);

router.get("/:id", noteController.getNote);

router.put("/:id", noteController.updateNote);

router.delete("/:id", noteController.deleteNote);

module.exports = router;

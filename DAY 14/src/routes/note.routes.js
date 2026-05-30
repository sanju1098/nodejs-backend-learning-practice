const express = require("express");

const noteController = require("../controllers/note.controller");
const authMiddleware = require("../middleware/auth.middleware");
const validate = require("../middleware/validate.middleware");
const { createNoteSchema } = require("../validators/note.validator");
const router = express.Router();

router.post(
  "/",
  authMiddleware,
  validate(createNoteSchema),
  noteController.createNote,
);
router.get("/", authMiddleware, noteController.getNotes);
router.get("/:id", authMiddleware, noteController.getNote);
router.put(
  "/:id",
  authMiddleware,
  validate(createNoteSchema),
  noteController.updateNote,
);
router.delete("/:id", authMiddleware, noteController.deleteNote);

module.exports = router;

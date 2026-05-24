const express = require("express");
const router = express.Router();

const noteController = require("../controllers/note.controller");

const validateNote = require("../middleware/validate.middleware");

router.get("/", noteController.getNotes);

router.get("/stats", noteController.getNotesStats);

router.get("/:id", noteController.getNote);

router.post("/", validateNote, noteController.createNote);

router.put("/:id", validateNote, noteController.updateNote);

router.patch("/:id", noteController.patchNote);

router.delete("/:id", noteController.deleteNote);

module.exports = router;

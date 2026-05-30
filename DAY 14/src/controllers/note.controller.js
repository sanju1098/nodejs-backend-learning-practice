const noteService = require("../services/note.service");
const asyncHandler = require("../utils/asyncHandler");

const createNote = asyncHandler(async (req, res) => {
  const note = await noteService.createNote(req.body, req.user._id);

  res.status(201).json({
    success: true,
    message: "Note created successfully",
    data: note,
  });
});

const getNotes = asyncHandler(async (req, res) => {
  const notes = await noteService.getNotes(req.user._id, req.query);

  res.status(200).json({
    success: true,
    data: notes,
  });
});

const getNote = asyncHandler(async (req, res) => {
  const note = await noteService.getNoteById(req.params.id, req.user._id);

  res.status(200).json({
    success: true,
    data: note,
  });
});

const updateNote = asyncHandler(async (req, res) => {
  const note = await noteService.updateNote(
    req.params.id,
    req.user._id,
    req.body,
  );

  res.status(200).json({
    success: true,
    message: "Note updated successfully",
    data: note,
  });
});

const deleteNote = asyncHandler(async (req, res) => {
  await noteService.deleteNote(req.params.id, req.user._id);

  res.status(200).json({
    success: true,
    message: "Note deleted successfully",
  });
});

module.exports = {
  createNote,
  getNotes,
  getNote,
  updateNote,
  deleteNote,
};

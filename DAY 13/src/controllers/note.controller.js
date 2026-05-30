const noteService = require("../services/note.service");

const createNote = async (req, res) => {
  try {
    const note = await noteService.createNote(req.body, req.user._id);
    res.status(201).json({
      success: true,
      data: note,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getMyNotes = async (req, res) => {
  const notes = await noteService.getMyNotes(req.user._id);

  res.status(200).json({
    success: true,
    data: notes,
  });
};

const getNote = async (req, res) => {
  const note = await noteService.getNoteById(req.params.id, req.user._id);

  if (!note) {
    return res.status(404).json({
      success: false,
      message: "Note not found",
    });
  }

  res.status(200).json({
    success: true,
    data: note,
  });
};

const updateNote = async (req, res) => {
  const note = await noteService.updateNote(
    req.params.id,
    req.user._id,
    req.body,
  );

  if (!note) {
    return res.status(404).json({
      success: false,
      message: "Note not found",
    });
  }

  res.status(200).json({
    success: true,
    data: note,
  });
};

const deleteNote = async (req, res) => {
  const note = await noteService.deleteNote(req.params.id, req.user._id);

  if (!note) {
    return res.status(404).json({
      success: false,
      message: "Note not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Note deleted successfully",
  });
};

module.exports = {
  createNote,
  getMyNotes,
  getNote,
  updateNote,
  deleteNote,
};

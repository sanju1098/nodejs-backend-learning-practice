const noteService = require("../services/note.service");
const sendResponse = require("../utils/response.util");

async function getNotes(req, res) {
  const page = parseInt(req.query.page) || 1;

  const limit = parseInt(req.query.limit) || 5;

  const category = req.query.category;

  const search = req.query.search;

  const sort = req.query.sort;

  const notes = await noteService.getAllNotes(
    page,
    limit,
    category,
    search,
    sort,
  );

  sendResponse(res, 200, true, "Notes fetched successfully", notes);
}

async function getNote(req, res) {
  const note = await noteService.getNoteById(req.params.id);

  if (!note) {
    return sendResponse(res, 404, false, "Note not found");
  }

  sendResponse(res, 200, true, "Note fetched successfully", note);
}

async function createNote(req, res) {
  const newNote = await noteService.createNote(req.body);

  sendResponse(res, 201, true, "Note created successfully", newNote);
}

async function updateNote(req, res) {
  const updatedNote = await noteService.updateNote(req.params.id, req.body);

  if (!updatedNote) {
    return sendResponse(res, 404, false, "Note not found");
  }

  sendResponse(res, 200, true, "Note updated successfully", updatedNote);
}

async function deleteNote(req, res) {
  const deletedNote = await noteService.deleteNote(req.params.id);

  if (!deletedNote) {
    return sendResponse(res, 404, false, "Note not found");
  }

  sendResponse(res, 200, true, "Note deleted successfully");
}

async function patchNote(req, res) {
  const updatedNote = await noteService.patchNote(req.params.id, req.body);

  if (!updatedNote) {
    return sendResponse(res, 404, false, "Note not found");
  }

  sendResponse(res, 200, true, "Note patched successfully", updatedNote);
}

async function getNotesStats(req, res) {
  const stats = await noteService.getNotesStats();

  sendResponse(res, 200, true, "Notes stats fetched successfully", stats);
}

module.exports = {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
  patchNote,
  getNotesStats,
};

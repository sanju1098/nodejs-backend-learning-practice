const noteService = require("../services/note.service");

const sendResponse = require("../utils/response.util");

const messages = require("../constants/messages");

async function getNotes(req, res) {
  const notes = await noteService.getAllNotes();

  sendResponse(res, 200, true, messages.NOTES_FETCHED, notes);
}

async function getNote(req, res) {
  const note = await noteService.getNoteById(req.params.id);

  if (!note) {
    return sendResponse(res, 404, false, messages.NOTE_NOT_FOUND);
  }

  sendResponse(res, 200, true, messages.NOTE_FETCHED, note);
}

async function createNote(req, res) {
  const newNote = await noteService.createNote(req.body);

  sendResponse(res, 201, true, messages.NOTE_CREATED, newNote);
}

async function updateNote(req, res) {
  const updatedNote = await noteService.updateNote(req.params.id, req.body);

  if (!updatedNote) {
    return sendResponse(res, 404, false, messages.NOTE_NOT_FOUND);
  }

  sendResponse(res, 200, true, messages.NOTE_UPDATED, updatedNote);
}

async function deleteNote(req, res) {
  const deletedNote = await noteService.deleteNote(req.params.id);

  if (!deletedNote) {
    return sendResponse(res, 404, false, messages.NOTE_NOT_FOUND);
  }

  sendResponse(res, 200, true, messages.NOTE_DELETED);
}

module.exports = {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
};

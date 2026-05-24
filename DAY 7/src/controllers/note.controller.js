const noteService = require("../services/note.service");

const sendResponse = require("../utils/response.util");

const messages = require("../constants/messages");

function getNotes(req, res) {
  const notes = noteService.getAllNotes();

  sendResponse(res, 200, true, messages.NOTES_FETCHED, notes);
}

function getNote(req, res) {
  const noteId = parseInt(req.params.id);

  const note = noteService.getNoteById(noteId);

  if (!note) {
    return sendResponse(res, 404, false, messages.NOTE_NOT_FOUND);
  }

  sendResponse(res, 200, true, messages.NOTE_FETCHED, note);
}

function createNote(req, res) {
  const newNote = noteService.createNote(req.body);

  sendResponse(res, 201, true, messages.NOTE_CREATED, newNote);
}

function updateNote(req, res) {
  const noteId = parseInt(req.params.id);

  const updatedNote = noteService.updateNote(noteId, req.body);

  if (!updatedNote) {
    return sendResponse(res, 404, false, messages.NOTE_NOT_FOUND);
  }

  sendResponse(res, 200, true, messages.NOTE_UPDATED, updatedNote);
}

function deleteNote(req, res) {
  const noteId = parseInt(req.params.id);

  const note = noteService.getNoteById(noteId);
  if (!note) {
    return sendResponse(res, 404, false, messages.NOTE_NOT_FOUND);
  }

  noteService.deleteNote(noteId);

  sendResponse(res, 200, true, messages.NOTE_DELETED);
}

module.exports = {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
};

const Note = require("../models/note.model");

async function getAllNotes() {
  return await Note.find();
}

async function getNoteById(id) {
  return await Note.findById(id);
}

async function createNote(noteData) {
  return await Note.create(noteData);
}

async function updateNote(id, updatedData) {
  return await Note.findByIdAndUpdate(id, updatedData, {
    new: true,
  });
}

async function deleteNote(id) {
  return await Note.findByIdAndDelete(id);
}

module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
};

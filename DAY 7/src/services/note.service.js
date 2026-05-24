let notes = require("../data/notes");

function getAllNotes() {
  return notes;
}

function getNoteById(id) {
  return notes.find((note) => note.id === id);
}

function createNote(noteData) {
  const newNote = {
    id: notes.length + 1,
    ...noteData,
    createdAt: new Date(),
  };

  notes.push(newNote);

  return newNote;
}

function updateNote(id, updatedData) {
  const note = notes.find((note) => note.id === id);

  if (!note) {
    return null;
  }

  note.title = updatedData.title;
  note.content = updatedData.content;

  return note;
}

function deleteNote(id) {
  notes = notes.filter((note) => note.id !== id);

  return notes;
}

module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
};

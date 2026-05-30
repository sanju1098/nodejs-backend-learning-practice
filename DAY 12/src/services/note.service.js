const Note = require("../models/note.model");

const createNote = async (noteData, userId) => {
  return await Note.create({
    ...noteData,
    user: userId,
  });
};

const getMyNotes = async (userId) => {
  return await Note.find({
    user: userId,
  }).sort({
    createdAt: -1,
  });
};

const getNoteById = async (noteId, userId) => {
  return await Note.findOne({
    _id: noteId,
    user: userId,
  });
};

const updateNote = async (noteId, userId, updateData) => {
  return await Note.findOneAndUpdate(
    {
      _id: noteId,
      user: userId,
    },
    updateData,
    {
      new: true,
    },
  );
};

const deleteNote = async (noteId, userId) => {
  return await Note.findOneAndDelete({
    _id: noteId,
    user: userId,
  });
};

module.exports = {
  createNote,
  getMyNotes,
  getNoteById,
  updateNote,
  deleteNote,
};

const Note = require("../models/note.model");

const ApiError = require("../utils/ApiError");

const createNote = async (noteData, userId) => {
  return await Note.create({
    ...noteData,
    user: userId,
  });
};

const getNotes = async (userId, query) => {
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 5;
  const skip = (page - 1) * limit;
  const search = query.search || "";
  const sort = query.sort || "-createdAt";
  const filter = {
    user: userId,
    title: {
      $regex: search,
      $options: "i",
    },
  };

  const notes = await Note.find(filter).sort(sort).skip(skip).limit(limit);

  const total = await Note.countDocuments(filter);

  return {
    notes,
    total,
    page,
    totalPages: Math.ceil(total / limit),
  };
};

const getNoteById = async (noteId, userId) => {
  const note = await Note.findOne({
    _id: noteId,
    user: userId,
  });

  if (!note) {
    throw new ApiError(404, "Note not found");
  }

  return note;
};

const updateNote = async (noteId, userId, updateData) => {
  const note = await Note.findOneAndUpdate(
    {
      _id: noteId,
      user: userId,
    },
    updateData,
    {
      new: true,
    },
  );

  if (!note) {
    throw new ApiError(404, "Note not found");
  }

  return note;
};

const deleteNote = async (noteId, userId) => {
  const note = await Note.findOneAndDelete({
    _id: noteId,
    user: userId,
  });

  if (!note) {
    throw new ApiError(404, "Note not found");
  }

  return note;
};

module.exports = {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote,
};

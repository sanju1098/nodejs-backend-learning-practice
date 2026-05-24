const Note = require("../models/note.model");

async function getAllNotes(page, limit, category, search, sort) {
  const skip = (page - 1) * limit;

  const filter = {};

  if (category) {
    filter.category = category;
  }

  // if (search) {
  //   filter.title = {
  //     $regex: search,
  //     $options: "i",
  //   };
  // }

  // TASK 1 - Search in Title + Content
  if (search) {
    filter.$or = [
      {
        title: {
          $regex: search,
          $options: "i",
        },
      },

      {
        content: {
          $regex: search,
          $options: "i",
        },
      },
    ];
  }

  let sortOption = {};

  // if (sort === "latest") {
  //   sortOption.createdAt = -1;
  // }

  // TASK 2 - Sort by Latest + Oldest + Title
  if (sort === "latest") {
    sortOption.createdAt = -1;
  } else if (sort === "oldest") {
    sortOption.createdAt = 1;
  } else if (sort === "title") {
    sortOption.title = 1;
  }

  if (sort === "oldest") {
    sortOption.createdAt = 1;
  }

  const notes = await Note.find(filter)
    .sort(sortOption)
    .skip(skip)
    .limit(limit);

  const total = await Note.countDocuments(filter);

  return {
    total,
    page,
    limit,
    data: notes,
  };
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

// TASK 3 - Add PATCH /notes/:id/like endpoint to increment likes count of a note
async function patchNote(id, updatedData) {
  return await Note.findByIdAndUpdate(id, updatedData, {
    new: true,
  });
}

// TASK 4 - Add Aggregation API
async function getNotesStats() {
  return await Note.aggregate([
    {
      $group: {
        _id: "$category",

        total: {
          $sum: 1,
        },
      },
    },
  ]);
}

module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
  patchNote,
  getNotesStats,
};

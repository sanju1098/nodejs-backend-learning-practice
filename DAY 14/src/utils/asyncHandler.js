const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = asyncHandler;

/**
 Why Async Handler?
-----------------------

Without it:
try { } catch(error) { }
inside every controller.

Example:
const getNotes = asyncHandler(
  async (req, res) => {
    const notes =
      await Note.find();

    res.json(notes);
  }
);

If an error occurs:

Thrown
   ↓
next(error)
   ↓
Global Error Handler

Automatically.
 */

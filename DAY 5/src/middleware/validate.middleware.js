function validateTodo(req, res, next) {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({
      success: false,
      message: "Title is required",
    });
  }

  next();
}

module.exports = validateTodo;

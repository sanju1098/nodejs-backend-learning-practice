const users = [];

const getUsers = (req, res) => {
  res.json(users);
};

const createUser = (req, res) => {
  const { name } = req.body;
  users.push({ name });
  res.status(201).json({
    message: "User Created",
  });
};

module.exports = {
  getUsers,
  createUser,
};

const User = require("../models/user.model");

const getAllUsers = async () => {
  return await User.find().select("-password");
};

const getUserCount = async () => {
  return await User.countDocuments();
};

module.exports = {
  getAllUsers,
  getUserCount,
};

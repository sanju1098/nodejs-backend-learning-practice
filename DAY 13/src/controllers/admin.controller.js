const adminService = require("../services/admin.service");

const getUsers = async (req, res) => {
  const users = await adminService.getAllUsers();

  res.status(200).json({
    success: true,
    data: users,
  });
};

const getStats = async (req, res) => {
  const totalUsers = await adminService.getUserCount();

  res.status(200).json({
    success: true,
    data: {
      totalUsers,
    },
  });
};

module.exports = {
  getUsers,
  getStats,
};

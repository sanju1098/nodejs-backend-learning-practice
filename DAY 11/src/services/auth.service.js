const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const config = require("../config");

async function registerUser(userData) {
  const existingUser = await User.findOne({
    email: userData.email,
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(userData.password, 10);

  const user = await User.create({
    name: userData.name,

    email: userData.email,

    password: hashedPassword,
  });

  return user;
}

async function loginUser(email, password) {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    config.jwtSecret,
    {
      expiresIn: "1d",
    },
  );

  return {
    token,
    user,
  };
}

module.exports = {
  registerUser,
  loginUser,
};

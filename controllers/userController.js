const User = require("../models/userModel");

// @desc Get all users
const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

const createUser = async (req, res) => {
  const { name, email, age } = req.body;
  const user = new User({ name, email, age });
  await user.save();
  res.status(201).json(user);
};

module.exports = {
  getUsers,
  createUser,
};

const User = require("../models/userModel");

// @desc    Get all users
const getUsers = async (req, res) => {
  const users = await User.find().lean();
  res.json(users);
};

// @desc    Get a single user
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: "Invalid ID" });
  }
};

// @desc    Create user
const createUser = async (req, res) => {
  const { name, email, age } = req.body;
  const user = new User({ name, email, age });
  await user.save();
  res.status(201).json(user);
};

// @desc    Delete user
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted" });
  } catch (error) {
    res.status(400).json({ message: "Invalid ID" });
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  deleteUser,
};

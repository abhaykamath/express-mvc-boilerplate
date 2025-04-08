const express = require("express");
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", getUsers); // GET All users
router.get("/:id", getUser); // GET a single user by ID
router.post("/", createUser); // CREATE a single user
router.put("/:id", updateUser); // UPDATE a single user
router.delete("/:id", deleteUser); // DELETE a single user by ID

module.exports = router;

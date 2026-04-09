const User = require("../models/User");

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.toggleUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  user.active = !user.active;
  await user.save();
  res.json(user);
};
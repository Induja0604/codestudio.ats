const Requirement = require("../models/Requirement");

exports.getAll = async (req, res) => {
  const data = await Requirement.find();
  res.json(data);
};

exports.create = async (req, res) => {
  const reqData = await Requirement.create(req.body);
  res.json(reqData);
};
const tasksModel = require('../models/tasksModel');

const getAll = async (req, res) => {
  const tasks = await tasksModel.getAll();

  return res.status(200).json(tasks);
}

module.exports = {
  getAll
}
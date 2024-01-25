const tasksModel = require('../models/tasksModel');

class TasksController {
  async getAll(req, res) {
    try {
      const [tasks] = await tasksModel.getAll();
      return res.status(200).json(tasks);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}

module.exports = new TasksController();
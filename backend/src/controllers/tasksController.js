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

  async create(req, res) {
    try {
      const { task } = req.body;

      if (!task) return res.status(400).json({ message: 'Task is required' });

      const trimmedTask = task.trim();

      if (trimmedTask === '') return res.status(400).json({ message: 'Task cannot be empty' });


      const taskData = {
        task: trimmedTask,
        status: 'pending',
        created_at: new Date(Date.now()).toUTCString()
      };

      const registered = await tasksModel.createTask(taskData);

      if (!registered) return res.status(500).json({ message: 'Internal server error' });

      return res.status(201).json({ message: 'Task registered successfully' });

    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async update(req, res) {
    try {
      const id_task = req.params.id;
      const { task } = req.body;

      if (!id_task) return res.status(404).json({ message: 'Invalid task id' });
      if (!task) return res.status(400).json({ message: 'Task is required' });

      const trimmedTask = task.trim();

      if (trimmedTask === '') return res.status(400).json({ message: 'Task cannot be empty' });

      const updatedTask = await tasksModel.updateTask({ id_task, trimmedTask });

      if (!updatedTask) return res.status(400).json({ message: 'Task update failed' });

      return res.status(200).json({ message: 'Task updated successfully' });

    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

module.exports = new TasksController();
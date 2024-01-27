const connection = require('./connection');

class TasksModel {
  async getAll() {
    const tasks = await connection.execute('SELECT * FROM tasks');
    return tasks;
  }

  async createTask(taskData) {
    const { task, status, created_at } = taskData;
    const query = 'INSERT INTO tasks (task, status, created_at) VALUES (?, ?, ?)';
    const [createdTask] = await connection.execute(query, [task, status, created_at]);

    return { insertId: createdTask.insertId };
  }

  async updateTask(taskData) {
    const { id_task, trimmedTask } = taskData;
    const query = `
      UPDATE tasks
      SET task = ?
      WHERE id = ?
    `;

    try {
      const [result] = await connection.execute(query, [trimmedTask, id_task]);
      const updateSuccessful = result.affectedRows > 0;

      return updateSuccessful;
    } catch (error) {
      console.error('Error updating task:', error);
      return false;
    }
  }

  async deleteTask(idTask) {
    try {
      const query = 'DELETE FROM tasks WHERE id = ?';
      const [result] = await connection.execute(query, [idTask]);

      const taskDeleted = result.affectedRows > 0;

      return taskDeleted;
    } catch (error) {
      console.error('Error deleting task:', error);
      return false;
    }
  }
}

module.exports = new TasksModel();
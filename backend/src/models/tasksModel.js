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
}

module.exports = new TasksModel();
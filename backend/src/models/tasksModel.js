const connection = require('./connection');

class TasksModel {
  async getAll() {
    const tasks = await connection.execute('SELECT * FROM tasks');
    return tasks;
  }
}

module.exports = new TasksModel();
const connection = require('./connection');

const getAll = async () => {
  const tasks = await connection.execute('SELECT * FROM todolist_database');
  return tasks;
};

module.exports = {
  getAll
};
const getTasks = () => {
  let url = 'http://localhost:3333/tasks';

  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => mountTasks(data))
    .catch(err => console.log(err));
}

const mountTasks = (tasks) => {
  const tasksContainer = document.querySelector('.tasks-list');
  tasksContainer.innerHTML = '';

  const taskElements = tasks.map(createTaskElement);
  taskElements.forEach(taskItem => tasksContainer.appendChild(taskItem));
};

const createTaskElement = (task) => {
  const {
    id,
    task: content,
    status,
    created_at
  } = task;

  const dateObject = new Date(created_at);
  const formattedDate = `${dateObject.toLocaleDateString()}`;

  const taskItem = document.createElement('li');
  taskItem.innerHTML = `
    <p class="task-content">${content}</p>

    <div class="task-buttons">
      <span class="task-date">${formattedDate}</span>

      <div>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      </div>
    </div>
  `;

  return taskItem;
};

getTasks();
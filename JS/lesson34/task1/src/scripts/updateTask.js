import { renderTasks } from './render.js';
// import { getItem, setItem } from './storage.js';
import { updateTask, getTasksList } from './tasksGateway.js';

export const taskComplete = event => {
  const isCheckbox = event.target.classList.contains('list-item__checkbox');
  if (!isCheckbox) {
    return;
  }

  let tasksList;
  getTasksList().then(tasks => {
    tasksList = tasks;
  });
  console.log(tasksList);
  const taskId = event.target.dataset.id;
  const text = tasksList.find(task => {
    console.log(task);
  });
  console.log(text);
  console.log(taskId);
  const done = event.target.checked;

  const updatedTask = {
    text,
    done,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then(newTasks => {
      // setItem('tasksList', newTasks);
      console.log(newTasks);
      // renderTasks();
    });
};

// 1. Prepare data
// 2. Update data in db
// 3. Read new data from server
// 4. Save new data to front-end storage;
// 5. Update UI based on new data
// getItem('tasksList')

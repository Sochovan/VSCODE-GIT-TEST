import { initTodoListHundlers } from './todoList.js';
import { renderTasks } from './render.js';
import { getTasksList } from './tasksGateway.js';
// import { setItem } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then(tasksList => {
    // setItem('taskList', tasksList);
    renderTasks(tasksList);
    console.log(tasksList);
  });
  // renderTasks();
  initTodoListHundlers();
});
const onStorageChange = e => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};
window.addEventListener('storage', onStorageChange);

// 1.Get data from server
// 2.Save data to front-end storage

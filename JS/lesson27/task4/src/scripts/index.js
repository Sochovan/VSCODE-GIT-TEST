import { renderTasks } from './render.js';
import { initTodoListHundlers } from './todoList.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initTodoListHundlers();
});

const onStorageChange = e => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};
window.addEventListener('storage', onStorageChange);

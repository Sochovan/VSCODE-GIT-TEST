import { renderTasks } from './render.js';
// import { getItem, setItem } from './storage.js';
import { createTask, getTasksList } from './tasksGateway.js';

export const createElem = () => {
  const input = document.querySelector('.task-input');
  const text = input.value;
  if (text === '') {
    return;
  }
  input.value = '';

  const newTaskLi = {
    text,
    done: false,
  };

  createTask(newTaskLi)
    .then(() => getTasksList())
    .then(newTasks => {
      // setItem('tasksList', newTasks);
      // renderTasks();
    });

  renderTasks();
};

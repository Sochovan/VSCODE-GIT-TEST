import { taskComplete } from './updateTask';
import { createTask } from './createTask';

export const initTodoListHundlers = () => {
  const buttonElem = document.querySelector('.create-task-btn');
  buttonElem.addEventListener('click', createTask);
  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', taskComplete);
};

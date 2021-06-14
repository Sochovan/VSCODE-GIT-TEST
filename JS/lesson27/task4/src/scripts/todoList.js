import { taskComplete } from './updateTask';
import { createElem } from './createTask';

export const initTodoListHundlers = () => {
  const buttonElem = document.querySelector('.create-task-btn');
  buttonElem.addEventListener('click', createElem);
  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', taskComplete);
};

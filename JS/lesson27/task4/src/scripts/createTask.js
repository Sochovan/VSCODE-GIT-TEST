import { getItem, setItem } from './storage';
import { renderTasks } from './render.js';

export const createElem = () => {
  const input = document.querySelector('.task-input');
  const text = input.value;
  if (!text) {
    return;
  }
  input.value = '';
  const tasks = getItem('tasksList') || [];

  const newTasks = tasks.concat({
    text: input,
    done: false,
    id: Math.random(),
  });

  setItem('tasksList', newTasks);

  renderTasks();
};

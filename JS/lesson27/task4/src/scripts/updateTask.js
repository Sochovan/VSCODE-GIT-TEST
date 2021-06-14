import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';

export const taskComplete = event => {
  const tasksList = getItem('taskslist') || [];
  const newTasksList = tasksList.map(task => {
    const isId = event.target.dataset.id;
    if (task.id === +isId) {
      const done = event.target.checked;
      return {
        ...task,
        done,
      };
    }
    return task;
  });

  setItem('tasksList', newTasksList);

  renderTasks();
};

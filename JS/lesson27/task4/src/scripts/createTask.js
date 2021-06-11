const button = document.querySelector('.create-task-btn');

const createElem = () => {
  if (input.value === '') {
    return;
  }

  tasks.push({ text: input.value, done: false, id: Math.random() });
  renderTasks(tasks);
  input.value = '';
};

button.addEventListener('click', createElem);

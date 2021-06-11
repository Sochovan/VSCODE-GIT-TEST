const todoList = document.querySelector('ul');

const taskComplete = event => {
  const isId = event.target.dataset.id;
  console.log(isId);

  const choseTask = tasks.find(elem => elem.id === +isId);

  choseTask.done = !choseTask.done;

  renderTasks(tasks);
};

todoList.addEventListener('click', taskComplete);

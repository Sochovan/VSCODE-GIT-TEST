const listElem = document.querySelector('.list');

const tasks = [
  { text: 'Buy milk', done: false, id: Math.random() },
  { text: 'Pick up Tom from airport', done: false, id: Math.random() },
  { text: 'Visit party', done: false, id: Math.random() },
  { text: 'Visit doctor', done: true, id: Math.random() },
  { text: 'Buy meat', done: true, id: Math.random() },
];

const button = document.querySelector('.create-task-btn');
const input = document.querySelector('.task-input');
const todoList = document.querySelector('ul');

const createElem = () => {
  if (input.value === '') {
    return;
  }

  tasks.push({ text: input.value, done: false, id: Math.random() });
  renderTasks(tasks);
  input.value = '';
};

button.addEventListener('click', createElem);

const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      checkbox.dataset.id = id;
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });
  listElem.innerHTML = '';
  listElem.append(...tasksElems);
};

const completeTask = event => {
  const isCheckbox = event.target.classList.contains('.list__item-checkbox');
  if (!isCheckbox) {
    return;
  }

  const taskComplete = tasks.forEach(elem => {
    if (elem.id === event.target.dataset.id) {
      elem.classList.add('list__item_done');
    } else {
      elem.classList.remove('list__item_done');
    }
  });
};

input.addEventListener('click', completeTask);

renderTasks(tasks);

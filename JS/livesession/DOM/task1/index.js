const listElem = document.querySelector('.list');

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];
const button = document.querySelector('.create-task-btn');
const input = document.querySelector('.task-input');
const todoList = document.querySelector('ul');

const renderTasks = tasksList => {
  listElem.innerHTML = '';
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }, index) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', index);
      console.log(tasks[index]);
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};
// input: obj
// output: undefined

// algo
// 1.get info;
// 2.modify data;
// 3.re-render - заново отрисует;

function onCreateTask() {
  if (input.value === '') {
    return;
  }
  tasks.push({ text: input.value, done: false, id: Math.random() });
  renderTasks(tasks);
  input.value = '';
}
const createBtnEl = document.querySelector('.create-task-btn');

createBtnEl.addEventListener('click', onCreateTask);

// input: obj
// output: undefined

function onUpdateTask(event) {
  if (!event.target.classList.contains('list__item-checkbox')) {
    return;
  }
  const index = event.target.dataset.id;

  tasks[index].done = !tasks[index].done;
  renderTasks(tasks);
}
listElem.addEventListener('click', onUpdateTask);

renderTasks(tasks);

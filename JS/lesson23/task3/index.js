// const img = document.querySelector('img');

// document.addEventListener('DOMContentLoaded', () => {
//   console.log(`img: ${img.offsetWidth} x ${img.offsetHeight}`); //чтобы отрисовался DOM;
// });

// window.addEventListener('load', () => {
//   console.log(`img: ${img.offsetWidth} x ${img.offsetHeight}`); // чтобы загрузились все ресурсы (например, картинки)
// });

// window.addEventListener('beforeunload', e => {
//   e.returnValue = ''; // перед уходом со страницы переспрашиваем
// });

// window.addEventListener('unload', () => {
//   console.log('Page left'); // отправка аналитики перед закрытием страницы
// });

const listElem = document.querySelector('.list');
const button = document.querySelector('.create-task-btn');
const input = document.querySelector('.task-input');

const tasks = [
  { text: 'Buy milk', done: true, id: Math.random() },
  { text: 'Pick up Tom from airport', done: false, id: Math.random() },
  { text: 'Visit party', done: false, id: Math.random() },
  { text: 'Visit doctor', done: false, id: Math.random() },
  { text: 'Buy meat', done: true, id: Math.random() },
];
const pushButton = () => {
  if (input.value === '') {
    return;
  }
  tasks.push({ text: input.value, done: false });
  console.log(tasks);

  input.value = '';
  tasks.sort((a, b) => a.done - b.done);
  renderTasks(tasks);
};

button.addEventListener('click', pushButton);

function renderTasks(tasksList) {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.dataset.id = id;
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      const changeCheckbox = event => {
        const isCheckbox = event.target.classList.contains('.list__item-checkbox');
        if (!isCheckbox) {
          return;
          e;
        }

        // if (checkbox.checked) {
        //   listItemElem.classList.add('list__item_done');
        // } else {
        //   listItemElem.classList.remove('list__item_done');
        // }
      };
      checkbox.addEventListener('change', changeCheckbox);

      listItemElem.append(checkbox, text);

      return listItemElem;
    });
  listElem.innerHTML = '';

  listElem.append(...tasksElems);
}

renderTasks(tasks);

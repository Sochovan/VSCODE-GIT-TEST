// const tasks = [
//   { text: 'Buy milk', done: false, id: Math.random() },
//   { text: 'Pick up Tom from airport', done: false, id: Math.random() },
//   { text: 'Visit party', done: false, id: Math.random() },
//   { text: 'Visit doctor', done: true, id: Math.random() },
//   { text: 'Buy meat', done: true, id: Math.random() },
// ];
const listElem = document.querySelector('.list');

const input = document.querySelector('.task-input');


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



renderTasks(tasks);

import { createElem } from './createTask.js';
// import { getItem } from './storage.js';

export const renderTasks = tasksList => {
  const listElem = document.querySelector('.list');

  listElem.innerHTML = '';
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item', 'list-item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list-item__checkbox');
      checkbox.dataset.id = id;
      const textElem = document.createElement('span');
      if (done) {
        listItemElem.classList.add('list-item_done');
        textElem.classList.add('list-item__text');
      }

      textElem.textContent = text;

      const deleteBtnElem = document.createElement('button');
      deleteBtnElem.classList.add('list-item__delete-btn');

      listItemElem.append(checkbox, textElem, deleteBtnElem);
      return listItemElem;
    });
  listElem.append(...tasksElems);
};

// getItem('tasksList') ||

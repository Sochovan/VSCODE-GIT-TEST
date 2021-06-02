// DOM - document object model - это дерево объектов, которое точно отображает структуру страницы
// DOM дерево
// Виды узлов DOM дерева: простой текст, элемент( теги html - p,h1 и т.д.), комментарии. Они все наследуют объект Node, а он объект EventTarget
//Свойство DOM узла - это свойство объекта
// Могут быть родительские узлы, соседние и дочерние

// обратиться к последнему выбранному элементу на странице $0

// $0;
// $0.parentNode; //найти родиетля узла
// parentElement // найти родителя єлемента
// $parentNode.$parentNode // и т.д. можно просмотреть все дерево

// window.innerHeight//посмотреть высоту и ширину выбранного элемента
// window.innerWidth
// $0.clientWidth
// window.scrollTo(0,50) //подняться практически вверх
// $0getClientRects()//данные квадрата, который включает наш элемент

// Методы поиска

// document.querySelector('.любой css селектор')
// document.querySelectorAll() найти все селекторы на странице - это псевдомассив, который мы можем превратить в обычный массив
// с помощью напрмиер спред оператора и работать как с массивом

// (...document.querySelectorAll()).map

// document.getElementById(); возвращает один элемент со страницы
// Element.closest(.css selector) ищет на конкретном элементе(в потомках), который удовлетворяет этот селектор.Element
// свойства DOM - узлов: nodetype, nodeName/ tagName - узнать что за элемент, innerHTML/ outerHTML получать содержимое узлов в стрококом формате, data,textContent
// node.append() - вставляет элемент в конец дочерних элементов (если они есть)
// node.prepend(); -вставляет элемент в начало дочерних элементов (если они есть)
// node.before(); -вставить перед текущим элементом
// node.after(); -вставить после текущего элемента
// node.replaceWith(); -
// node.remove(); удалить элементж

// element.insertAdjacentHTML(where, html);

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const renderListItems = listItems => {
  const listElem = document.querySelector('.list'); // выбираем элемент, в который будем отрисовывать список

  const listItemsElems = listItems //
    .sort((a, b) => a.done - b.done) //сортируем, чтобы выполненные дела были в конце списка
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li'); //создаем элементы списка
      listItemElem.classList.add('list__item'); //применить класс для этого элемента
      if (done) {
        listItemElem.classList.add('list__item_done'); // если done = true, то присваиваем класс определенному єлементу списка
      }
      const checkboxElem = document.createElement('input'); //создаем чекбокс элемент
      checkboxElem.setAttribute('type', 'checkbox'); //устанавливаем атрибут для чекбокса
      // checkboxElem.setAttribute('checked', done); //атрибуты имеют строковое значение, установили в строку фолс или тру
      checkboxElem.checked = done; // обращаемся как к свойтву объекта (наш элемент)

      checkboxElem.classList.add('list__item-checkbox'); //в чекбокс элемент назначаем класс

      listItemElem.append(checkboxElem, text); //добавляем в элементы списка чекбокс и текст

      return listItemElem;
    });

  listElem.append(...listItemsElems); // в список ul добавляем все элементы списка
};
renderListItems(tasks); // вызвали функцию

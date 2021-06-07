//  Браузерные события - это реакция бразера на какие-то действия

// События мыши click, contextmenu, mouseover/mouseout, moousedown/mouseup, mousemove.
// События элкементов управления - focus, submitt
// События клавиатуры keyup, keydown
// События CSS - transitionend
// События документа DOMContentLoaded

// elem.addEventListener('click', () => {
//   console.log('div');
// });

// const handler = () => {
//   console.log('div1');
// };

// elem.addEventListener('click', handler);
// elem.removeEventListener('click', handler);

const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const eventsListElem = document.querySelector('.events-list');

const logTarget = (text, color) => {
  eventsListElem.innerHTML += `<span style ='color: ${color}; margin-left:8px;'>${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

const clear = document.querySelector('.clear-btn');
const clearList = () => {
  eventsListElem.innerHTML = '';
};

clear.addEventListener('click', clearList);
const attachHandlers = document.querySelector('.attach-handlers-btn');
const attach = () => {
  divElem.addEventListener('click', logGreyDiv, { capture: true }); //тоже самое что и третьим аргументом добавить true
  divElem.addEventListener('click', logGreenDiv);

  pElem.addEventListener('click', logGreyP, true);
  pElem.addEventListener('click', logGreenP);

  spanElem.addEventListener('click', logGreySpan, true);
  spanElem.addEventListener('click', logGreenSpan);
};
attachHandlers.addEventListener('click', attach);

const removeHandlers = document.querySelector('.remove-handlers-btn');
const remove = () => {
  divElem.removeEventListener('click', logGreyDiv, { capture: true }); //тоже самое что и третьим аргументом добавить true
  divElem.removeEventListener('click', logGreenDiv);

  pElem.removeEventListener('click', logGreyP, true);
  pElem.removeEventListener('click', logGreenP);

  spanElem.removeEventListener('click', logGreySpan, true);
  spanElem.removeEventListener('click', logGreenSpan);
};
removeHandlers.addEventListener('click', remove);

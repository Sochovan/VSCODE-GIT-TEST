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

const logTarget = (text, color) => {
  const eventsListElem = document.querySelector('.events-list');

  eventsListElem.innerHTML += `<span style ='color: ${color}; margin-left:8px;'>${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

divElem.addEventListener('click', logGreyDiv, { capture: true }); //тоже самое что и третьим аргументом добавить true
pElem.addEventListener('click', logGreyP, true);
spanElem.addEventListener('click', logGreySpan, true);

divElem.addEventListener('click', logGreenDiv);
pElem.addEventListener('click', logGreenP);
spanElem.addEventListener('click', logGreenSpan);

const clear = document.querySelector('.clear-btn');
clear.removeEventListener('click', logGreenDiv);
clear.removeEventListener('click', logGreenP);
clear.removeEventListener('click', logGreenSpan);

// // Функции: область видимости
// // Лексическое окружение - служебный объект для хранения переменных. оно задается при запуске скрипта. Переменные это свойства объекта лексикал инвайромент.
// //границы этого объекта задаются {}; и все находится в глобальном окружении.
// // Function Declaration
// // Block Scope
// // Замыкание

// //sendMessage
// 'use strict';

// let message = 'Just learn it!';

// // export
// function sendMessage(name) {
//     const sender = 'Gromcode';
//     console.log(`${name}, ${message}. You ${sender}`);
// }

// function setMessage(text) {
//     message = text;
// }
// sendMessage('Tom');
// setMessage('Hello!');
// sendMessage('Tom');

// //another.js

// //import { sendMessage } from 'index.js';

// // let message = 'Bie!';

// // sendMessage('Bob'); //Tom, just learn it!. You Gromcode

'use strict';

let message = 'Just learn it';

function sendMessage(name) {
  const sender = 'Gromcode';
  console.log(`${name}, ${message}! Your ${sender}`);
}

function setMessage(text) {
  message = text;
}

setMessage('Good job');
sendMessage('Ann');

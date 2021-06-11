// Browser storage
//  sessionStorage и localStorage
// чтение и запись данных
// Событие storage

//  sessionStorage (привязан к вкладке) и localStorage (привязан к источнику протоколдомен/порт).
// Он общий для всех вкладок и окон с одинаковым источником.
// сохраняют данные в браузере в виде: ключ: значение
// sessionStorage (сохраняется при перезагрузке вкладки)
// и localStorage (сохр. при перезагрузке/закрытии браузера, перезагрузке OS);

// localStorage.clear(); // чистит все старые данные
// localStorage.setItem('name', 'Tom'); //name	Tom
// localStorage.getItem('name');

// localStorage.setItem('hobbies', [1, 2, 3]); //hobbies	1,2,3

// console.log(localStorage.getItem('hobbies'));

// localStorage.setItem('hobbies', { name: 'John' }); //hobbies	[object Object]
// // потому что значение приводится к строке и когда массив мы приведем к строке то получим '1,2,3'
// // а если объект, то'[object Object]';

// console.log(localStorage.getItem('hobbies'));

// // чтобы сохранять объекты в localStorage можно воспользоваться методом
// // JSON.stringify называется стерилизация) объекта

// localStorage.setItem('hobbies', JSON.stringify({ name: 'John' })); //hobbies	{"name":"John"}
// console.log(localStorage.getItem('hobbies'));

// // JSON(Javascript Object Notation) - метод обмена между клиентом и сервером
// обязательно ключи в двойных ковычках "" и строки в ""; undefined не поддерживается

// JSON.parse(str, [reviver]);
// JSON.stringify(value, [replacer, space]);

// JSON.stringify(12); //"12"
// JSON.stringify(false); //"false"
// JSON.stringify(null); //"null"
// JSON.stringify([1, 2, 3]); //"[1,2,3]"
// JSON.stringify('text'); //""text""

// // JSON.parse() - привести к литералу, это обратная операция к методу stringify
// // JSON.parse("\"text\""); //"text"

localStorage.clear();

localStorage.setItem('hobbies', JSON.stringify({ name: 'John' }));
localStorage.setItem('name', 'Tom');
localStorage.setItem('age', JSON.stringify(17));

// console.log(JSON.parse(localStorage.getItem('hobbies'))); //{name: "John"}

// console.log(localStorage.hobbies); //лучше не применять

// const getLocalStorgeData = () => {
//   for (let i = 0; i < localStorage.length; i++) {
//     localStorage.key(i);
//   }
// };

// const getLocalStorgeData = () => {
//   for (let i of localStorage) {
//     localStorage.key(i);
//   }
// };

const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (e) {
      newValue = value;
    }
    return {
      ...acc,
      [key]: newValue,
    };
  }, {});
};

console.log(getLocalStorageData());

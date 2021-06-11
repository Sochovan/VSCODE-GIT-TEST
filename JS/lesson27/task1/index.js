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

const user = {
  name: 'Tom',
  age: 17,
  isStudent: false,
  driverLicense: null,
  hobbies: ['football', 'diving'],
  education: [
    {
      name: 'MIT Precourse',
      graduateDate: '2020-05-04T14:48:46.105Z',
    },
  ],
};

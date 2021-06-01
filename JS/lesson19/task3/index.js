//  User
// Если нужно создать много однотипных объектов, используем функцию - конструктор.
// Функцией - конструктором может быть любая функция, кроме стрелочной.
// если функция явл.конструктором, то называем с большой буквы
// она принимает данные и конструирует объект (тоесть создает и возвращает объект)

// function User(name, age) {
//   // {} был создан пустой объект и наполнен какими-то данными
//   this.name = name;
//   this.age = age;
//   //return {...}

//   this.sayHi = function () {
//     console.log(`Hi, I am ${this.name}`);
//   };
// }

// const user1 = new User('Tom', 17); //если функция вызыввется с ключевым словом new она отрабатывает как конструктор
// console.log(user1); //User {name: "Tom", age: 17}
// user1.sayHi(); //Hi, I am Tom

// const user2 = new User('Bob', 21);

// user2.sayHi(); //Hi, I am Bob;
// -----------------------------------------------------------------
// console.log(user2.sayHi === user1.sayHi); //false, потому что мы создаем новую функцию при каждом вызове
// лучше использовать прототипы для однотипных объектов

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// User.prototype.sayHi = function () {
//   console.log(`Hi, I am ${this.name}`);
// };

// const user1 = new User('Tom', 17);

// user1.sayHi();

// const user2 = new User('Bob', 21);

// user2.sayHi();
// console.log(user2.sayHi === user1.sayHi); //true;

// console.log(user1);
// //User {name: "Tom", age: 17}
// // age: 17
// // name: "Tom"
// // __proto__:
// // sayHi: ƒ ()
// // constructor: ƒ User(name, age)
// // __proto__: Object

// -----------------------------------------------------------------------
// задача с урока

function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};
User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};
User.prototype.setAge = function (age) {
  if (age < 0) {
    return false;
  }
  if (age >= 25) {
    console.log(`New photo request was sent for ${this.name}`);
  }
  if (age > 0 && age < 25) {
    this.age = age;
    return this.age;
  }
};

const user1 = new User('Tom', 17);
user1.setAge(14);
console.log(user1);
user1.sayHi();
user1.requestNewPhoto();

// const user2 = new User('Bob', 25);
// user2.setAge();
// user2.sayHi();
// user2.requestNewPhoto();

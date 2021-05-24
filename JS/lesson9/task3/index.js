// methods внутри объекта могут хранится в том числе функции
// и это называется метод массива


// const user = {
//     name: 'Tom',
//     age: 17,
//     sayHi: function() {
//         console.log('Hi');
//     }
// };

// console.log(user.sayHi) //ƒ () {
//     //   console.log('Hi');
//     // } получили функцию

// // чтобі ее вывести

// user.sayHi(); //Hi;


// также мы можем работать с массивами
// [1, 2].forEach и т.д.
// --------------------------------------------------

// просто к примитивам мы не можем обращаться, но можем через точку
// использовать через методы для них, например,

// console.log('text'.toLocaleUpperCase()); //TEXT
// console.log(1..toFixed()); //1
// -----------------------------------------------------

const obj = {
    name: 'Tom',
    age: 17,
};

function getKeys(obj) {
    const nameKeys = Object.keys(obj);
    nameKeys.map(key => console.log(key));
}
console.log(getKeys(obj));
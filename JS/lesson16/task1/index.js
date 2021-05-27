//  Функции: всплытие

// var, let, const
// hoistinf (всплытие);
// Functional scope

//  var всплывает const, let - не всплывают
// var - область видимости ограничивается функцией или всем скриптом,
// const, let - ограничиваются блоками { }
// -----------------------------------------------------------

// var a = 17;

// if (a) {
//   var a = 1;
//   console.log(a); // a=1;
// }
// console.log(a); //a=1;

// var a;
// console.log(a); //a=1;
// a = 17;
// console.log(a); //a=17;
// ------------------------------------------------------------

// let a = 17;

// if (a) {
//   let a = 1;
//   console.log(a); // a=1;
// }
// console.log(a); //a=17;

// ------------------------------------------------------------

// var greeting = 'Hello';

// function sayHi() {
//   greeting = 'Hi';
//   console.log(greeting);

//   if (false) {
//     var greeting;
//   }
// }

// sayHi();
// console.log(greeting);

let a = 17;

if (a) {
  let a = 1;
  console.log(a); // a=1;
}
console.log(a); //a=1;

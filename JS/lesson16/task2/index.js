// массив функций

// let arr = [];

// for (var i = 0; i < 10; i++) {
//   arr[i] = function () {
//     return i;
//   };
// }

// console.log(arr);
// console.log(arr[0]()); //10
// console.log(arr[5]()); //10

var arr = [];

for (let i = 0; i < 10; i += 1) {
  arr[i] = function () {
    return i;
  };
}
console.log(arr);
console.log(arr[0]()); //10
console.log(arr[5]()); //10

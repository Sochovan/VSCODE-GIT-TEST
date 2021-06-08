// input: obj, obj
// output: boolean;

// algo
// 1 check keys length
// 2 check every key value, if not equal => false;
// 3

function compareObjects(obj1, obj2) {}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

compareObjects(obj1, obj2); // ==> false
compareObjects(obj2, obj3); // ==> false
compareObjects(obj1, obj4); // ==> true

// function compareObjects(obj1, obj2) {
//   const a = Object.entries(obj1);
//   const b = Object.entries(obj2);

//   console.log(a);
//   console.log(b);

//   const a1 = a.join();
//   const b1 = b.join();
//   console.log(a1);
//   console.log(b1);
//   if (a1 === b1) {
//     return true;
//   }
//   return false;
// }

// // examples

// const obj1 = {
//   name: 'Tom',
//   age: 17,
// };

// const obj2 = {
//   name: 'Tom',
//   age: 17,
// };

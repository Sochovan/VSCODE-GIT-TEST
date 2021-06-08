// input: object
// output: array{};

// algo
// 1. Object.entries;
// 3. map array -> object;
// 2. sort

// const getCustomersList = obj => {
//   Object.entries(obj).map(arrElem => {
//     // console.log(arrElem);

//     const elem0 = arrElem[0];
//     const elem1 = arrElem[1];

//     console.log(elem0);
//     console.log(elem1);

//     const res = { ...elem1, id: elem0 };
//     console.log(res);
//     return res;
//   });
// };

// option 2

// const getCustomersList = obj => {
//   return Object.entries(obj)
//     .map(arrElem => {
//       const elem0 = arrElem[0];
//       const elem1 = arrElem[1];
//       return { ...elem1, id: elem0 };
//     })
//     .sort((a, b) => {
//       return a.age - b.age;
//     });
// };
// option3

// const getCustomersList = obj =>
//   Object.entries(obj)
//     .map(arrElem => ({ ...arrElem[1], id: arrElem[0] }))
//     .sort((a, b) => a.age - b.age);

// test
const arr = [1, 3];
const [el1, el2] = arr;
console.log(el1, el2);

// option4
const getCustomersList = obj =>
  Object.entries(obj)
    .map(([id, customerObj]) => ({ ...customerObj, id }))
    .sort((a, b) => a.age - b.age);

// test data
const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
  'customer-id-3': {
    name: 'Mark',
    age: 7,
  },
  'customer-id-4': {
    name: 'Roma',
    age: 25,
  },
};

console.log(getCustomersList(customers));

// input: arr, arr
// output: obj
// 1. Learn requirement
// 2. Create step by step algo (& input/output for functions)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution

// algo:
// 1.create new object
// 2.iterate arrays & add key-value to the object;

// const object = {};
// function buildObject(keysList, valuesList) {
//   for (let index = 0; index < keysList.length; index += 1) {
//     const key = keysList[index];
//     const value = valuesList[index];

//     console.log(`key is ${key}`);
//     console.log(`value is ${value}`);

//     // object[keysList[index]] = valuesList[index];
//     Object.assign(object, { [key]: value });
//   }
//   return object;
// }

// // / examples
// const keys = ['name', 'address', 'age'];
// const values = ['Bob', 'Ukraine', 34];
// const result = buildObject(keys, values);

// console.log(buildObject(keys, values));
// console.log(result);
// ------------------------------------------------------------------
// option1
// function buildObject(keysList, valuesList) {
//   return keysList.reduce((acc, key, index, arr) => {
//     console.log(`STEP ${index}`);
//     console.log('acc is', acc);
//     const value = valuesList[index];
//     return Object.assign(acc, { [key]: value });
//   }, {});
// }
// option2-------------------------------------------------------------
// const buildObject = (keysList, valuesList) =>
//   returnkeysList.reduce((obj, key, index) => ({ ...obj, [key]: valuesList[index] }), {});

// / examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values);

console.log(buildObject(keys, values));
console.log(result);

// option3----------------------------------------------------------------
function buildObject(keysList, valuesList) {
  return keysList.reduce((obj, key, index, arr) => ({ ...obj, [key]: valuesList[index] }), {});
}

// Object.keys();
// input: obj
// output: arr of string

// Object.values()
// input: obj
// output: arr of anything;

// Object.entries;
// input: obj;
// output: arr of[key, value];

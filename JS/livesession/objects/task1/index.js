/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

// const obj = {};
// obj.name = 'Hello';

// console.log(obj);

// // ==============
// \
// const newObbj = new Object();
// newObbj.id = 1001;

// console.log(newObbj);
// ========================

// 1. add properties, build Object
// 2. filter Object

// input: obj, key(number, string etc), value(number, string etc)

// output:obj

function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}
// test data
const myObj = { address: 'Kyiv', count: 111 };
const key = 'personName';
const value = 'Denis';
const res1 = addPropertyV1(myObj, key, value);
console.log(res1);
console.log(myObj);
// examples
function addPropertyV2(obj, key, value) {
  //input : obj , obj, ... objN
  // output: new obj
  const sourceObj = { [key]: value };
  return Object.assign(obj, sourceObj);
}
const user = { name: 'Nastya' };
console.log(addPropertyV2(user, 'age', 25));
console.log(addPropertyV2(user, 'surname', 'Sochovan'));
function addPropertyV2(obj, key, value) {
  //input : obj , obj, ... objN
  // output: new obj
  const sourceObj = { [key]: value };
  return Object.assign(obj, sourceObj);
}
function addPropertyV3(obj, key, value) {
  const sourceObj = { [key]: value };
  return Object.assign({}, obj, sourceObj);
  // return Object.assign(sourceObj, obj);
}
const obj3 = { city: 'New York' };
console.log(addPropertyV3(obj3, 'population', 15000000));
console.log(obj3);

// Object.assign
// // input: obj, ...sources
// output: obj

// test data

const obj4 = { name: 'Test', surname: 'User', address: 'Kyiv' };
console.log(addPropertyV3(obj4, 'address', 'Lviv'));
console.log(obj4);

function addPropertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}
console.log(addPropertyV4({ name: 'LzyBob', lastname: 'Lazy' }, 'age', 45));

const obj5 = { name: 'Test', surname: 'User', address: 'Kyiv' };
console.log(addPropertyV3(obj5, 'address', 'Lviv'));
console.log(obj5);

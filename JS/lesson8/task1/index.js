// //transformToObject

// //вычислимые свойства

// const prop = 'my';

// const obj = {
//     name: 'Tom',
//     age: 17,
//     interest: 'football',
//     'my name': 'Bob',
//     [prop + 'name']: 'value', // результат вычисления будет ключом свойства, поэтому вычислимые
// };

// console.log(obj.age); //17

// obj.age = 18;
// console.log(obj.age); //18

// // console.log(obg.my name); // error

// console.log(obj['my name']); // Bob

// console.log(obj[prop + 'name']); // value;

//---------------------------------------------------------

//задача [1, 'text'] => {'1': 1, text:'text'}

// const transformToObject = arr => {
//     let obj = {};

//     arr.forEach(el => {
//         obj[el] = el;
//     });
//     return obj;
// }
// const arr = [1, 'text'];

// const result = transformToObject(arr);

// console.log(result);

//-------------------------------------------------------
// const user = {
//     name: 'Tom',
// };

// user.name = 'Bob';

// console.log(user.name); // Bob;

// ----------------------------------------------------------


// const a = {};
// const b = {};

// console.log(a === b); //false

// const a = {}; // создаем ссылку на объект
// const b = a; //эту ссылку еще и передаем переменной b;

// console.log(a === b); //поэтому тут true; 
// ----------------------------------------------------------------

// const name = 'Tom';

// const user = {
//     name: name, // name, короткая запись, если имя ключа и ззначения совпадают
// }
// ------------------------------------------------------------------

const transformToObject = arr => {
    let obj = {};

    arr.forEach(el => {
        obj[el] = el;
    });

    return obj;
};
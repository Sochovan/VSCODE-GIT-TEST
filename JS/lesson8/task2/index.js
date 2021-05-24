// concatProps перебирать свойства объекта

// для массивов
// const arr = ['a', 'b'];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// } // есть доступ к индексу элемента

// for (let value of arr) {
//     console.log(value);
// } // чтобы вывести только значения


// //для объектов

// const user = {
//     name: 'Tom',
//     key: 17,
// }
// for (let key in user) {
//     console.log(key); // получаем ключи объекта name, key
//     console.log(user[key]); // получаем значения Tom, 17
// }

// --------------------------------------------------------------------
// задача. функция примет объект и вернет массив со всеми значениями свойств
// user => ['Tom', 17]

// const user = {
//     name: 'Tom',
//     key: 17,
// }

// const concatProps = obj => {
//     let arr = [];

//     for (let key in obj) {
//         arr.push(obj[key]);

//     }
//     return arr;

// };

// console.log(concatProps(user));

// -----------------------------------------------------------------
// второй способ решения задачи

// const user = {
//     name: 'Tom',
//     key: 17,
// }

// const concatProps = obj => {
//     let arr = [];

//     for (let key in obj) {
//         arr = arr.concat(obj[key])

//     }
//     return arr;

// };
// console.log(concatProps(user));

// --------------------------------------------------------------

const concatProps = obj => {
    let arr = [];

    for (let key in obj) {
        arr = arr.concat(obj[key])
    }
    return arr;
};

// examples
concatProps({ name: 'John Doe', age: 17, interest: 'football' }); // ==> ['John Doe', 17, 'football']
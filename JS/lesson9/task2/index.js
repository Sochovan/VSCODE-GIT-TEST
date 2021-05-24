//copyObj -
//  const res = Object.assign({}, players); 

// const users = {
//     'Tom': 17,
//     'Bob': 100,
// };

// const players = {
//     'John Doe': 19,
//     'Bob': 18,
// }


// // чтобы скопировать объект есть несколько методов

// const res = Object.assign(users, players);

// console.log(res); //{Tom: 17, Bob: 18, John Doe: 19};
// если два одинаковых ключа, то берется свойство из объекта, кльлрый в функции стоит правее const res = Object.assign(users, players);

// копирование объекта object.assign расширяет первый свой аргумент
// и const res = Object.assign(users, players);
// res === user - true;
// res === players - false;

// поэтому выражением с пустым объектом, мы можем скопировать объект players
// const res = Object.assign({}, players); res !== players

// и когда мы захотим внести изменения через свойство изначального объекта

// res.Bob = 90;

// console.log(players); //{John Doe: 19, Bob: 18}

// 2. spread оператор-------------------------------------

// const user = {
//     name: 'Tom',
//     age: 17,
// };

// const player = {...user };

//-------------------------------------------------------

// в объектах также может хранится ссылка на другой объектах
// и методы assign u ... копируют свойства только первого уровня, тоесть
// свойство массива father не скопируется

// const user = {
//     name: 'Tom',
//     age: 17,
//     father: {
//         name: 'Bob',
//     }
// };

// const player = {...user };

// 3. Деструктуризация для копирования---------------------------

const user = {
    name: 'Tom',
    age: 17,
};

// const player = {...user };
// console.log(player);

// const { name } = user; - получить доступ к свойству

// console.log(name); // Tom

// const { name: myName } = user; - переназвать переменную

// console.log(myName); // Tom

// const { surname: myName = 'default' } = user; - назначить дефолтное значение.
// оно применяется только в случае,
// если такого ключа нет в объекте // default
// const { name = 'default' } = user; // Tom

// console.log(myName); // Tom

const { name = 'default', ...restProps } = user;
console.log(restProps); // {age: 17};

// чтобы отдать значения из переменной...restProps другому объекту:

const player = {
    game: 'foorball',
    ...restProps,
}

console.log(player); //{game: "foorball", age: 17}
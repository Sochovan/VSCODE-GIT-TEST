// const filterNames = (arr, text) => {
//     arr.filter(elem => elem === text);
//     return text.length > 5;
// };

// const arrInit = ['Nastya', 'oliviya', 'Igor', 'Kcu'];
// const textInit = 'Igor';
// console.log(filterNames(arrInit, textInit));

// const filterNames = (arr, text) => {
//     const filterNames = arr.filter(elem => elem === text && elem.length > 5);
//     return filterNames;
// };

// const arrInit = ['Nastya', 'oliviya', 'Igor', 'Kcu'];
// const textInit = 'igor';
// console.log(filterNames(arrInit, textInit));

// const filterNames = (arr, text) => {

//     const filterNames = arr.filter(elem => {
//         return elem.indexOf(text) > -1;
//     });

//     return filterNames;
// };

const filterNames = (arr, text) => {
    const filterNames = arr.filter(elem => text.includes(elem) && elem.length > 5);
    return filterNames;
};

const arrInit = ['Nastya', 'oliviya', 'Igor', 'Kcu'];
const textInit = ('igor djiej Nastya wkndlk oliviya ');
console.log(filterNames(arrInit, textInit));
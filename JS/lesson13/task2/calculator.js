// separate code and tests

//export const getSum = (a,b) => a + b; именованый экспорт, уже функция с именем
// таких экспортов может быть сколько угодно
// import {getSum} from './calculator.js';


// export default (a,b) => a + b; может быть тольо один, экспортируется без имени
// import getSun from './calculator';


export const getSquqredNumbers = arr =>
    arr.map(num => num * num);

export const getOddNumbers = arr =>
    arr.filter(num => (num % 2 === 1));

export default (a, b) => a + b;
// //parsing

// parseInt(' 17.17text') / 17;
// parseFloat(' 17.17.99test') / 17.17;

// Number.parseFloat('seventeen') / NaN;
// parseFloat === Number.parseFloat / true;
// isFinite == Number.isFinite / false;


// const parseArray = arr => {
//     const result = arr
//         .map(el => Number.parseFloat(el));
//     return result;
// }

// const elementList = [4, 5.6, '  5.7kl', null, NaN, Infinity, undefined];

// console.log(parseArray(elementList));
// /[4, 5.6, 5.7, NaN, NaN, Infinity, NaN]


const getParsedIntegers = arr => {
    return arr.map(num => Number.parseInt(num))
}

const getParsedIntegersV2 = arr => {
    return arr.map(num => parseInt(num))
}

const getParsedFloats = arr => {
    return arr.map(num => Number.parseFloat(num))
}

const getParsedFloatsV2 = arr => {
    return arr.map(num => parseFloat(num))
}

const arr = [1, 5, '-8e sr', '5.7wjhkd3', 6.9, Infinity, NaN, NaN, '18'];
console.log(getParsedIntegers(arr));
console.log(getParsedIntegersV2(arr));
console.log(getParsedFloats(arr));
console.log(getParsedFloatsV2(arr));
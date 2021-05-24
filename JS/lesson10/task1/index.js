// // Numbers

// // Number('34') / 34;
// // Number(null) / 0;
// // Number(undefined) / NaN;
// // Number('we') / NaN;

// Number.isNaN('text') / false
// isNaN('text') / true;
// Number.isNaN(NaN) / true;
// NaN === NaN / false;

// Number.isFinite('17') / false;
// это правильнее потому что не пытается привести к числу строкую

// isFinite('17') / true;

// Number.isInteger(17) / true прверка целое ли число
// Number.isInteger(17.17) / false;

//put your code here
const getFiniteNumbers = arr => {
    return arr.filter(num => Number.isFinite(num));

};

const getFiniteNumbersV2 = arr => {
    return arr.filter(num => isFinite(num));
};

const getNaN = arr => {
    return arr.filter(num => Number.isNaN(num));
};

const getNaNV2 = arr => {
    return arr.filter(num => isNaN(num));
}

const getIntegers = arr => {
    return arr.filter(num => Number.isInteger(num));
}

const arr = [1, 5, -8, 5.7, 6.9, Infinity, NaN, NaN, '18'];
console.log(getFiniteNumbers(arr));
console.log(getFiniteNumbersV2(arr));
console.log(getNaN(arr));
console.log(getNaNV2(arr));
console.log(getIntegers(arr));
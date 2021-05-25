// //multiRound

// 0.1 + 0.2 === 0.3 / false;

// 0.1 + 0.2 === 0.300000000000004;

// Math.ceil(17.17);
// до ближайшего большего
// Math.floor(17.71);
// до ближайшего меньшего
// Math.round(-17.5);
// /-18;
// по правилам округления

// Math.trunc(-17.5);
// /отбрасывает дробную часть

// Math.abs(-17) //17;
// Math.max(5, 7, 1, -4)  //7;
// Math.min(5, 7, 1, -4)  //-4;
// Math.pow(3, 4); //81 это 3 в 4 степени
// Math.sqrt(9) //3
// -----------------------------------------------------

//num => [];

// const multiRound = num => {
//     [Math.round(num), Math.floor(num), Math.ceil(num), Math.trunc(num)];

// }

// console.log(multiRound(17.1));
// /[17, 17, 18, 17];

// console.log(multiRound(Math.PI)); // 3.141592653589793
// Math.PI.toFixed(3); // '3.142' возвращает строку, 
// // к числу возвращаем + Math.PI.toFixed(3);
// Math.PI * 1000 // 3141.592653589793
// Math.round(Math.PI * 1000) // 3142
// Math.round(Math.PI * 1000) / 1000; //3.142


// const multiRound = num => [


//     Math.ceil(num * 100) / 100,
//     Math.floor(num * 100) / 100,
//     Math.round(num * 100) / 100,
//     Math.trunc(num * 100) / 100,
//     num.toFixed(2),

// ];
// console.log(multiRound(-Math.PI)); //[-3.14, -3.15, -3.14, -3.14, '-3.14']

// // ------------------------------------------------------

// Number.MIN_SAFE_INTEGER(-2 ^ 53) < n < Number.MIN_SAFE_INTEGER(2 ^ 53)
// Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1); //false

const multiRound = num => {

    const a = Math.floor(num * 100) / 100;
    const b = Math.round(num * 100) / 100;
    const c = Math.ceil(num * 100) / 100;
    const d = Math.trunc(num * 100) / 100;
    const e = +num.toFixed(2);
    return [a, b, c, d, e];
}

console.log(multiRound(9.65542))
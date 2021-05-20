// //put your code here
// let arr = [5, 4, 3];

// function cloneArr(arr) {
//     // const cloneArr = arr => {
//     if (!Array.isArray(arr)) {
//         return null;
//     }
//     const clone = [...arr];
//     const a = [1, 2, ...arr];
//     console.log(a);
//     console.log(clone);
//     return clone;

// }

// const initArr = [1, 3, 5, 8];
// console.log(cloneArr(initArr));

const cloneArr = arr => {
    if (!Array.isArray(arr)) {
        return null;
    }
    const clone = [...arr];

    return clone;

}
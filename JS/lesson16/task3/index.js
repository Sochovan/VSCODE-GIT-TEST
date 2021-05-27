//put your code here

const createArrayOfFunctions = num => {
  let arr = [];
  if (num === undefined) {
    return [];
  }
  if (typeof num !== 'number') {
    return null;
  }
  for (let i = 0; i < num; i++) {
    arr[i] = function () {
      return i;
    };
  }
  return arr;
};

// export { createArrayOfFunctions };
// console.log(createArrayOfFunctions(9));
console.log(createArrayOfFunctions());

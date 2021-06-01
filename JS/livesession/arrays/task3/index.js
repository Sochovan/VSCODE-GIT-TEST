// input: arr, callback;
// output: arr;

// algo
// 1. create new array;
// 2. iterate arr, apply callback for each element;
// 3. if - true, push result to new array;

// callback
// input: element, index(opt), array (opt)
// output: boolean

const filterArrayElements = (arr, callback) => {
  const res = [];

  for (let index = 0; index < arr.length; index += 1) {
    const el = arr[index];
    const callbackRes = callback(el, index, arr);

    if (callbackRes) {
      res.push(el);
    }
  }
  return res;
};

// test

// console.log(filterArrayElements([1, 3, 4, -1], el => el > 0));

let arr = [34, 676, 35, 765, 345, 1];
function call(el) {
  if (el > 5) {
    return true;
  }
}
filterArrayElements(arr, call);

console.log(filterArrayElements(arr, call));

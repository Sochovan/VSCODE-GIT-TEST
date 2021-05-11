//put your code here
function getSum(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let sum = 0;
    for (num of arr) {
        sum += num;
    }
    return sum;
}

const sum = getSum([1, 5, 9, 35]);
console.log(sum);

//put your code here
function getSum(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
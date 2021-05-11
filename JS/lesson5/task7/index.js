//put your code here
function sum(from, to) {
    let sumNum = 0;
    for (let i = from; i <= to; i++) {
        sumNum += i;
    }
    return sumNum;
}

console.log(sum(5, 9));

function compareSums(a, b, c, d) {
    if (sum(a, b) > sum(c, d)) {
        return true;
    } else {
        return false;
    }
}
console.log(compareSums(4, 5, 6, 9));
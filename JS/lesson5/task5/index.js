//put your code here
function getSum(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
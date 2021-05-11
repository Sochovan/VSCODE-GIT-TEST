//put your code here
function getSpecialNumbers(m, n) {
    let arrayNumbers = [];
    for (let i = m; i <= n; i++) {
        if (i % 3 === 0) {
            arrayNumbers.push(i);
        }
    }
    return arrayNumbers;
}
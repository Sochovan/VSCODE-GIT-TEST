// put your code here
const m = 7;
const n = 30;
let result = 0;

for (let i = m; i <= n; i++) {
    if (i % 5 === 0) {
        console.log(i);
        continue;
    }
    if (i % 2 === 0 && i % 4 !== 0) {
        result += i;
    } else if (i % 3 === 0) {
        result -= i;
    } else if (i % 4 === 0) {
        result *= i;
    }

}
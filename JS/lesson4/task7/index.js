// put your code here
let sum = 0;

for (let i = 0; i <= 1000; i++) {
    if (i % 2 !== 0) {
        console.log('Found');
        sum += i;

    }
}
console.log(sum);
if (sum * 5 > 5000) {
    console.log('Bigger');
}
if (sum * 5 < 5000) {
    console.log('Smaller');
}
if (sum * 5 === 5000) {
    console.log('equal');
}
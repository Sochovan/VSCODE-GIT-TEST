let sum = 0;

for (let i = 1; i <= 1000; i++) {
    sum += i;
}
console.log(sum);
let a = Math.trunc(sum / 1234);
let b = sum % 1234;

console.log(a);
console.log(b);

const result = a > b ? Boolean(1) : Boolean();
console.log(result);
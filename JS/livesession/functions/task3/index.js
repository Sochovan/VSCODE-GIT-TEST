// How to work on tech tasks. Step by step guide
//1. Learn requirement
//2. Create step by step algo (& input/output for funtions)
//3. Write draft solution & testing
//4. Refactoring & final testing -> final solution

//algo
// 1. iterate numbers from 2 to num;
// 2. check if number is prime
// 2.1 iterate numbers froem 2 to num
// 2.2 if number is divided by any other - not prime;

// function getPrimes(n) {
//     for (let i = 2; i <= n; i++) {
//         let count = 0;
//         for (let j = 2; j <= i; j++) {
//             if (i % j !== 0) {
//                 continue;
//             }
//             count += 1;
//         }
//         if (count === 1) console.log(i);
//     }
// }
// getPrimes(58);

function getPrimes(num) {
    for (let index = 2; index <= num; index += 1) {
        let isPrime = true;

        for (let number = 2; number < index; number += 1) {
            if (index % number === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(index);
        }
    }
}
console.log(getPrimes(15));
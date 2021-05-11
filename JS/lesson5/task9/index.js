function getPrimes(n) {
    for (let i = 2; i <= n; i++) {
        let count = 0;
        for (let j = 2; j <= i; j++) {
            if (i % j !== 0) {
                continue;
            }
            count += 1;
        }
        if (count === 1) console.log(i);
    }
}
getPrimes(58);
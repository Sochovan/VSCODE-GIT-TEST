const getTotalRevenue = transactions => {

    const result = transactions.map(elem => elem.amount)
        .reduce((acc, elem) => acc + elem);

    return result;
};

// examples
const transactions = [
    { userId: 22, amount: 60, operation: 'sell' },
    { userId: 22, amount: 160, operation: 'buy' },
    { userId: 44, amount: 90, operation: 'sell' },
];

const result = getTotalRevenue(transactions); // ==> 310
console.log(result);
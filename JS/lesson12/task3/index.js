const cleanTransactionsList = arr => {
    const resArray = arr.filter(elem => isFinite(elem)).map(elem => '$' + parseFloat(elem).toFixed(2));

    return resArray;
}
console.log(cleanTransactionsList(['  1.9 ', '16.4', 17, '1 dollar ']));
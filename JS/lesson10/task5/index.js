const getTotalPrice = arr => {
    const sum = arr.reduce((acc, elem) => acc + elem);
    const sumRound = Math.floor(sum * 100) / 100;
    return '$' + sumRound;
}
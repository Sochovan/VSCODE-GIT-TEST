const cleanTransactionsList = arr => {
    // let str = arr.join();
    let resArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) > 0) {
            resArray.push(arr[i]);
        }
        let str = resArray.join();

        let result = str.split('').trim;
        console.log(result);
    }
    return resArray;
}

console.log(cleanTransactionsList(['  1.9 ', '16.4', 17, '1 dollar ']));
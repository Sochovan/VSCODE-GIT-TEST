const getCustomersList = obj => {
    const array = Object.entries(obj);
    console.log(array);
    const a = array.map(elem => ({ id: elem[0], ...obj[elem[0]] }));
    console.log(a);
}



const obj = {
    'customer-id-1': {
        name: 'William',
        age: 54
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17
    },
}

console.log(getCustomersList(obj));
function buildObject(keysList, valuesList) {
    let object = {};
    for (let i = 0; i < keysList.length; i++) {
        object[keysList[i]] = valuesList[i];

    }
    return object;
}



// / examples
const keysList = ['name', 'address', 'age'];
const valuesList = ['Bob', 'Ukraine', 34];
// const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 56 }

console.log(buildObject(keysList, valuesList));
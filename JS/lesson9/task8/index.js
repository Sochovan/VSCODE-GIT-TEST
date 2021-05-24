// function addPropertyV1(userData, userId) {
//     userData.id = userId;
//     return userData;
// }



const userData = {
    name: 'Sam',
};
const userId = '1234567';

// console.log(addPropertyV1(userData, userId));

// put your code here
function addPropertyV2(userData, userId) {
    userData.id = userId;
    const newObj = Object.assign(userData);

    return newObj;
}
console.log(addPropertyV2(userData, userId));
// put your code here

function addPropertyV3(userData, userId) {

    const newObj = Object.assign({}, userData);
    newObj.id = userId;


    return newObj;

}
console.log(addPropertyV3(userData, userId));

// put your code here
function addPropertyV4(userData, userId) {
    const newObj = {...userData };
    newObj.id = userId;
    return newObj;
}

console.log(addPropertyV4(userData, userId));
// // get adults

// const user = {
//     name: 'Tom',
//     age: 17,
// };

// // Object.keys();
// // Object.values();
// // Object.entries();

// console.log(Object.keys(user)); //['name', 'age']
// console.log(Object.values(user)); //['Tom', 17]
// console.log(Object.entries(user)); // [['name', 'Tom'], ["age", 17]]
// --------------------------------------------------------------------


// const user = {
//     'Tom': 17,
//     'John Doe': 19,
//     'Bob': 18,
// };


// const getAdults = usersObj => {
//     const usersArray = Object.entries(usersObj);
//     // {'Tom': 17, 'John Doe': 19, 'Bob': 18,} => [['Tom', 17]['John Doe', 19]['Bob', 18]]

//     const filteredUsersArray = usersArray
//         .filter(user => user[1] >= 18);

//     //[['Tom', 17]['John Doe', 19]['Bob', 18]] => ['John Doe', 19]['Bob', 18]];

//     const usersNames = filteredUsersArray
//         .map(user => user[0]);

//     // ['John Doe', 19]['Bob', 18]] => ['John Doe','Bob']
//     return usersNames;
// }

// console.log(getAdults(user));

// short ---------------------------------------------------------------

// const user = {
//     'Tom': 17,
//     'John Doe': 19,
//     'Bob': 18,
// };

// const getAdults = usersObj => {
//     const result = Object.entries(usersObj)
//         .filter(user => user[1] >= 18)
//         .map(user => user[0]);

//     return result;
// }

// console.log(getAdults(user));

// the best--------------------------------------------------------

const user = {
    'Tom': 17,
    'John Doe': 19,
    'Bob': 18,
};

const getAdults = usersObj => Object.entries(usersObj)
    .filter(user => user[1] >= 18)
    .map(user => user[0]);

console.log(getAdults(user));
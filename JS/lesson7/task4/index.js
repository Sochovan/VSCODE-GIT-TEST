// ['Ann', 'Tom', 'Bob', 'Kate']; ['Tom', 'Bob'] => ['Good job, Ann', 'Good job, Kate']

// 1. Find passed students
// 2. Add Good job


// c .indexOf()----------------------------------------

// const getMessagesForPassedStudents = (allStudents, failedStudents) => {
//     const passedStudents = allStudents
//         .filter(name => failedStudents.indexOf(name) === -1);

//     return passedStudents;
// };

// const allStudents = ['Ann', 'Tom', 'Bob', 'Kate'];
// const failedStudents = ['Tom', 'Bob'];

// console.log(getMessagesForPassedStudents(allStudents, failedStudents));

// c .includes()----------------------------------------


// const getMessagesForPassedStudents = (allStudents, failedStudents) => {
//     const passedStudents = allStudents
//         .filter(name => !failedStudents.includes(name));

//     const messages = passedStudents
//         .map(name => 'Good job, ' + name);

//     return messages;
// };

// const allStudents = ['Ann', 'Tom', 'Bob', 'Kate'];
// const failedStudents = ['Tom', 'Bob'];

// console.log(getMessagesForPassedStudents(allStudents, failedStudents));

// the best----------------------------------------------------------------

const getMessagesForPassedStudents = (allStudents, failedStudents) => allStudents
    .filter(name => !failedStudents.includes(name))
    .map(name => 'Good job, ' + name);

const allStudents = ['Ann', 'Tom', 'Bob', 'Kate'];
const failedStudents = ['Tom', 'Bob'];

console.log(getMessagesForPassedStudents(allStudents, failedStudents));
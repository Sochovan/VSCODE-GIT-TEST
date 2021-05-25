//sortContacts

// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghigklmnopqrstuvwxyz

// String.fromCodePoint(65); //A узнать под каким кодом находится символ
// 'Ann'.charCodeAt(0); //65

// const sortContacts = contacts => {
//     const result = contacts
//         .sort((a, b) => {
//             return a.name.localeCompare(b.name); //сравнивает строки
//         });
//     return result;
// };

// console.log(sortContacts(contacts));



// contacts = [{
//         name: 'Tom',
//         phoneNumber: '666-66-66',
//     },
//     {
//         name: 'John',
//         phoneNumber: '555-55-55',
//     },
//     {
//         name: 'Ann',
//         phoneNumber: '333-33-33',
//     },
//     {
//         name: 'Stephan',
//         phoneNumber: '444-44-44',
//     },
//     {
//         name: 'Suzy',
//         phoneNumber: '222-22-22',
//     },
//     {
//         name: 'Adel',
//         phoneNumber: '111-11-11',
//     },

// ];

//put your code here

const sortContacts = (arr, Boolean = true) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    let sortArray = [];
    if (Boolean === true) {
        sortArray = arr.sort((a, b) => a.name.localeCompare(b.name));
    } else {
        sortArray = arr.sort((a, b) => b.name.localeCompare(a.name));
    }
    return sortArray;
}

arr = [{
        name: 'Tom',
        phoneNumber: '666-66-66',
    },
    {
        name: 'John',
        phoneNumber: '555-55-55',
    },
    {
        name: 'Ann',
        phoneNumber: '333-33-33',
    },
    {
        name: 'Stephan',
        phoneNumber: '444-44-44',
    },
    {
        name: 'Suzy',
        phoneNumber: '222-22-22',
    },
    {
        name: 'Adel',
        phoneNumber: '111-11-11',
    },

];

console.log(sortContacts(arr, true));
// const products = {
//   id: 1,
//   name: "pen",
//   isAvailable: true,
//   price: 100,
//   color: "red",
//   storeAdress: null,
// };

// const productName = products.name;
// console.log(productName);
// const storeAdress = products["storeAdress"];
// console.log(storeAdress);

// products["deliveryOptions"] = ["Новая почта", "Укр почта", "Самовывоз"];
// console.log(products);

// ==============================================================

// function getKeys(obj) {
//   let newArr = [];
//   for (const key in obj) {
//     newArr.push(key);
//   }
//   return newArr;
// }

// console.log(getKeys(products));

// function getValues(obj) {
//   let newArr = [];
//   for (const key in obj) {
//     newArr.push(obj[key]);
//   }
//   return newArr;
// }
// console.log(getValues(products));

// =============================================================

// function copyObj(obj) {
//   let copy = {};

//   for (let key in obj) {
//     copy[key] = obj[key];
//   }
//   return copy;
// }

// const copied = copyObj(products);
// console.log(copied);

// products["style"] = "glamour";

// console.log(copied);
// console.log(products);

// =============================================================
// ("use strict");

// input: array
// output: array

// algo
// 1. iterate array of objects
// 2. copy some properties to new Object

// function getGoalsStat(players) {
//   return players.map((obj) => {
//     let newObj = {};
//     newObj.name = obj.name;
//     // newObj.team = obj.team;
//     // newObj.goals = obj.goals;
//     console.log(newObj);
//     console.log(obj.name);
//     return newObj;
//   });
// }

// // examples
// const players = [
//   {
//     name: "Jason Mount",
//     birthdate: "19.12.1993",
//     country: "Deutschland",
//     number: "21",
//     team: "Manchester United",
//     position: "MF",
//     goals: 4,
//   },
//   {
//     name: "Jason Mount",
//     birthdate: "01.01.2001",
//     country: "Deutschland",
//     number: "16",
//     team: "Manchester United",
//     position: "MF",
//     goals: 0,
//   },
//   {
//     name: "Finne Bard",
//     birthdate: "13.02.1995",
//     country: "Norwegen",
//     number: "26",
//     position: "FW",
//     team: "Fulham United",
//     goals: 1,
//   },
//   {
//     name: "Gerhardt Yannick",
//     birthdate: "13.03.1994",
//     country: "Deutschland",
//     number: 31,
//     position: "MF",
//     team: "Liverpool",
//     goals: 8,
//   },
// ];

// console.log(getGoalsStat(players));
// ===>
// [
//   { name: 'Jason Mount', team: 'Manchester United', goals: 4 },
//   { name: 'Jason Mount, team: 'Manchester United', goals: 0 },
//   { name: 'Finne Bard', team: 'Fulham United', goals: 1 },
//   { name: 'Gerhardt Yannick', team: 'Liverpool', goals: 8 },
// ];
// =================================================

// function buildObject(keyList, valueList) {
//   let obj = {};

//   for (let i = 0; i < keyList.length; i++) {
//     const key = keyList[i];
//     const value = valueList[i];

//     console.log(key);
//     console.log(value);

//     // Object.assign(obj, { [key]: value });
//     obj = { ...obj, [key]: value };
//     obj1 = { ...obj };
//     console.log(obj1);
//   }
//   return obj;
// }

// const keys = ["name", "adress", "age"];
// const values = ["Nastya", "Kyiv", 37];
// const res = buildObject(keys, values);

// console.log(res);

// =============================================================
// input: array
// output: obj

// Algo
// 1. create new obj (keys - city.value, values - count of city.value)
// 2.

// function usersCountByCity(users) {
//   let newObj = {};

//   for (let i of users) {
//     if (newObj[i.city] === undefined) {
//       newObj[i.city] = 1;
//     } else {
//       newObj[i.city]++;
//     }
//   }
//   return newObj;
// }

// // examples
// const users = [
//   {
//     id: 888,
//     name: "Denis",
//     age: 44,
//     city: "Kyiv",
//   },
//   {
//     id: 333,
//     name: "Alex",
//     age: 33,
//     city: "Lviv",
//   },
//   {
//     id: 392,
//     name: "Nastya",
//     age: 22,
//     city: "Kyiv",
//   },
//   {
//     id: 123,
//     name: "Violetta",
//     age: 15,
//     city: "Odesa",
//   },
//   {
//     id: 640,
//     name: "Mykola",
//     age: 31,
//     city: "Lviv",
//   },
// ];

// console.log(usersCountByCity(users)); // ===> { 'Kyiv': 2, 'Lviv': 2, 'Odesa': 1 }

// ==========================================================
function findUsersByName(users, name) {
  const res = users.filter((obj) => {
    if (obj.name === name) {
      return obj;
    }
  });
  return res;
}

function findUsersByString(users, str) {
  const res1 = users.filter((obj) => {
    if (obj.name.includes(str)) {
      return obj;
    }
  });
  return res1;
}

// examples
const users = [
  {
    id: 101,
    name: "Denis",
    city: "Kyiv",
  },
  {
    id: 102,
    name: "Alexandr",
    city: "Lviv",
  },
  {
    id: 103,
    name: "Nastya",
    city: "Kyiv",
  },
  {
    id: 104,
    name: "Violetta",
    city: "Odesa",
  },
  {
    id: 105,
    name: "Mykola",
    city: "Lviv",
  },
  {
    id: 106,
    name: "Denis",
    city: "Lviv",
  },
  {
    id: 107,
    name: "Andrey",
    city: "Odesa",
  },
  {
    id: 108,
    name: "Alexey",
    city: "Dnipro",
  },
];

console.log(findUsersByName(users, "Denis")); // ===> [ { id: 101, name: 'Denis', city: 'Kyiv' }, { id: 106, name: 'Denis', city: 'Lviv' } ]
findUsersByName(users, "Andrey"); // ===> [ { id: 107, name: 'Andrey', city: 'Odesa' } ]
findUsersByName(users, "Anna"); // ===> [ ]

console.log(findUsersByString(users, "Al")); // ===> [ { id: 102, name: 'Alexandr', city: 'Lviv' }, { id: 108, name: 'Alexey', city: 'Dnipro' } ]
console.log(findUsersByString(users, "t")); // ===> [ { id: 103, name: 'Nastya', city: 'Kyiv' }, { id: 104, name: 'Violetta', city: 'Odesa' } ]
findUsersByString(users, "Vik"); // ===> [ ]

console.log(findUsersByString(users, "m")); // ===> [ ]
// explanation: letter 'm' is not included in any user name, 'Mykola' includes 'M' not 'm', so it is not added to the result

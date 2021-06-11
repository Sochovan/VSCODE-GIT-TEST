// bad

// const withdraw = (clients, balances, client, amount) => {
//   //put your code here
//   let clientBalances = balances[clients.indexOf(client)];
//   if (amount <= clientBalances) {
//     clientBalances -= amount;
//     balances[clients.indexOf(client)] = clientBalances;
//     return clientBalances;
//   } else {
//     return -1;
//   }
// };

// option 2-------------------------------------------------------

// const withdraw = (clients, balances, client, amount) => {
//   let index = clients.indexOf(client);

//   if (balances[index] < amount) {
//     return -1;
//   }
//   balances[index] -= amount;
//   return balances[index];
// };

// // test data
// const bal = [1400, 87, -6];
// console.log(withdraw(['Ann', 'John', 'User'], bal, 'John', 50));
// console.log(bal);

// ---------------------------------------------------------
// const withdraw = (clients, balances, client, amount) => {
//   let indexOfClient = clients.indexOf(client);

//   if (balances[indexOfClient] < amount) {
//     return -1;
//   }

//   balances[indexOfClient] -= amount;
//   return balances[indexOfClient];
// };
// ----------------------------------------------------------
// const withdraw = (clients, balances, client, amount) => {
//   let rest = 0;

//   // dom't use
//   clients.forEach((name, index) => {
//     // very bad

//     if (name.includes(client)) {
//       rest = balances[index] - amount;
//     }
//   });
//   if (rest < 0) {
//     return -1;
//   }
//   return rest;
// };

// // test data
// ----------------------------------------------------------------
// const withdraw = (clients, balances, client, amount) => {
//   const index = clients.indexOf(client);
//   if (balances[index] < amount) return -1;
//   balances[index] -= amount;
//   return balances[index];
// };
// const bal = [1400, 87, -6];
// console.log(withdraw(['Ann', 'John', 'User'], bal, 'John', 50));
// console.log(bal);

const arrRes = [1, 3, 5, 10, 15].filter(el => {
  if (el > 5) {
    console.log(true);
  } else {
    console.log(false);
  }
});

console.log(arrRes);

// let arr = [1, 3, 4];
// console.log(...arr);

// let test = new Number(111);
// let test1 = test;
// test = 222;
// console.log(test);

// console.log(test1);

let test = new Number(111);
let test1 = test;
test = new Number(222);
console.log(test);

console.log(test1);

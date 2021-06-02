//Wallet

// защитить поля и свойства классов от внешего вмешательства
// свойства есть публичные и приватные. Все приватные обозначаются _balance
// #balance - новый механизм для защиты изменений в приватных свойствах

// console.log(wallet1.#balance); выдаст ошибку, потому что свойство приватное

// class Wallet {
// constructor() {
//   this._balance = 0;
// }

//   _balance = 0;
//   // }
//   getBalance() {
//     return this._balance;
//   }

//   deposit(amount) {
//     this._balance += amount;
//   }

//   withdraw(amount) {
//     if (amount > this._balance) {
//       console.log('No enough founds');
//       return;
//     }
//     this._balance -= amount;
//   }
// }

// const wallet1 = new Wallet();

// console.log(wallet1.getBalance());
// wallet1.deposit(45);
// console.log(wallet1.getBalance());
// wallet1.withdraw(34);
// console.log(wallet1.getBalance());
// wallet1.withdraw(134);
// console.log(wallet1.getBalance());

// =====================================================================
// задача с урока

class Wallet {
  constructor() {
    this.balance = 500;
  }
  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log(`No enough funds`);
      return;
    }
    this.balance -= amount;
  }
}

const wallet1 = new Wallet();

console.log(wallet1.balance);
wallet1.deposit(150);
console.log(wallet1.balance);
wallet1.withdraw(1000);
console.log(wallet1.balance);

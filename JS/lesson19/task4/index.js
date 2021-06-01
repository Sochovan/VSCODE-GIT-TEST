// getter, setter

// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   set fullName(value) {
//     const [firstName, lastName] = value.split(' ');
//     this.firstName = firstName;
//     this.lastName = lastName;
//     // return `${this.firstName} ${this.lastName}`;
//   },
// };

// user.fullName = 'Tom Hardy';
// console.log(user.firstName); //Tom

// ==================================================

const user = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    let arr = value.split(' ');
    console.log(arr);
    this.firstName = arr[0];
    console.log(this.firstName);
    this.lastName = arr[1];
    console.log(this.lastName);
  },
};

console.log(user);

user.fullName = 'John Doe';

console.log(user.fullName);

user.firstName = 'Ann';
console.log(user);

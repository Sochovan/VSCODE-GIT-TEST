const user = {
  firstName: 'John',
  lastName: 'Doe',

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    const res = fullName.split(' ');
    this.firstName = res[0];
    this.lastName = res[1];
  },
};

// const func = user.getFullName();
// console.log(func);
// const reverseFunc = user.setFullName('Nastya Sochovan');
// console.log(reverseFunc);
// console.log(user.firstName); /// Nastya
// console.log(user.lastName); /// Sochovan

console.log(user.getFullName());
console.log(user.setFullName('Nastya Sochovan'));
console.log(user.firstName); /// Nastya
console.log(user.lastName); /// Sochovan
console.log(user.getFullName());

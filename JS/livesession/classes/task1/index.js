/* eslint-disable max-classes-per-file, no-console */

class Sportsman {
  constructor(firstName) {
    console.log("before", this);
    this.firstName = firstName;
    console.log("after", this);
  }

  run() {
    console.log(`${this.firstName} is running`);
  }
  // run() {
  //   setTimeout(function () {
  //     console.log(`${this.firstName} is running`);
  //   }, 3000);
  // }
  swim() {
    console.log("Hello,swim!");
  }
}

class Swimmer extends Sportsman {
  constructor(firstName, swimmStyle) {
    super(firstName);

    this.swimmStyle = swimmStyle;
    console.log(this);
  }

  swim() {
    console.log(`${this.firstName} is swimming ${this.swimmStyle}`);
  }
}

// test data

const obj = {
  firstName: "Andrew",
};
console.log(obj);
const sportsman1 = new Sportsman("Nastya");
const sportsman2 = new Sportsman("Alex");
// const run = sportsman2.run;
// run();
console.log(sportsman1);
sportsman1.run();
sportsman2.run();

const swimmer1 = new Swimmer("John", "butterfly");
const swimmer2 = new Swimmer("Ann", "like a frog");

swimmer1.run();
swimmer2.run();
swimmer1.swim();
swimmer2.swim();

console.log(swimmer1);

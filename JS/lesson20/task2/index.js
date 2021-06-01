// super  - этоссылка на кострукто родительского класса

class Vehicle {
  constructor(name, hasWeels) {
    this.hasWeels = hasWeels;
    this.name = name;
  }
  move() {
    console.log(`${this.name} is moving`);
  }
  stop() {
    console.log(`${this.name} stopped`);
  }
}

class Ship extends Vehicle {
  //наследование
  constructor(name, speed) {
    super(name, false); // обязательно вызвать родительсвкий конструктор, чтобы пользоваться this
    this.speed = speed;
  }
  move() {
    console.log(`${this.name} lifting anchor up`);
    super.move();
  }

  stop() {
    super.stop();
    console.log(`${this.name} lifting anchor down`);
  }
}

const ship1 = new Ship('Aurora', 17);
// ship1.startMachine();

console.log(ship1);
ship1.move();

// =====================================================================
// const vehicle = {
//   move() {
//     console.log(`${this.name} is moving`);
//   },
//   stop() {
//     console.log(`${this.name} stopped`);
//   },
// };

// const ship = {
//   name: 'Chaika',
//   hasWheels: false,
//   liftAnchorDown() {
//     console.log(`${this.name} lifting anchor down`);
//   },
//   liftAnchorUp() {
//     console.log(`${this.name} lifting anchor up`);
//   },
//   startMachine() {
//     this.liftAnchorUp();
//     this.move();
//   },

//   stopMachine() {
//     this.stop();
//     this.liftAnchorDown();
//   },
// };

// Object.setPrototypeOf(ship, vehicle);

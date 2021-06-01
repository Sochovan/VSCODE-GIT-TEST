// Наследование
// Прототипы
// Цепочка прототипов

// [[Prototype]] скрытое свойство, которое содержит ссылку на прототип
// Prototype - свойство у конструктора, которе формирует прототип для объекта,
//   созданного через new.

//     __proto__ - getter/setter для [[Prototype]]

// vehicle and ship

// const vehicle = {
//   move() {
//     console.log('moving');
//   },
//   stop() {
//     console.log('stopped');
//   },
// };

// vehicle.move();

// console.log(vehicle);

// const ship = {
//   name: 'Aurora',
//   hasWheels: false,
//   liftAnchorDown() {
//     console.log('lifting anchor down');
//   },
//   liftAnchorUp() {
//     console.log('lifting anchor up');
//   },
//   __proto__: vehicle,
// };

// // console.log(ship);
// ship.run();//index.js:33 Uncaught TypeError: ship.run is not a function

// =================================================
// Object.setPrototypeOf();

// Object.setPrototypeOf(ship, vehicle);

// ship.move();

// console.log(ship);

// ===========================================================

// const vehicle = {
//   move() {
//     console.log(`${this.name} moving`);
//   },
//   stop() {
//     console.log(`${this.name} stopped`);
//   },
// };

// const ship = {
//   name: 'Aurora',
//   hasWheels: false,
//   liftAnchorDown() {
//     console.log('lifting anchor down');
//   },
//   liftAnchorUp() {
//     console.log('lifting anchor up');
//   },

//   __proto__: vehicle,
// };

// ship.move();
// ---------------------------------------------------------
// задача с урока

const vehicle = {
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  name: 'Argo',
  startMachine() {
    ship.move();
    console.log(`${this.name} lifting anchor up`);
  },
  stopMachine() {
    ship.stop();
    console.log(`${this.name} lifting anchor down`);
  },
  __proto__: vehicle,
};

console.log(ship);

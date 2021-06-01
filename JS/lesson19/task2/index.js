// own props
const vehicle = {
  move() {
    console.log(`${this.name} moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

// const ship = {
//   name: 'Aurora',
//   hasWheels: false,
//   liftAnchorDown() {
//     console.log('lifting anchor down');
//   },
//   liftAnchorUp() {
//     console.log('lifting anchor up');
//   },
// };

// Object.setPrototypeOf(ship, vehicle);

// for (let prop in ship) {
//   if (ship.hasOwnProperty(prop)) {
//     console.log(prop); //name
//     // index.js:25 hasWheels
//     // index.js:25 liftAnchorDown
//     // index.js:25 liftAnchorUp
//   }
// }

// console.log(Object.keys(ship)); // ["name", "hasWheels", "liftAnchorDown", "liftAnchorUp"]

function getOwnProps(obj) {
  let result = [];

  for (let prop in obj) {
    if (obj.hasOwnProperty(prop) && typeof obj[prop] !== typeOf 'function') {
      result.push(prop);
    }

  }
  return result;
}


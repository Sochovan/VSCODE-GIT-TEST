class Order {
  constructor(price, city, type) {
    this.price = price;
    this.city = city;
    this.type = type;
    this.id = Math.random().toString(36).slice(-10);
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.dateConfirmed = new Date();
  }

  checkPrice(price) {
    if (this.price > 1000) {
      return true;
    }
    return false;
  }

  confirmOrder(dateConfirmed) {
    if (this.dateConfirmed !== null) {
      this.isConfirmed = true;
      dateConfirmed = new Date();
    }
  }

  isValidType(type) {
    if (this.type === 'Buy' || this.type === 'Sell') {
      return true;
    } else {
      return false;
    }
  }
}

const order1 = new Order(50, 'Paris', 'fkyk');
console.log(order1);

console.log(order1.price);
const a = order1.checkPrice();
console.log(a);

// console.log(order1.city);
// console.log(order1.type);
// console.log(order1.id);
const b = order1.isValidType();
console.log(b);
console.log(typeof isValidType);
let dateConfirmed = new Date();
const c = order1.confirmOrder(dateConfirmed);
console.log(c);
console.log(order1.isConfirmed);

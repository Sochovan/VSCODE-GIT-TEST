function countCommision(amount, currency) {
  debugger;

  if (amount < 1000 && currency === "UAH") {
    return amount * 0.02;
  } else if (amount >= 1000 && currency === "UAH") {
    return amount * 0.01;
  } else if (amount < 5000 && currency === "USD") {
    return amount * 0.005;
  } else if (amount >= 5000 && currency === "USD") {
    return amount * 0.0025;
  } else if (amount < 3000 && currency === "EUR") {
    return amount * 0.075;
  } else if (amount >= 3000 && currency === "EUR") {
    return amount * 0;
  }
}
// examples
console.log(countCommision(20000, "USD")); // ===> 50
console.log(countCommision(500, "UAH")); // ===> 10
console.log(countCommision(2000, "UAH")); // ===> 20

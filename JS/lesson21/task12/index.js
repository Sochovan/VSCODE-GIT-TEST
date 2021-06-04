export { squaredNumbers };

const squaredNumbers = () => {
  const cont = document.querySelectorAll('.number');

  for (let i = 0; i < cont.length; i += 1) {
    const number1 = cont[i].dataset.number;
    console.log(number1);
    const sqrt = number1 ** 2;
    console.log(sqrt);

    console.log(cont[i]);

    cont[i].dataset.squaredNumber = sqrt;
  }
};
// console.log(squaredNumbers());

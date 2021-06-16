// Event Loop

// const main = () => {
//   console.log('1');
//   setTimeout(() => console.log('2'), 0);

//   console.log('3');
//   setTimeout(() => console.log('4'), 1000);
//   console.log('5');
// };

// main();
// console.log('6');

const printing = () => {
  console.log(1);
  setTimeout(function () {
    console.log(5);
  }, 1000);

  console.log(2);
  setTimeout(function () {
    console.log(4);
  }, 0);
  console.log(3);
};

printing();

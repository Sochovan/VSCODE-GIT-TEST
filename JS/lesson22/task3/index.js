const input = document.querySelector('.text-input');

const consoleInput = () => {
  console.log(input.value);
};

input.addEventListener('change', consoleInput);

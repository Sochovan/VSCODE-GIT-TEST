const input = document.querySelector('.text-input');

const getText = event => {
  console.log(event.target.value);
};

input.addEventListener('change', getText);

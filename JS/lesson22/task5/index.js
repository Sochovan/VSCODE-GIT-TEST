const button = document.querySelector('.search__btn');

const inputText = () => {
  const input = document.querySelector('.search__input');
  console.log(input.value);
};

button.addEventListener('click', inputText);

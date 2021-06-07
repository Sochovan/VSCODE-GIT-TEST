const button = document.querySelector('.single-use-btn');

const clickButton = () => {
  console.log('clicked');
  button.removeEventListener('click', clickButton);
};

button.addEventListener('click', clickButton);

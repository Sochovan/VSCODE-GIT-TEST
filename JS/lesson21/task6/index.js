export { setButton };

const setButton = buttonText => {
  const button = document.querySelector('body');

  button.innerHTML = '<button>buttonText</button>';
};

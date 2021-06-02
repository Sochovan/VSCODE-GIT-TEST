export { setButton };

const setButton = buttonText => {
  const container = document.querySelector('body');
  const button = document.querySelector('button');
  button.innerHTML = buttonText;
};

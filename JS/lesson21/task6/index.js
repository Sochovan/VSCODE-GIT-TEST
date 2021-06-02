export { setButton };

const setButton = buttonText => {
  const container = document.querySelector('body');
  const parentElement = document.body;
  const button = document.createElement('button');
  button.innerHTML = buttonText;
};

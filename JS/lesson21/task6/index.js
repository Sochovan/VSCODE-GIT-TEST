export { setButton };

const setButton = buttonText => {
  const container = document.querySelector('body');
  const parentElem = document.body;
  const button = document.createElement('button');
  button.innerHTML = buttonText;
  parentElem.appendChild(button);
};

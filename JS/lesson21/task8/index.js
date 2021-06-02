export { createButton };

const createButton = buttonText => {
  const container = document.querySelector('body');
  const parentElem = document.body;
  const button = document.createElement('button');
  button.textContent = buttonText;
  parentElem.appendChild(button);
};

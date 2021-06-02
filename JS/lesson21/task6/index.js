export { setButton };

const setButton = buttonText => {
  const button = document.querySelector('body').innerHTML;

  button.innerHTML = buttonText;
};

console.log(setButton());

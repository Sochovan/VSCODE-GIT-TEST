export { setButton };

const setButton = buttonText => {
  const button = document.querySelector('body');
  const textButton = document.createElement('Button');
  textButton.innerHTML = buttonText;
};

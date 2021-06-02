export { getTitleElement, getInputElement };

const getTitleElement = () => {
  const titleElem = document.querySelector('.title');
  console.dir(titleElem);
  return titleElem;
};

const getInputElement = () => {
  const inputElem = document.querySelector('input');
  console.dir(inputElem);
  return inputElem;
};

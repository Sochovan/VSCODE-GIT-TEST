export { getItemsList, getItemsArray };

const getItemsList = () => {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
};

const getItemsArray = () => {
  const array = document.querySelectorAll('.tool');
  const elementsArray = Array.from(array);
  console.dir(elementsArray);
  return elementsArray;
};

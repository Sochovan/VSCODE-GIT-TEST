export const finishList = () => {
  const list = document.querySelector('ul');
  const parentElem = document.ul;
  const firstItem = document.createElement('li');
  firstItem.textContent = '1';
  document.ul.prepend(firstItem);
  const fourthItem = document.createElement('li');
  fourthItem.textContent = '4';
  const fifthItem = document.querySelector('.special');
  fifthItem.before(fourthItem);
  const sixthItem = document.createElement('li');
  sixthItem.textContent = '6';
  fifthItem.after(sixthItem);
  const eightthItem = document.createElement('li');
  eightthItem.textContent = '8';
  parentElem.appendChild(eightthItem);
};

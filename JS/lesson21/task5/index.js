export { setTitle };

const setTitle = text => {
  const title = document.querySelector('.title');
  title.textContent = text;
};

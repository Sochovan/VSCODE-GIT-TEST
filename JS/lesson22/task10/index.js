const button = document.querySelectorAll('.pagination__page');

const handleClick = event => {
  button.forEach(pageNumber => console.log(event.target.textContent));
};

button[0].addEventListener('click', handleClick);
button[1].addEventListener('click', handleClick);
button[2].addEventListener('click', handleClick);

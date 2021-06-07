const button = document.querySelectorAll('.btn');

const handleClick = event => {
  button.forEach(target => console.log(event.target.textContent));
};

button[0].addEventListener('click', handleClick);
button[1].addEventListener('click', handleClick);

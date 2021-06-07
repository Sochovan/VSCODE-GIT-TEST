const checkbox = document.querySelector('.task-status');

const statusCheckbox = event => {
  if (event.target.checked) {
    console.log(true);
  } else {
    console.log(false);
  }
};

checkbox.addEventListener('change', statusCheckbox);

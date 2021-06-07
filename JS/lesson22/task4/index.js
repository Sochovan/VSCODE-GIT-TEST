const checkbox = document.querySelector('.task-status');

const statusCheckbox = () => {
  if (checkbox.checked) {
    console.log(true);
  } else {
    console.log(false);
  }
};

checkbox.addEventListener('change', statusCheckbox);

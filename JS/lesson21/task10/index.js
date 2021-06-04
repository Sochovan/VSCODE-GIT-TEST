export { finishForm };

const finishForm = () => {
  const form = document.querySelector('.login-form');
  const firstInput = document.querySelector('input');
  firstInput.setAttribute('type', 'password');
  const input = document.createElement('input');

  input.setAttribute('type', 'text');
  input.setAttribute('name', 'login');
  form.prepend(input);
};
console.log(finishForm());

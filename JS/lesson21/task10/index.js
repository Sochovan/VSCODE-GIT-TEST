export { finishForm };

const finishForm = () => {
  const form = document.querySelector('.login-form');
  const firstInput = document.querySelector('input');
  const input = document.createElement('input');
  form.append(input);
  input.setAttribute('name', 'login');
  firstInput.setAttribute('type', 'password');
};

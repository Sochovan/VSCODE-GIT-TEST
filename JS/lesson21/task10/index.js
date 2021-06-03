export { finishForm };

const finishForm = () => {
  const form = document.querySelector('.login-form');
  const firstInput = document.querySelector('input');
  firstInput.setAttribute('type', 'password');
  const input = document.createElement('input');

  form.append('input');
  input.setAttribute('name', 'login');
};

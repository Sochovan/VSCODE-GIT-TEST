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
// console.log(finishForm());

// export const finishForm = () => {
//   // const newInputElement = document.createElement('input');
//   // newInputElement.setAttribute('type', 'text');
//   // newInputElement.setAttribute('name', 'login');
//   // const formElementOne = document.querySelector('.login-form');
//   // formElementOne.prepend(newInputElement);
//   // const formElementTwo = document.querySelector('input[name="password"]');
//   // formElementTwo.setAttribute('type', 'password');
// };

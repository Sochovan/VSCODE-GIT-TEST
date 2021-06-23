const baseUrl = 'https://60d1e1ef5b017400178f49d0.mockapi.io/api/v1/users';

const button = document.querySelector('.submit-button');
const form = document.querySelector('.login-form');
const inputEmail = document.querySelector('#email');
const inputName = document.querySelector('#name');
const inputPasword = document.querySelector('#password');
const error = document.querySelector('.error-text');
// console.dir(button);

// button activated
// input: event
// output: undefined

const onValidateForm = () => {
  console.log('123');
  if (form.reportValidity()) {
    button.disabled = false;
  }
};
onValidateForm();

form.addEventListener('input', onValidateForm);

// get data for server
// input:event
// output: undeffined
const getFormData = event => {
  console.log('456');
  event.preventDefault();
  // const formData = [...new FormData(form)].reduce(
  //   (acc, [field, value]) => ({
  //     ...acc,
  //     [field]: value,
  //   }),
  //   {},
  // );
  const formData = `{${inputEmail.name}:${inputEmail.value}, ${inputName.name}:${inputName.value}, ${inputPasword.name}:${inputPasword.value}}`;

  console.dir(formData);

  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formData),
  })
    .then(response => response.json())
    .then(result => {
      alert(JSON.stringify(result));
      inputEmail.value = '';
      inputName.value = '';
      inputPasword.value = '';
    })
    .catch(() => {
      error.textContent = 'Failed to create user';
      // Promise.reject(new Error('Failed to create user'));
    });
};

form.addEventListener('submit', getFormData);

// input: event
// output: undefined

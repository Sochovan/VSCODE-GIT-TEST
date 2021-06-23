const baseUrl = 'https://60d1e1ef5b017400178f49d0.mockapi.io/api/v1/users';

const button = document.querySelector('.submit-button');
const form = document.querySelector('.login-form');
const inputEmail = document.querySelector('#email');
const inputName = document.querySelector('#name');
const inputPasword = document.querySelector('#password');
const error = document.querySelector('.error-text');
// console.dir(button);

// button activated
const onValidateForm = () => {
  if (form.reportValidity()) {
    button.disabled = false;
  }
};
onValidateForm();

form.addEventListener('click', onValidateForm);

// get data for server
const getFormData = event => {
  event.preventDefault();
  const formData = [...new FormData(form)].reduce(
    (acc, [field, value]) => ({
      ...acc,
      [field]: value,
    }),
    {},
  );

  alert(JSON.stringify(formData));
  inputEmail.value = '';
  inputName.value = '';
  inputPasword.value = '';
};

form.addEventListener('submit', getFormData);

// console.log(getFormData());

// post data on server

const postOnServer = formData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formData),
  });
};

form.addEventListener('click', postOnServer);

// postOnServer({ email: 'nas@gmail.com', username: 'dispatchEvent', password: '4354' });

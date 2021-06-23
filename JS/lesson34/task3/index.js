const baseUrl = 'https://60d1e1ef5b017400178f49d0.mockapi.io/api/v1/users';

const button = document.querySelector('.submit-button');
const form = document.querySelector('.login-form');
const inputs = document.querySelector('.form-input');
const error = document.querySelector('.error-text');
// console.dir(button);

// button activated
const onValidateForm = () => {
  if (form.reportValidity() === true) {
    button.disabled = false;
  }
};
onValidateForm();

form.addEventListener('click', onValidateForm);

// // get data fron server
// const getFormData = () => {
//   return fetch(baseUrl)
//     .then(response => response.json())
//     .then(result => console.log(result));
// };

// console.log(getFormData());

// // post data on server
// const postOnServer = formData => {
//   return fetch(baseUrl, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8',
//     },
//     body: JSON.stringify(formData),
//   });
// };
// inputs.innerHTML = '';
// form.addEventListener('click', postOnServer);
// // postOnServer({ email: 'nas@gmail.com', username: 'dispatchEvent', password: '4354' });

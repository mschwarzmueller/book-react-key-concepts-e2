/*
  (c) Maximilian Schwarzmüller

  This example, like all snippets and examples in this repository, is used in and referenced by my React.js book [BOOK TITLE AND LINK].
  All examples can be used and edited but no warranty or guarantee of correctness is provided by me. See the README.MD and LICENSE.MD files for more details!
*/

const emailInputElement = document.getElementById('email');
const passwordInputElement = document.getElementById('password');
const signupFormElement = document.querySelector('form');

let emailIsValid = false;
let passwordIsValid = false;

function validateEmail(enteredEmail) {
  // In reality, we might be sending the entered email address to a backend API to check if a user with that email exists already
  // Here, this is faked with help of a promise wrapper around some dummy validation logic

  const promise = new Promise(function (resolve, reject) {
    if (enteredEmail === 'test@test.com') {
      reject(new Error('Email exists already'));
    } else {
      resolve();
    }
  });

  return promise;
}

function validatePassword(enteredPassword) {
  if (enteredPassword.trim().length < 6) {
    throw new Error('Invalid password - must be at least 6 characters long.');
  }
}

async function validateInputHandler(inputType, event) {
  const targetElement = event.target;
  const enteredValue = targetElement.value;

  let validationFn = validateEmail;
  if (inputType === 'password') {
    validationFn = validatePassword;
  }

  const errorElement = document.getElementById(inputType + '-error');
  if (errorElement) {
    errorElement.remove();
  }

  let isValid = true;

  try {
    await validationFn(enteredValue);
  } catch (error) {
    const errorElement = document.createElement('p');
    errorElement.id = inputType + '-error';
    errorElement.textContent = error.message;
    targetElement.parentElement.append(errorElement);
    isValid = false;
  }

  if (inputType === 'email') {
    emailIsValid = isValid;
  } else {
    passwordIsValid = isValid;
  }
}

function submitFormHandler(event) {
  event.preventDefault();

  let title = 'An error occurred!';
  let message = 'Invalid input values - please check your entered values.';

  if (emailIsValid && passwordIsValid) {
    title = 'Success!';
    message = 'User created successfully!';
  }

  openModal(title, message);
}

function openModal(title, message) {
  const backdropElement = document.createElement('div');
  backdropElement.className = 'backdrop';

  const modalElement = document.createElement('aside');
  modalElement.className = 'modal';
  modalElement.innerHTML = `
    <header>
      <h2>${title}</h2>
    </header>
    <section>
      <p>${message}</p>
    </section>
    <section class="modal__actions">
      <button>Okay</button>
    </section>
  `;
  const confirmButtonElement = modalElement.querySelector('button');

  backdropElement.addEventListener('click', closeModal);
  confirmButtonElement.addEventListener('click', closeModal);

  document.body.append(backdropElement);
  document.body.append(modalElement);
}

function closeModal() {
  const modalElement = document.querySelector('.modal');
  const backdropElement = document.querySelector('.backdrop');

  modalElement.remove();
  backdropElement.remove();
}

emailInputElement.addEventListener(
  'blur',
  validateInputHandler.bind(null, 'email')
);
passwordInputElement.addEventListener(
  'blur',
  validateInputHandler.bind(null, 'password')
);

signupFormElement.addEventListener('submit', submitFormHandler);

const emailInputElement = document.getElementById('email'),
  passwordInputElement = document.getElementById('password'),
  signupFormElement = document.querySelector('form');
let emailIsValid = !1,
  passwordIsValid = !1;
function validateEmail(e) {
  return new Promise(function (t, n) {
    'test@test.com' === e ? n(new Error('Email exists already')) : t();
  });
}
function validatePassword(e) {
  if (e.trim().length < 6)
    throw new Error('Invalid password - must be at least 6 characters long.');
}
async function validateInputHandler(e, t) {
  const n = t.target,
    a = n.value;
  let o = validateEmail;
  'password' === e && (o = validatePassword);
  const l = document.getElementById(e + '-error');
  l && l.remove();
  let d = !0;
  try {
    await o(a);
  } catch (t) {
    const a = document.createElement('p');
    (a.id = e + '-error'),
      (a.textContent = t.message),
      n.parentElement.append(a),
      (d = !1);
  }
  'email' === e ? (emailIsValid = d) : (passwordIsValid = d);
}
function submitFormHandler(e) {
  e.preventDefault();
  let t = 'An error occurred!',
    n = 'Invalid input values - please check your entered values.';
  emailIsValid &&
    passwordIsValid &&
    ((t = 'Success!'), (n = 'User created successfully!')),
    openModal(t, n);
}
function openModal(e, t) {
  const n = document.createElement('div');
  n.className = 'backdrop';
  const a = document.createElement('aside');
  (a.className = 'modal'),
    (a.innerHTML = `\n    <header>\n      <h2>${e}</h2>\n    </header>\n    <section>\n      <p>${t}</p>\n    </section>\n    <section class="modal__actions">\n      <button>Okay</button>\n    </section>\n  `);
  const o = a.querySelector('button');
  n.addEventListener('click', closeModal),
    o.addEventListener('click', closeModal),
    document.body.append(n),
    document.body.append(a);
}
function closeModal() {
  const e = document.querySelector('.modal'),
    t = document.querySelector('.backdrop');
  e.remove(), t.remove();
}
emailInputElement.addEventListener(
  'blur',
  validateInputHandler.bind(null, 'email')
),
  passwordInputElement.addEventListener(
    'blur',
    validateInputHandler.bind(null, 'password')
  ),
  signupFormElement.addEventListener('submit', submitFormHandler);

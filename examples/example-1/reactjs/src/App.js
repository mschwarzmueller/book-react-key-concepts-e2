import { useState } from 'react';

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

function App() {
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [modalData, setModalData] = useState(null);

  async function validateInputHandler(inputType, event) {
    const enteredValue = event.target.value;

    let validationFn = validateEmail;
    if (inputType === 'password') {
      validationFn = validatePassword;
    }

    let isValid = true;

    try {
      await validationFn(enteredValue);
    } catch (error) {
      isValid = false;
    }

    if (inputType === 'email') {
      setEmailIsValid(isValid);
    } else {
      setPasswordIsValid(isValid);
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

    setModalData({
      title: title,
      message: message,
    });
  }

  function closeModal() {
    setModalData(null);
  }

  return (
    <>
      {modalData && <div className='backdrop' onClick={closeModal}></div>}
      {modalData && (
        <aside className='modal'>
          <header>
            <h2>{modalData.title}</h2>
          </header>
          <section>
            <p>{modalData.message}</p>
          </section>
          <section className='modal__actions'>
            <button onClick={closeModal}>Okay</button>
          </section>
        </aside>
      )}
      <header>
        <h1>Create a New Account</h1>
      </header>
      <main>
        <form onSubmit={submitFormHandler}>
          <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              onBlur={validateInputHandler.bind(null, 'email')}
            />
            {!emailIsValid && <p>This email is already taken!</p>}
          </div>
          <div className='form-control'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              onBlur={validateInputHandler.bind(null, 'password')}
            />
            {!passwordIsValid && (
              <p>Password must be at least 6 characters long!</p>
            )}
          </div>
          <button>Create User</button>
        </form>
      </main>
      <footer>
        <p>(c) Maximilian Schwarzmüller</p>
        <p>
          This is just a dummy example - not a fully functional website or
          anything like that.
        </p>
      </footer>
    </>
  );
}

export default App;

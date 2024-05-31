import { useState } from 'react';

function Form() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  function handleChangeEmail(event) {
    setEnteredEmail(event.target.value);
  }
  function handleChangePassword(event) {
    setEnteredPassword(event.target.value);
  }

  function handleSubmitForm(event) {
    event.preventDefault();

    const emailIsValid = enteredEmail.includes('@');
    const passwordIsValid = enteredPassword.trim().length >= 6;

    setEmailIsValid(emailIsValid);
    setPasswordIsValid(passwordIsValid);

    if (!emailIsValid || !passwordIsValid) {
      return;
    }

    // do something...
    console.log('Inputs are valid, form submitted!');
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <div>
        <label htmlFor="email" className={!emailIsValid && 'invalid'}>
          Your email
        </label>
        <input
          id="email"
          type="email"
          onChange={handleChangeEmail}
          className={!emailIsValid && 'invalid'}
        />
      </div>
      <div>
        <label htmlFor="password" className={!passwordIsValid && 'invalid'}>
          Your password
        </label>
        <input
          id="password"
          type="password"
          onChange={handleChangePassword}
          className={!passwordIsValid && 'invalid'}
        />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default Form;

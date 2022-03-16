import { useState } from 'react';

import classes from './Form.module.css';

function Form() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  function changeEmailHandler(event) {
    setEnteredEmail(event.target.value);
  }
  function changePasswordHandler(event) {
    setEnteredPassword(event.target.value);
  }

  function submitFormHandler(event) {
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
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div>
        <label
          htmlFor="email"
          className={
            !emailIsValid
              ? `${classes.label} ${classes.invalid}`
              : classes.label
          }
        >
          Your email
        </label>
        <input
          id="email"
          type="email"
          onChange={changeEmailHandler}
          className={
            !emailIsValid
              ? `${classes.input} ${classes.invalid}`
              : classes.input
          }
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className={
            !passwordIsValid
              ? `${classes.label} ${classes.invalid}`
              : classes.label
          }
        >
          Your password
        </label>
        <input
          id="password"
          type="password"
          onChange={changePasswordHandler}
          className={
            !passwordIsValid
              ? `${classes.input} ${classes.invalid}`
              : classes.input
          }
        />
      </div>
      <button className={classes.button}>Submit</button>
    </form>
  );
}

export default Form;

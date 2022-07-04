import { useState } from 'react';
import classes from './Form.module.css';

function Form() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  const formIsValid = emailIsValid && passwordIsValid;

  function changeEmailHandler(event) {
    const value = event.target.value;
    setEnteredEmail(value);
    setEmailIsValid(value.includes('@'));
  }

  function changePasswordHandler(event) {
    const value = event.target.value;
    setEnteredPassword(value);
    setPasswordIsValid(value.trim().length > 7);
  }

  function submitFormHandler(event) {
    event.preventDefault();

    if (!formIsValid) {
      alert('Invalid form inputs!');
      return;
    }

    console.log('Good job!');
    console.log(enteredEmail, enteredPassword);
  }

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" onChange={changeEmailHandler} />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" onChange={changePasswordHandler} />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default Form;

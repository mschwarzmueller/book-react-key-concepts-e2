import { useState } from 'react';
import classes from './Form.module.css';

function Form() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(null);
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(null);

  function handleChangeEmail(event) {
    const value = event.target.value;
    setEnteredEmail(value);
    setEmailIsValid(value.includes('@'));
  }

  function handleChangePassword(event) {
    const value = event.target.value;
    setEnteredPassword(value);
    setPasswordIsValid(value.trim().length > 7);
  }

  function handleSubmitForm(event) {
    event.preventDefault();

    if (emailIsValid && passwordIsValid) {
      console.log('Good job!');
      console.log(enteredEmail, enteredPassword);
    } else if (emailIsValid === null || passwordIsValid === null) {
      alert('Looks like you forgot to fill in the form!');
    } else {
      alert('Invalid input. Please check your email and password (min. 7 characters).');
    }
  }

  return (
    <form className={classes.form} onSubmit={handleSubmitForm}>
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" onChange={handleChangeEmail} />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" onChange={handleChangePassword} />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default Form;

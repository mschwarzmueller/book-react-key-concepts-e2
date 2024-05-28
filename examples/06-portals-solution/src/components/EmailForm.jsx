import { useState } from 'react';

import ErrorDialog from './ErrorDialog.jsx';
import classes from './EmailForm.module.css';

function EmailForm() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [formIsInvalid, setFormIsInvalid] = useState(false);

  const emailIsValid = enteredEmail.includes('@');

  function handleUpdateEmail(event) {
    setEnteredEmail(event.target.value);
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    setFormIsInvalid(!emailIsValid);
  }

  return (
    <form className={classes.form} onSubmit={handleSubmitForm}>
      <label htmlFor="email">Your email</label>
      <input type="email" id="email" onChange={handleUpdateEmail} />
      {!emailIsValid && (
        <p className={classes.invalid}>Invalid email address!</p>
      )}
      {formIsInvalid && <ErrorDialog />}
      <button>Save</button>
    </form>
  );
}

export default EmailForm;

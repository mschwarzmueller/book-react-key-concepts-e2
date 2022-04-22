import { useRef, useState } from 'react';

import classes from './EmailForm.module.css';

function EmailForm() {
  // Without Refs:
  // const [enteredEmail, setEnteredEmail] = useState('');

  // With Refs:
  const emailRef = useRef();

  // Without Refs:
  // function updateEmailHandler(event) {
  //   setEnteredEmail(event.target.value);
  // }

  function submitFormHandler(event) {
    event.preventDefault();

    // Without Refs: You could use the enteredEmail state in here

    // Alternative (should not be used!):
    // const emailInputEl = document.getElementById('email');
    // const enteredEmailVal = emailInputEl.value;

    // With Refs:
    const enteredEmail = emailRef.current.value;
    // emailRef.current.value = ''; // don't reset like this!

    // could send enteredEmail to a backend server
  }

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <label htmlFor="email">Your email</label>
      <input
        ref={emailRef}
        type="email"
        id="email"
        // onChange={updateEmailHandler}
      />
      <button>Save</button>
    </form>
  );
}

export default EmailForm;

import { useState } from 'react';

import Error from './Error';

function Form() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function updateEmailHandler(event) {
    setEnteredEmail(event.target.value);
  }

  function submitFormHandler(event) {
    event.preventDefault();
    if (!enteredEmail.endsWith('.com')) {
      setErrorMessage('Only email addresses ending with .com are accepted!');
    }
  }

  return (
    <form onSubmit={submitFormHandler}>
      <div>
        <label>Email</label>
        <input type="email" onChange={updateEmailHandler} />
      </div>
      {errorMessage && <Error message={errorMessage} />}
      <button>Submit</button>
    </form>
  );
}

export default Form;

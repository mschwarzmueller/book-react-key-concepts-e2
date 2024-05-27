import { useState, useEffect, useCallback } from 'react';

function Alert() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  function handleUpdateEmail(event) {
    setEnteredEmail(event.target.value);
  }

  function handleUpdatePassword(event) {
    setEnteredPassword(event.target.value);
  }

  const validateEmail = useCallback(
    function () {
      if (!enteredEmail.includes('@')) {
        console.log('Invalid email!');
      }
    },
    [enteredEmail]
  );

  useEffect(
    function () {
      validateEmail();
    },
    [validateEmail]
  );

  return (
    <form>
      <div>
        <label>Email</label>
        <input type="email" onChange={handleUpdateEmail} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" onChange={handleUpdatePassword} />
      </div>
      <button>Save</button>
    </form>
  );
}

export default Alert;

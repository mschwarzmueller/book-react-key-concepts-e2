import { useState } from 'react';

import Validation from './Validation';
import classes from './Signup.module.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  function toggleDetailsHandler() {
    setShowDetails((isShowing) => !isShowing);
  }

  function signupHandler(event) {
    event.preventDefault();
  }

  function updateEmailHandler(event) {
    setEmail(event.target.value);
  }

  function updateConfirmEmailHandler(event) {
    setConfirmEmail(event.target.value);
  }

  function updatePasswordHandler(event) {
    setPassword(event.target.value);
  }

  return (
    <>
      <form onSubmit={signupHandler}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" onChange={updateEmailHandler} />
        </div>
        <div className="form-control">
          <label htmlFor="confirm-email">Confirm Email</label>
          <input
            id="confirm-email"
            type="email"
            onChange={updateConfirmEmailHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            onChange={updatePasswordHandler}
          />
        </div>
        <button className='main-btn'>Create Account</button>
      </form>
      <section>
        <button className='alt-btn' onClick={toggleDetailsHandler}>
          {showDetails ? 'Less' : 'More'} Information
        </button>
        {showDetails && (
          <div className={classes.details}>
            <p>
              We need this data to create an account. Data will only be used for
              authentication purposes.
            </p>
            <p>It will not be used for marketing or any other activities.</p>
          </div>
        )}
      </section>
      <Validation
        email={email}
        confirmEmail={confirmEmail}
        password={password}
      />
    </>
  );
}

export default Signup;

import { useState } from 'react';

import Validation from './Validation.jsx';
import classes from './Signup.module.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  function handleToggleDetails() {
    setShowDetails((isShowing) => !isShowing);
  }

  function handleSignup(event) {
    event.preventDefault();
  }

  function handleUpdateEmail(event) {
    setEmail(event.target.value);
  }

  function handleUpdateConfirmEmail(event) {
    setConfirmEmail(event.target.value);
  }

  function handleUpdatePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <>
      <form onSubmit={handleSignup}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" onChange={handleUpdateEmail} />
        </div>
        <div className="form-control">
          <label htmlFor="confirm-email">Confirm Email</label>
          <input
            id="confirm-email"
            type="email"
            onChange={handleUpdateConfirmEmail}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            onChange={handleUpdatePassword}
          />
        </div>
        <button className='main-btn'>Create Account</button>
      </form>
      <section>
        <button className='alt-btn' onClick={handleToggleDetails}>
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

import { useState, lazy, Suspense } from 'react';

import Login from './Login/Login.jsx';
import classes from './Authentication.module.css';

const Signup = lazy(() => import('./Signup/Signup.jsx'));
// Lazy loading Login wouldn't make sense since it's the default anyways (default mode is 'login')

function Authentication() {
  const [mode, setMode] = useState('login');

  function handleSwitchAuthMode() {
    setMode((prevMode) => (prevMode === 'login' ? 'signup' : 'login'));
  }

  let authElement = <Login />;
  let switchBtnCaption = 'Create a new account';

  if (mode !== 'login') {
    authElement = <Signup />;
    switchBtnCaption = 'Login instead';
  }

  return (
    <div className={classes.auth}>
      <h1>You must authenticate yourself first!</h1>
      <Suspense fallback={<p>Loading...</p>}>{authElement}</Suspense>
      <button className={classes.btn} onClick={handleSwitchAuthMode}>{switchBtnCaption}</button>
    </div>
  );
}

export default Authentication;

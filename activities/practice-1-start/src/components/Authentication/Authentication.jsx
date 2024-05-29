import { useState } from 'react';

import Login from './Login/Login.jsx';
import Signup from './Signup/Signup.jsx';
import classes from './Authentication.module.css';

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
      {authElement}
      <button className={classes.btn} onClick={handleSwitchAuthMode}>{switchBtnCaption}</button>
    </div>
  );
}

export default Authentication;

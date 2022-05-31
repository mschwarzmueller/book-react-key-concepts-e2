import { useState } from 'react';

import Login from './Login/Login';
import Signup from './Signup/Signup';
import classes from './Authentication.module.css';

function Authentication() {
  const [mode, setMode] = useState('login');

  function switchAuthModeHandler() {
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
      <button className={classes.btn} onClick={switchAuthModeHandler}>{switchBtnCaption}</button>
    </div>
  );
}

export default Authentication;

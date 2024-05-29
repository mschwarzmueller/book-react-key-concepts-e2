import { useState } from 'react';

import ResetPassword from './ResetPassword.jsx';

function Login() {
  const [isResetting, setIsResetting] = useState();

  function handleLogin(event) {
    event.preventDefault();
  }

  function handleStartResetPassword() {
    setIsResetting(true);
  }

  function handleFinishResetPassword() {
    setIsResetting(false);
  }

  return (
    <>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
        </div>
        <button className="main-btn">Login</button>
      </form>
      <button className="alt-btn" onClick={handleStartResetPassword}>
        Reset password
      </button>
      {isResetting && <ResetPassword onFinish={handleFinishResetPassword} />}
    </>
  );
}

export default Login;

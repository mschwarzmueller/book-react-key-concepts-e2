import { useState } from 'react';

import ResetPassword from './ResetPassword';

function Login() {
  const [isResetting, setIsResetting] = useState();

  function loginHandler(event) {
    event.preventDefault();
  }

  function startResetPasswordHandler() {
    setIsResetting(true);
  }

  function finishResetPasswordHandler() {
    setIsResetting(false);
  }

  return (
    <>
      <form onSubmit={loginHandler}>
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
      <button className="alt-btn" onClick={startResetPasswordHandler}>
        Reset password
      </button>
      {isResetting && <ResetPassword onFinish={finishResetPasswordHandler} />}
    </>
  );
}

export default Login;

import { useState } from 'react';
import logo from './assets/logo.jpg';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const credentials = { email, password };
    console.log(credentials);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <>
      <header>
        <img src={logo} alt="A lock" />
        <h1>Authentication required</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </p>
        <p className="actions">
          <button>Login</button>
        </p>
      </form>
    </>
  );
}

export default App;

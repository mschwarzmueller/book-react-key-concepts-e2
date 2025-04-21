import logo from './assets/logo.jpg';

function App() {
  function submitAction(formData) {
    const credentials = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
    console.log(credentials);
  }

  return (
    <>
      <header>
        <img src={logo} alt="A lock" />
        <h1>Authentication required</h1>
      </header>
      <form action={submitAction}>
        <p>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </p>
        <p className="actions">
          <button>Login</button>
        </p>
      </form>
    </>
  );
}

export default App;

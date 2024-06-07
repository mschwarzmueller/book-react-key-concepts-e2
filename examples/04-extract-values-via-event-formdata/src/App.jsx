import logo from './assets/logo.jpg';

function App() {
  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    const credentials = {
      email: fd.get('email'),
      password: fd.get('password'),
    };
    console.log(credentials);
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

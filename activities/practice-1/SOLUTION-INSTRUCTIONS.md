1. Use a new React project and remove the default JSX code returned by the `App` component. Instead, return a `<form>` element that contains an `<input>` of `type="text"` (for the purpose of this activity, it should not be `type="email"` to make entering incorrect email addresses easier).

   Also add a `<label>` for the `<input>` and a `<button>` that submits the form.

   The final JSX code returned by `App` should look something like this:

```jsx
function App() {
  return (
    <form>
      <label htmlFor="email">Your email</label>
      <input type="text" id="email" />
      <button>Submit</button>
    </form>
  );
}

export default App;
```

2. Register `change` events on the `<input>` element to store and update the entered email address via state:

```jsx
import { useState } from 'react';

function App() {
  const [enteredEmail, setEnteredEmail] = useState();

  function handleChangeEmail(event) {
    setEnteredEmail(event.target.value);
    // enteredEmail is then not used here, hence you could get a
    // warning related to this. You can ignore it for this example
  }

  return (
    <form>
      <label htmlFor="email">Your email</label>
      <input type="text" id="email" onChange={handleChangeEmail} />
      <button>Submit</button>
    </form>
  );
}

export default App;
```

3. Add a `submit` event handler function that is triggered every time the form is submitted. Prevent the browser default (of sending an HTTP request) by calling `event.preventDefault()` inside the `submit` event handler function.

   Also add logic to determine whether an email address is valid (contains an `@` sign) or not (no `@` sign):

```jsx
import { useState } from 'react';

function App() {
  const [enteredEmail, setEnteredEmail] = useState();

  function handleChangeEmail(event) {
    setEnteredEmail(event.target.value);
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    const emailIsValid = enteredEmail.includes('@');
    // emailIsValid is then not used here, hence you could get a
    // warning related to this. You can ignore it for this example
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <label htmlFor="email">Your email</label>
      <input type="text" id="email" onChange={handleChangeEmail} />
      <button>Submit</button>
    </form>
  );
}

export default App;
```

4. Add a new state slice (the following example has been named `inputIsInvalid` and set to `false` as a default) that stores the email validity information.

   Update the `inputIsInvalid` state based on the `emailIsValid` constant defined in `handleSubmitForm`.

   Use the state to show an error message (inside a `<p>`) conditionally:

```jsx
import { useState } from 'react';

function App() {
  const [enteredEmail, setEnteredEmail] = useState();
  const [inputIsInvalid, setInputIsInvalid] = useState(false);

  function handleChangeEmail(event) {
    setEnteredEmail(event.target.value);
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    const emailIsValid = enteredEmail.includes('@');
    setInputIsInvalid(!emailIsValid);
  }

  return (
    <section>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="email">Your email</label>
        <input type="text" id="email" onChange={handleChangeEmail} />
        <button>Submit</button>
      </form>
      {inputIsInvalid && <p>Invalid email address entered!</p>}
    </section>
  );
}

export default App;
```

  The `&&` operator is used in this example, but you could also use `if` statements, ternary expressions, or any other possible approach. 
  
  It’s also up to you whether you prefer to create and output conditional JSX elements inline (that is, directly inside of the returned JSX code) or with the help of a separate variable or constant.

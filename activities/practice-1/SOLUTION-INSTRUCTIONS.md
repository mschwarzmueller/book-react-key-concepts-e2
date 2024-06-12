1. Create a new React project and add a `Form` component function in a `components/Form.jsx` file in the project.

2. Export the component and import it into `App.jsx`.

3. Output the `<Form />` component as part of `App`'s JSX code.

4. In the component, output a `<form>` that contains two `<input>` elements as well as `<label>` elements that belong to those input elements—one input for entering an email address and another input for entering a password.

5. Add a `<button>` element that submits the form:

    ```jsx
    function Form() {
      return (
        <form>
          <div>
            <label htmlFor="email">Your email</label>
            <input id="email" type="email" />
          </div>
          <div>
            <label htmlFor="password">Your password</label>
            <input id="password" type="password" />
          </div>
          <button>Submit</button>
        </form>
      );
    }
    export default Form;
    ```

6. Add state and event handler functions to register and store entered email and password values:

    ```jsx
    import { useState } from 'react';
    function Form() {
      const [enteredEmail, setEnteredEmail] = useState('');
      const [enteredPassword, setEnteredPassword] = useState('');
      function handleChangeEmail(event) {
        setEnteredEmail(event.target.value);
      }
      function handleChangePassword(event) {
        setEnteredPassword(event.target.value);
      }
      return (
        <form>
          <div>
            <label htmlFor="email">Your email</label>
            <input id="email" type="email" onChange={handleChangeEmail} />
          </div>
          <div>
            <label htmlFor="password">Your password</label>
            <input id="password" type="password" onChange={handleChangePassword} />
          </div>
          <button>Submit</button>
        </form>
      );
    }
    export default Form;
    ```

7. Add a form submission handler function to `Form`.

8. Inside that function, validate the entered email and password values (with any validation logic of your choosing).

   The validation results (`true` or `false`) for the two input fields are then stored in two new state slices (one for the email's validity and one for the password's validity):

   ```jsx
   import { useState } from 'react';
   function Form() {
     const [enteredEmail, setEnteredEmail] = useState('');
     const [emailIsValid, setEmailIsValid] = useState(true);
     const [enteredPassword, setEnteredPassword] = useState('');
     const [passwordIsValid, setPasswordIsValid] = useState(true);
     function handleChangeEmail(event) {
       setEnteredEmail(event.target.value);
     }
     function handleChangePassword(event) {
       setEnteredPassword(event.target.value);
     }
     function handleSubmitForm(event) {
       event.preventDefault();
       const emailIsValid = enteredEmail.includes('@');
       const passwordIsValid = enteredPassword.trim().length >= 6;
       setEmailIsValid(emailIsValid);
       setPasswordIsValid(passwordIsValid);
       if (!emailIsValid || !passwordIsValid) {
         return;
       }
       // do something...
       console.log('Inputs are valid, form submitted!');
     }
     return (
       <form onSubmit={handleSubmitForm}>
         <div>
           <label htmlFor="email">Your email</label>
           <input id="email" type="email" onChange={handleChangeEmail} />
         </div>
         <div>
           <label htmlFor="password">Your password</label>
           <input
             id="password"
             type="password"
             onChange={handleChangePassword}
           />
         </div>
         <button>Submit</button>
       </form>
     );
   }
   export default Form;
   ```

9. Use the validation result state values to conditionally add the `invalid` CSS class (defined in `index.css`) to the `<label>` and `<input>` elements:

    ```jsx
    function Form() {
      // ... code didn't change, hence omitted ...
      return (
        <form onSubmit={handleSubmitForm}>
          <div>
            <label htmlFor="email" className={!emailIsValid && 'invalid'}>
              Your email
            </label>
            <input
              id="email"
              type="email"
              onChange={handleChangeEmail}
              className={!emailIsValid && 'invalid'}
            />
          </div>
          <div>
            <label htmlFor="password" className={!passwordIsValid && 'invalid'}>
              Your password
            </label>
            <input
              id="password"
              type="password"
              onChange={handleChangePassword}
              className={!passwordIsValid && 'invalid'}
            />
          </div>
          <button>Submit</button>
        </form>
      );
    }
    ```

This example does not use CSS Modules; hence, the CSS classes are added as string values and no special CSS import syntax is used here.

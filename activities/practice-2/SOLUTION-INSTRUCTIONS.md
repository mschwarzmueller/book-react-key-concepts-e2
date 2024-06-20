1. Remove the existing logic in the `Form` component that uses the `useState()` Hook for state management.

2. Import and use the `useReducer()` Hook in the `Form` component. For the moment, pass an empty (newly added) reducer function as a first argument to `useReducer()`.

   Make sure to create the reducer function outside of the component function. Also, pass an initial state value as the second argument to `useReducer()`. That initial value should be an object containing values and validity information for both the `email` and `password` fields.

   Overall, for the moment, the code in `Form.jsx` looks like this:

   ```jsx
   import { useReducer } from 'react';

   import classes from './Form.module.css';

   const initialFormState = {
     email: {
       value: '',
       isValid: null,
     },
     password: {
       value: '',
       isValid: null,
     },
   };

   function formReducer(state, action) {
     // to be added
   }

   function Form() {
     useReducer(formReducer, initialFormState);

     function handleChangeEmail(event) {
       const value = event.target.value;
     }

     function handleChangePassword(event) {
       const value = event.target.value;
     }

     function handleSubmitForm(event) {
       event.preventDefault();

       // todo ...
     }

     return (
       <form className={classes.form} onSubmit={handleSubmitForm}>
         <div className={classes.control}>
           <label htmlFor="email">Email</label>
           <input id="email" type="email" onChange={handleChangeEmail} />
         </div>
         <div className={classes.control}>
           <label htmlFor="password">Password</label>
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

3. As the next step, add the reducer function. It must handle two main types of actions: an email address change and a password change.

   In both cases, the state value must be updated appropriately (i.e., the newly entered value must be stored and the validity of the input must be derived and stored as well).

   You also must return a default value in case of unknown action types. The updated reducer function looks like this:

   ```js
   function formReducer(state, action) {
     if (action.type === 'EMAIL_CHANGE') {
       return {
         ...state,
         email: {
           value: action.payload,
           isValid: action.payload.includes('@'),
         },
       };
     }

     if (action.type === 'PASSWORD_CHANGE') {
       return {
         ...state,
         password: {
           value: action.payload,
           isValid: action.payload.trim().length > 7,
         },
       };
     }

     return initialFormState;
   }
   ```

   Please note that the `type` values you want to support (`'EMAIL_CHANGE'` and `'PASSWORD_CHANGE'` in the preceding snippet) are up to you.

   You can use any identifier values of your choice. You can also assign a different name to the `type` property (e.g., use `action.identifier` instead of `action.type`).

   Similarly, you can also use any other name than `payload` for the extra data required by the state updates. If you do choose different identifier values or property names, you must use the same values and names in the following steps.

4. Update the code where `useReducer()` is called. That Hook returns an array with exactly two elements: the current state value and a function that can be used for dispatching actions.

   Store both elements in different constants (or variables):

   ```js
   // ... more code ...
   function Form() {
     const [formState, dispatch] = useReducer(formReducer, initialFormState);
     // ... more code ...
   }
   ```

5. Dispatch the actions in the appropriate places. `'EMAIL_CHANGE'` is dispatched in the `handleChangeEmail` function and `'PASSWORD_CHANGE'` is dispatched in the `handleChangePassword` function.

   Both actions also need payload data (the value entered by the user). Pass that data along with the action via the `payload` property:

   ```js
   // ... more code ...
   function handleChangeEmail(event) {
     const value = event.target.value;
     dispatch({ type: 'EMAIL_CHANGE', payload: value });
   }

   function handleChangePassword(event) {
     const value = event.target.value;
     dispatch({ type: 'PASSWORD_CHANGE', payload: value });
   }
   // ... more code ...
   ```

6. Lastly, use the state managed via `useReducer()` in the `handleSubmit` function of the `Form` component to either output one of the two possible error message or the entered values in the developer tools console.

   The finished `Form` component code looks like this:

    ```jsx
    function Form() {
      const [formState, dispatch] = useReducer(formReducer, initialFormState);

      function handleChangeEmail(event) {
        const value = event.target.value;
        dispatch({ type: 'EMAIL_CHANGE', payload: value });
      }

      function handleChangePassword(event) {
        const value = event.target.value;
        dispatch({ type: 'PASSWORD_CHANGE', payload: value });
      }

      function handleSubmitForm(event) {
        event.preventDefault();

        if (formState.email.isValid && formState.password.isValid) {
          console.log('Good job!');
          console.log(formState.email.value, formState.password.value);
        } else if (
          formState.email.isValid === null ||
          formState.password.isValid === null
        ) {
          alert('Looks like you forgot to fill in the form!');
        } else {
          alert(
            'Invalid input. Please check your email and password (min. 7 characters).'
          );
        }
      }

      return (
        <form className={classes.form} onSubmit={handleSubmitForm}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" onChange={handleChangeEmail} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" onChange={handleChangePassword} />
          </div>
          <button>Submit</button>
        </form>
      );
    }

    export default Form;
    ```

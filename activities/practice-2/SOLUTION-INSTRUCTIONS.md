1. Finish Activity 6.1 or use the provided code on GitHub.

2. Identify all Form-related CSS rules defined in `index.css`. These are: `form {...}`, `input {...}`, `label {...}`, `button {...}` and `button:hover {...}` and `label {...}` and `label.invalid {...}`.

   You could, of course, argue that the `form`, `input`, `label`, and `button` styles should be global styles because you might have multiple forms (and inputs, labels, and buttons) in your app—not just in the `Form` component.

   This would be a valid argument, especially for bigger apps. However, in this demo, all these styles are only used in the `Form` component and therefore should be migrated.

3. Cut the identified styles from `index.css` and add them into a newly created `components/Form.module.css` file. The file must end with `.module.css` to enable the CSS Modules feature.

   Since CSS Modules need class selectors, all selectors that don't use classes right now must be changed so that `form { ... }` becomes `.form { ... }`, `input { ... }` becomes `.input { ... }`, and so on.

   The leading dots (`.`) matter because the dot is what defines a CSS class selector. The class names are up to you and don't have to be `.form`, `.input`, and so on.

   Use any class names of your choice, but you must migrate all non-class selectors to class selectors. For consistency, `input.invalid` is also changed to `.input.invalid` and `label.invalid` is changed to `.label.invalid`.

   The finished `Form.module.css` file looks like this:

   ```css
   .form {
     max-width: 30rem;
     margin: 2rem auto;
     padding: 1rem;
     border-radius: 6px;
     text-align: center;
     background-color: #eee8f8;
   }
   .input {
     display: block;
     width: 100%;
     font: inherit;
     padding: 0.5rem;
     margin-bottom: 0.5rem;
     font-size: 1.25rem;
     border-radius: 4px;
     background-color: #f9f6fc;
     border: 1px solid #ccc;
   }
   .label {
     display: block;
     margin-bottom: 0.5rem;
   }
   .button {
     cursor: pointer;
     font: inherit;
     padding: 0.5rem 1.5rem;
     background-color: #310485;
     color: white;
     border: 1px solid #310485;
     border-radius: 4px;
   }
   .button:hover {
     background-color: #250364;
   }
   .label.invalid {
     font-weight: bold;
     color: #ce0653;
   }
   .input.invalid {
     background-color: #fcbed6;
     border-color: #ce0653;
   }
   ```

4. Import `Form.module.css` into the `Form.jsx` file as follows:

   ```js
   import classes from './Form.module.css';
   ```

5. Assign the defined and imported classes to the appropriate JSX elements. Keep in mind that you must use the imported classes object to access the class names since the final class names are unknown to you (they transformed during the build process).

   For example, `<button>` receives its class (`.button`) like this: `<button className={classes.button}>`. For the conditional classes (the `.invalid` classes), the final code looks as follows:

   ```jsx
   <label
     htmlFor="email"
     className={
       !emailIsValid ? `${classes.label} ${classes.invalid}` : classes.label
     }
   >
     {' '}
     Your email >{' '}
   </label>
   ```

6. Work with extra variables that store the ternary expressions (or replace them using `if` statements) to reduce the amount of logic injected into the JSX code.

   The final `Form.jsx` file looks like this:

   ```jsx
   import { useState } from 'react';
   import classes from './Form.module.css';
   function Form() {
     // ... other code – did not change ...
     return (
       <form className={classes.form} onSubmit={handleSubmitForm}>
         <div>
           <label
             htmlFor="email"
             className={
               !emailIsValid
                 ? `${classes.label} ${classes.invalid}`
                 : classes.label
             }
           >
             Your email
           </label>
           <input
             id="email"
             type="email"
             onChange={handleChangeEmail}
             className={
               !emailIsValid
                 ? `${classes.input} ${classes.invalid}`
                 : classes.input
             }
           />
         </div>
         <div>
           <label
             htmlFor="password"
             className={
               !passwordIsValid
                 ? `${classes.label} ${classes.invalid}`
                 : classes.label
             }
           >
             Your password
           </label>
           <input
             id="password"
             type="password"
             onChange={handleChangePassword}
             className={
               !passwordIsValid
                 ? `${classes.input} ${classes.invalid}`
                 : classes.input
             }
           />
         </div>
         <button className={classes.button}>Submit</button>
       </form>
     );
   }
   export default Form;
   ```

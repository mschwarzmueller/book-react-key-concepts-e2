1. Use the solution from the previous activity, clear the index.css file and remove the `Form.module.css` file. Also remove the `Forms.module.css` import from the `Form.jsx file` and remove all usages of the `classes` object.

2. Install and configure Tailwind CSS as instructed in the official documentation: https://tailwindcss.com/docs/guides/vite.

3. Set up the general page styling by editing the `index.html` file. Add the `bg-stone-800` and `text-stone-800` classes to the `<body>` element. Of course, you can also use any other classes and colors. These are just the choices used in this solution.

4. In `Form.jsx`, apply some Tailwind CSS classes to the `<form>` and `<button>` elements. As before, you may use any classes of your choice. For this solution, the following classes are used for the `<form>`:

   ```jsx
   <form
     className="max-w-lg my-8 mx-auto p-4 rounded-md text-center bg-indigo-100"
     onSubmit={handleSubmitForm}>
   ```

   For the `<button>`, you could use these classes:

   ```jsx
   <button className="px-6 py-2 bg-indigo-800 text-white border border-indigo-800 rounded hover:bg-indigo-900">
     Submit
   </button>
   ```

5. The `<label>` and `<input>` elements must be styled conditionally, depending on whether valid values have been entered or not.

   Therefore, one strategy you could use, is to set up some shared Tailwind classes that should always be applied and combine them with classes that are needed if no invalid values have been entered (yet) or that are required if invalid values are present.
   In the example solution, in the `Form` component function, before returning the JSX code, five constant strings with Tailwind class names are created for this purpose. These string values are then applied to the `<label>` and `<input>` elements conditionally.

   The finished `Form.jsx` file therefore looks like this:

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
     const labelSharedClasses = 'block mb-2';
     const labelErrorClasses = labelSharedClasses + ' text-red-500';
     const inputSharedClasses =
       'block w-full p-2 mb-2 text-xl rounded border text-center';
     const inputBaseClasses =
       inputSharedClasses + ' bg-indigo-50 border-stone-400';
     const inputErrorClasses =
       inputBaseClasses + ' text-red-500 bg-red-50 border-red-500';
     return (
       <form
         className="max-w-lg my-8 mx-auto p-4 rounded-md text-center bg-indigo-100"
         onSubmit={handleSubmitForm}
       >
         <div>
           <label
             htmlFor="email"
             className={!emailIsValid ? labelErrorClasses : labelSharedClasses}
           >
             Your email
           </label>
           <input
             id="email"
             type="email"
             onChange={handleChangeEmail}
             className={!emailIsValid ? inputErrorClasses : inputBaseClasses}
           />
         </div>
         <div>
           <label
             htmlFor="password"
             className={
               !passwordIsValid ? labelErrorClasses : labelSharedClasses
             }
           >
             Your password
           </label>
           <input
             id="password"
             type="password"
             onChange={handleChangePassword}
             className={!passwordIsValid ? inputErrorClasses : inputBaseClasses}
           />
         </div>
         <button className="px-6 py-2 bg-indigo-800 text-white border border-indigo-800 rounded hover:bg-indigo-900">
           Submit
         </button>
       </form>
     );
   }
   export default Form;
   ```

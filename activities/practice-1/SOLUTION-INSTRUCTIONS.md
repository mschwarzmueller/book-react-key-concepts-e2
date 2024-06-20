Naturally, for an activity like this, chances are high that every developer comes up with different ideas for optimizing the app.

And indeed, there will be more than one correct solution.

Below, you will find solution steps describing the optimizations I would implement. Definitely feel free to go beyond those steps. For example, in the solution provided below, the code structure will not be changed (that is, components will not be broken apart, etc.). You could absolutely consider such measures as well though.

Four areas of possible improvement were identified for this solution:

- In the `Authentication` component, the app allows for switching between the `Login` and `Signup` forms. While the `Login` form is always loaded (it's the first thing every page visitor sees), the `Signup` area will not always be needed—existing users will very likely not create a new account after all.

  Therefore, loading the code for `Signup` lazily makes sense, especially since the `Signup` component also internally uses the `Validation` component, which is rather complex and even includes a third-party package (`react-icons`). Being able to load all that code only when it's needed ensures that the initially loaded code bundle is kept lean.

- In the `Validation` component, both the email addresses and the password are validated. While the email validation is relatively simple and straightforward, validating the password involves various regular expressions (that is, matching for text patterns). Avoiding unnecessary execution of the password validation code therefore makes sense.

- In addition, the `Validation` component function will be re-executed whenever the `Signup` component function is invoked. Since `Signup` also includes state for conditionally showing or hiding extra information (via the `"More Information"` button), ensuring that the `Validation` component is not re-evaluated unnecessarily is another important step.

- The last identified area of improvement can be found in the `Login` component. There, the `ResetPassword` component code should only be loaded when it's needed. Typically, resetting a password involves quite a bit of code and logic (for example, asking a security question, checking for bots, etc.), therefore only loading that code when it's really needed makes sense, especially since most users will not need that feature for most of their visits.

As mentioned, you could identify other areas of improvement as well. However, as explained throughout this chapter, you should be careful not to overoptimize.

Below are the solution steps to tackle the four problems described above:

1. To load the `Signup` component lazily (in the `Authentication` component), you must import two things from react: the `lazy()` function and the `Suspense` component:

   ```js
   import { useState, lazy, Suspense } from 'react';
   ```

2. As a next step, the `Signup` component import (`import Signup from './Signup/Signup.jsx'`) should be removed from `Authentication.jsx`. Instead, add code to store the lazy-loaded component in a variable or constant named `Signup`:

   ```js
   const Signup = lazy(() => import('./Signup/Signup.jsx'));
   ```

3. It's important that the variable or constant is called `Signup`, not signup. It must start with a capital character since it's used as a JSX element.

4. This constant can now be used like a component in your JSX code. However, since it's loaded lazily, the component must be wrapped with the imported `Suspense` component (in `Authentication`'s returned JSX code).

   The `Suspense` component also needs a fallback JSX element (for example, `<p>Loading…</p>`, passed to `Suspense` via its `fallback` prop).

   The final `Authentication` component looks like this:

   ```jsx
   import { useState, lazy, Suspense } from 'react';

   import Login from './Login/Login.jsx';
   import classes from './Authentication.module.css';

   const Signup = lazy(() => import('./Signup/Signup.jsx'));

   function Authentication() {
     const [mode, setMode] = useState('login');

     function handleSwitchAuthMode() {
       setMode((prevMode) => (prevMode === 'login' ? 'signup' : 'login'));
     }

     let authElement = <Login />;
     let switchBtnCaption = 'Create a new account';

     if (mode !== 'login') {
       authElement = <Signup />;
       switchBtnCaption = 'Login instead';
     }

     return (
       <div className={classes.auth}>
         <h1>You must authenticate yourself first!</h1>
         <Suspense fallback={<p>Loading...</p>}>{authElement}</Suspense>
         <button className={classes.btn} onClick={handleSwitchAuthMode}>
           {switchBtnCaption}
         </button>
       </div>
     );
   }

   export default Authentication;
   ```

5. Next, in order to avoid unnecessary code execution in the `Validation` component, start by importing the `useMemo()` Hook from react (in the `Validation.jsx` file):

   ```js
   import { useMemo } from 'react';
   ```

6. Use the `useMemo()` Hook to wrap the password validation code (the code between lines 12 to 21 in `Validation.jsx`) with it.

   Extract that code into an anonymous function that is passed as a first argument to `useMemo()`. Make sure to return an object that groups the three password validation Booleans together.

   Also, pass a second argument to `useMemo()`. It's the dependencies array and should contain the `password` variable, since changes to `password` should cause the code to execute again.

   As a last step, store the value returned by `useMemo()` in the `passwordValidityData` constant.

   The final code looks like this:

   ```js
   const passwordValidityData = useMemo(() => {
     const pwHasMinLength = password.length >= 8;
     const pwHasMinSpecChars = specCharsRegex.test(password);
     const pwHasMinNumbers = numberRegex.test(password);
     return {
       length: pwHasMinLength,
       specChars: pwHasMinSpecChars,
       numbers: pwHasMinNumbers,
     };
   }, [password]);
   ```

7. To ensure that the `Validation` component function itself is not executed unnecessarily, wrap it with React's `memo()` function.

   To do this, as a first step, import `memo` from React (still in `Validation.jsx`):

   ```js
   import { useMemo, memo } from 'react';
   ```

8. Thereafter, wrap the exported `Validation` function with `memo()`:

   ```js
   export default memo(Validation);
   ```

9. To improve the code in the `Login` component, add lazy loading for the `ResetPassword` component.

   As a first step, import both `lazy` and `Suspense` from react (in `Login.jsx`):

   ```js
   import { useState, lazy, Suspense } from 'react';
   ```

10. Next, replace the `ResetPassword` import with a constant or variable that stores the result of calling `lazy()` and passing a dynamic import function to it:

    ```js
    const ResetPassword = lazy(() => import('./ResetPassword.jsx));
    ```

11. Finally, wrap `ResetPassword` in your JSX code with React's `Suspense` component and pass an appropriate `fallback` element (e.g., `<p>Loading…</p>`) to `Suspense`.

    The final `Login` component function looks like this:

    ```jsx
    import { useState, lazy, Suspense } from 'react';

    const ResetPassword = lazy(() => import('./ResetPassword.jsx'));

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
          <Suspense fallback={<p>Loading...</p>}>
            {isResetting && <ResetPassword onFinish={handleFinishResetPassword} />}
          </Suspense>
        </>
      );
    }

    export default Login;
    ```

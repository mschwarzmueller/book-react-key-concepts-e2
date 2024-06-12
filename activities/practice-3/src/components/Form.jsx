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
          className={
            !emailIsValid
              ? labelErrorClasses
              : labelSharedClasses
          }
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
            !passwordIsValid
              ? labelErrorClasses
              : labelSharedClasses
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

import { useRef } from 'react';

import classes from './Form.module.css';
import Preferences from './Preferences';

function Form() {
  const preferencesRef = useRef({});

  function submitHandler(event) {
    event.preventDefault();

    console.log(preferencesRef.current);
    preferencesRef.current.reset();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.formControl}>
        <label htmlFor="email">Your email</label>
        <input type="email" id="email" />
      </div>
      <Preferences ref={preferencesRef} />
      <button>Submit</button>
    </form>
  );
}

export default Form;

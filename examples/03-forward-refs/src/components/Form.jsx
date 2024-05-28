import { useRef } from 'react';

import Preferences from './Preferences.jsx';
import classes from './Form.module.css';

function Form() {
  const preferencesRef = useRef({});

  function handleSubmit(event) {
    event.preventDefault();

    console.log(preferencesRef.current);
    preferencesRef.current.reset();
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
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

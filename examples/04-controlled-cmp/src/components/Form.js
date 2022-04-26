import { useState } from 'react';

import classes from './Form.module.css';
import Preferences from './Preferences';

function Form() {
  const [wantsNewProdInfo, setWantsNewProdInfo] = useState(false);
  const [wantsProdUpdateInfo, setWantsProdUpdateInfo] = useState(false);

  function updateProdInfoHandler(selection) {
    // using one shared update handler function is optional
    // you could also use two separate functions (passed to Preferences) as props
    if (selection === 'pref-new') {
      setWantsNewProdInfo((prevPref) => !prevPref);
    } else {
      setWantsProdUpdateInfo((prevPref) => !prevPref);
    }
  }

  function reset() {
    setWantsNewProdInfo(false);
    setWantsProdUpdateInfo(false);
  }

  function submitHandler(event) {
    event.preventDefault();
    // state values can be used here
    reset();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.formControl}>
        <label htmlFor="email">Your email</label>
        <input type="email" id="email" />
      </div>
      <Preferences
        newProdInfo={wantsNewProdInfo}
        prodUpdateInfo={wantsProdUpdateInfo}
        onUpdateInfo={updateProdInfoHandler}
      />
      <button>Submit</button>
    </form>
  );
}

export default Form;

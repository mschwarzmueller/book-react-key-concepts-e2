import { useState } from 'react';
// import { useState, forwardRef } from 'react'; // when using React < 19

import classes from './Preferences.module.css';

// function Preferences() {
// const Preferences = forwardRef((props, ref) => { // forwardRef needed when using React < 19
  function Preferences({ ref }) { // ref can be accepted & used like any other prop when using React >= 19
  const [wantsNewProdInfo, setWantsNewProdInfo] = useState(false);
  const [wantsProdUpdateInfo, setWantsProdUpdateInfo] = useState(false);

  function handleChangeNewProdPref() {
    setWantsNewProdInfo((prevPref) => !prevPref);
  }

  function handleChangeUpdateProdPref() {
    setWantsProdUpdateInfo((prevPref) => !prevPref);
  }

  function reset() {
    setWantsNewProdInfo(false);
    setWantsProdUpdateInfo(false);
  }

  ref.current.reset = reset;
  ref.current.selectedPreferences = {
    newProductInfo: wantsNewProdInfo,
    productUpdateInfo: wantsProdUpdateInfo,
  };

  return (
    <div className={classes.preferences}>
      <label>
        <input
          type="checkbox"
          id="pref-new"
          checked={wantsNewProdInfo}
          onChange={handleChangeNewProdPref}
        />
        <span>New Products</span>
      </label>
      <label>
        <input
          type="checkbox"
          id="pref-updates"
          checked={wantsProdUpdateInfo}
          onChange={handleChangeUpdateProdPref}
        />
        <span>Product Updates</span>
      </label>
    </div>
  );
};

export default Preferences;

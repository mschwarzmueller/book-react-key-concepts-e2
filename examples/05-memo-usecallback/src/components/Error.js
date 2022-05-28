import { memo } from 'react';

import classes from './Error.module.css';

function Error({ message, onClearError }) {
  console.log('<Error /> component function is executed.');
  if (!message) {
    return null;
  }

  return (
    <div className={classes.error}>
      <p>{message}</p>
      <button className={classes.errorBtn} onClick={onClearError}>X</button>
    </div>
  );
}

export default memo(Error);

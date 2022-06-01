import { memo } from 'react';

import classes from './Error.module.css';

function Error({ message }) {
  console.log('<Error /> component function is executed.');
  if (!message) {
    return null;
  }

  return <p className={classes.error}>{message}</p>;
}

export default Error;

// Use the following line instead, to avoid unnecessary component evaluation
// export default memo(Error);

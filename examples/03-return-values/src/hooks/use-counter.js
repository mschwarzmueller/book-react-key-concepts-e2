import { useState } from 'react';

function useCounter(initialValue, incVal, decVal) {
  const [counter, setCounter] = useState(initialValue);

  function increment() {
    setCounter((oldCounter) => oldCounter + incVal);
  }

  function decrement() {
    setCounter((oldCounter) => oldCounter - decVal);
  }

  return [counter, increment, decrement];
}

export default useCounter;

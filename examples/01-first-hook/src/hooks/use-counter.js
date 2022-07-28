import { useState } from 'react';

function useCounter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(oldCounter => oldCounter + 1);
  };

  function decrement() {
    setCounter(oldCounter => oldCounter - 1);
  };

  return { counter, increment, decrement };
};

export default useCounter;

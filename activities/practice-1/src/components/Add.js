import { useState } from 'react';

function Add() {
  const [enteredNumbers, setEnteredNumbers] = useState({ first: 0, second: 0 });

  function changeFirstNumberHandler(event) {
    setEnteredNumbers((prevNumbers) => ({
      first: +event.target.value,
      second: prevNumbers.second,
    }));
  }

  function changeSecondNumberHandler(event) {
    setEnteredNumbers((prevNumbers) => ({
      first: prevNumbers.first,
      second: +event.target.value,
    }));
  }

  const result = enteredNumbers.first + enteredNumbers.second;

  return (
    <p>
      <input type="number" onChange={changeFirstNumberHandler} /> +{' '}
      <input type="number" onChange={changeSecondNumberHandler} /> = {result}
    </p>
  );
}

export default Add;

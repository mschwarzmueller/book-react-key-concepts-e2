import { useState } from 'react';

function Add() {
  const [enteredNumbers, setEnteredNumbers] = useState({ first: 0, second: 0 });

  function handleChangeFirstNumber(event) {
    setEnteredNumbers((prevNumbers) => ({
      first: +event.target.value,
      second: prevNumbers.second,
    }));
  }

  function handleChangeSecondNumber(event) {
    setEnteredNumbers((prevNumbers) => ({
      first: prevNumbers.first,
      second: +event.target.value,
    }));
  }

  const result = enteredNumbers.first + enteredNumbers.second;

  return (
    <p>
      <input type="number" onChange={handleChangeFirstNumber} /> +{' '}
      <input type="number" onChange={handleChangeSecondNumber} /> = {result}
    </p>
  );
}

export default Add;

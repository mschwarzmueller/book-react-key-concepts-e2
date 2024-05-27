import { useState } from 'react';

import Calculation from './components/Calculation.jsx';
import Result from './components/Result.jsx';

function App() {
  const [enteredNumbers, setEnteredNumbers] = useState({ first: 0, second: 0 });
  const [chosenOperation, setChosenOperation] = useState('add'); // valid values: 'add', 'subtract', 'multiply', 'divide'

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

  function handleUpdateOperation(event) {
    setChosenOperation(event.target.value);
  }

  let result;

  if (chosenOperation === 'add') {
    result = enteredNumbers.first + enteredNumbers.second;
  } else if (chosenOperation === 'subtract') {
    result = enteredNumbers.first - enteredNumbers.second;
  } else if (chosenOperation === 'multiply') {
    result = enteredNumbers.first * enteredNumbers.second;
  } else {
    result = enteredNumbers.first / enteredNumbers.second;
  }

  return (
    <>
      <Calculation
        onFirstNumberChanged={handleChangeFirstNumber}
        onSecondNumberChanged={handleChangeSecondNumber}
        onOperationChanged={handleUpdateOperation}
      />
      <Result calculationResult={result} />
    </>
  );
}

export default App;

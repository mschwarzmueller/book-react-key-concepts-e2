1. Remove three of the four components from the previous activity and rename the remaining one to `Calculation.jsx` (also rename the function in the component file).

2. Add a `<select>` dropdown (between the two inputs) to the `Calculation` component and add the four math operations as options (`<option>` elements) to it.

   You might want to give each option a clear identifier (such as `'add'`, `'subtract'`, and so on) via the built-in `value` prop. 
   
   Remove the `result`. The finished JSX code of the Calculation component should look like this:

 ```jsx  
  return (
    <p>
      <input type="number" onChange={handleChangeFirstNumber} />
      <select>
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
      </select>
      <input type="number" onChange={handleChangeSecondNumber} />
    </p>
  );
```

3. Next, add a `Result.jsx` file with a `Result` component in the `src/components` folder. In that component, output the result of the calculation (for the moment, output some dummy number):

```jsx
function Result() {
  return <p>Result: 5000</p>;
}

export default Result;
```

4. The problem now is that the inputs are in a different component than the result. The solution is to lift the state up to a common ancestor component. 

    In this simple app, that would again be the `App` component. That component should manage the entered numbers and the chosen math operation states. It should also derive the result—dynamically, based on the chosen operation and the entered numbers. 
    
    For this, an `if` statement can be used in the component function:
```jsx   
import { useState } from 'react';

import Calculation from './components/Calculation.jsx';
import Result from './components/Result.jsx';

function App() {
  const [enteredNumbers, setEnteredNumbers] = useState({
    first: 0, second: 0 
  });
  const [chosenOperation, setChosenOperation] = useState('add'); 
  // valid state values: 'add', 'subtract', 'multiply', 'divide'

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

  // return statement omitted, will be defined in the next step
}

export default App;
```

  Since the component function will be re-executed by React whenever some state changes, `result` will be recalculated upon every state change.

5. Finally, include the two other components (`Calculation` and `Result`) in the returned JSX code of the `App` component. 

    Use props to pass the event handler functions (`handleChangeFirstNumber`, `handleChangeSecondNumber`, and `handleUpdateOperation`) to the `Calculation` component. Similarly, pass the derived result to the `Result` component. For the event handler functions, the props can be named `onXYZ` to indicate that functions are provided as values and that those functions will be used as event handler functions.

    Therefore, the returned JSX code of the App component should look like this:

```jsx    
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
```

  The `Calculation` component receives and uses the three `onXYZ` props like this:

```jsx  
function Calculation({
  onFirstNumberChanged,
  onSecondNumberChanged,
  onOperationChanged,
}) {
  return (
    <p>
      <input type="number" onChange={onFirstNumberChanged} />
      <select onChange={onOperationChanged}>
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
      </select>
      <input type="number" onChange={onSecondNumberChanged} />
    </p>
  );
}

export default Calculation;
```

  The `Result` component receives `calculationResult` and uses it like this:

```jsx  
function Result({ calculationResult }) {
  return <p>Result: {calculationResult}</p>;
}

export default Result;
```
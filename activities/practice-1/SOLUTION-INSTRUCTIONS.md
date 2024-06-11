1. Add four new components into an `src/components` folder in a new React project: `Add.jsx`, `Subtract.jsx`, `Divide.jsx`, and `Multiply.jsx` (also add appropriately named component functions inside the component files).

2. Add the following code to `Add.jsx`:

```jsx
function Add() {

  function handleChangeFirstNumber(event) {
    
  }

  function handleChangeSecondNumber(event) {
    
  }

  return (
    <p>
      <input type="number" onChange={handleChangeFirstNumber} /> + 
      <input type="number" onChange={handleChangeSecondNumber} /> = ...
    </p>
  );
}

export default Add;
```

  This component outputs a paragraph that contains two input elements (for the two numbers) and the result of the calculation. The input elements use the `onChange` prop to listen to the `change` event. Upon this event, the `handleChangeFirstNumber` and `handleChangeSecondNumber` functions are executed.

3. In order to make the component dynamic and derive the result based on the actual user input, state must be added. Import the `useState` Hook from React and initialize an object that contains a property for each of the two numbers. 

    Alternatively, you could also use two individual state slices. Update the state(s) inside the two functions that are connected to the `change` event and set the state to the entered user value. 

    Make sure you convert the entered value to a number by adding a `+` in front of the value. Otherwise, string values will be stored, which will lead to incorrect results when adding the numbers. The updated `Add.jsx` component should look like this:

```jsx
import { useState } from 'react';

function Add() {
  const [enteredNumbers, setEnteredNumbers] = useState({
    first: 0, second: 0 
  });

  function handleChangeFirstNumber(event) {
    setEnteredNumbers((prevNumbers) => ({
      first: +event.target.value, // "+" converts strings to numbers!
      second: prevNumbers.second,
    }));
  }

  function handleChangeSecondNumber(event) {
    setEnteredNumbers((prevNumbers) => ({
      first: prevNumbers.first,
      second: +event.target.value,
    }));
  }


  return (
    <p>
      <input type="number" onChange={handleChangeFirstNumber} /> + 
      <input type="number" onChange={handleChangeSecondNumber} /> = ...
    </p>
  );
}

export default Add;
```

4. Next, derive the actual result of the mathematical operation. For this, a new `result` variable or constant can be added. Set it to the result of adding the two numbers that are stored in state. 

    The finished `Add.jsx` file looks like this:

```jsx    
import { useState } from 'react';

function Add() {
  const [enteredNumbers, setEnteredNumbers] = useState({
    first: 0, second: 0 
  });

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
```

5. Finally, copy the same code into the three other component files (`Subtract.jsx`, `Multiply.jsx`, and `Divide.jsx`). Just make sure to replace the component function name (also in the `export` statement) and to update the mathematical operation.

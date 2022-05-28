import { useState } from 'react';
import Child from './Child';

function Parent() {
  console.log('<Parent /> is called.');

  const [counter, setCounter] = useState(0);

  function incCounterHandler() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  return (
    <div id="parent">
      <p>A component, nested into App, containing another component (Child).</p>
      <p>Counter: {counter}</p>
      <button onClick={incCounterHandler}>Increment</button>
      <Child />
    </div>
  );
}

export default Parent;

import { useState } from 'react';

function App() {
  console.log('Component function is executed (virtual DOM comparison is performed)');
  const [counter, setCounter] = useState(0);
  const [showCounter, setShowCounter] = useState(false);

  function handleIncCounter() {
    setCounter((prevCounter) => prevCounter + 1);
    if (!showCounter) {
      setShowCounter(true);
    }
  }

  return (
    <>
      <p>Click to increment + show or hide the counter</p>
      <button onClick={handleIncCounter}>Increment</button>
      {showCounter && <p>Counter: {counter}</p>}
    </>
  );
}

export default App;

/* Please note: This snippet is not executable - it's not part of an overall React project. */

import { useState } from 'react';

function App() {
  const [isUpdated, setIsUpdated] = useState(false);

  function updateTextHandler() {
    setIsUpdated(true);
  }

  return (
    <>
      <button onClick={updateTextHandler}>Click to change text</button>
      <p>{!isUpdated ? 'Initial text' : 'Text was changed!'}</p>
    </>
  );
}

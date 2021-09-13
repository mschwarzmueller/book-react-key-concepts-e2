/* Please note: This snippet is not executable - it's not part of an overall React project. */

import { useState } from 'react';

function App() {
  const [outputText, setOutputText] = useState(false);

  function updateTextHandler() {
    setOutputText('Text was changed!');
  }

  return (
    <>
      <button onClick={updateTextHandler}>Click to change text</button>
      <p>{outputText}</p>
    </>
  );
}

export default App;
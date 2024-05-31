import { useEffect, useState } from 'react';

function App() {
  const [pressedKey, setPressedKey] = useState();

  useEffect(() => {
    function handlePressKey(event) {
      const pressedKey = event.key;

      if (!['s', 'c', 'p'].includes(pressedKey)) {
        alert('Invalid key!');
        return;
      }
      setPressedKey(pressedKey);
    }

    window.addEventListener('keydown', handlePressKey);

    return () => window.removeEventListener('keydown', handlePressKey);
  }, []);

  let output = '';

  if (pressedKey === 's') {
    output = '😊';
  } else if (pressedKey === 'c') {
    output = '😭';
  } else if (pressedKey === 'p') {
    output = '🎉';
  }

  return (
    <main>
      <h1>Press a key!</h1>
      <p>
        Supported keys: <kbd>s</kbd>, <kbd>c</kbd>, <kbd>p</kbd>
      </p>
      <p id="output">{output}</p>
    </main>
  );
}

export default App;

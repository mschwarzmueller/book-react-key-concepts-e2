import { useEffect, useState } from 'react';

function useKeyEvent(allowedKeys) {
  const [pressedKey, setPressedKey] = useState();

  useEffect(() => {
    function handlePressKey(event) {
      const pressedKey = event.key;

      if (!allowedKeys.includes(pressedKey)) {
        alert('Invalid key!');
        return;
      }
      setPressedKey(pressedKey);
    }

    window.addEventListener('keydown', handlePressKey);

    return () => window.removeEventListener('keydown', handlePressKey);
  }, [allowedKeys]);

  return pressedKey;
}

export default useKeyEvent;

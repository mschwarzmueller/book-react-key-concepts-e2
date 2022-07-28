import { useEffect, useState } from 'react';

function useKeyEvent(allowedKeys) {
  const [pressedKey, setPressedKey] = useState();

  useEffect(() => {
    function keyPressedHandler(event) {
      const pressedKey = event.key;

      if (!allowedKeys.includes(pressedKey)) {
        alert('Invalid key!');
        return;
      }
      setPressedKey(pressedKey);
    }

    window.addEventListener('keydown', keyPressedHandler);

    return () => window.removeEventListener('keydown', keyPressedHandler);
  }, [allowedKeys]);

  return pressedKey;
}

export default useKeyEvent;

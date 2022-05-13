import { useState, useEffect } from 'react';

function Alert() {
  const [alertDone, setAlertDone] = useState(false);

  useEffect(function () {
    let timer;

    console.log('Starting Alert Timer!');
    timer = setTimeout(function () {
      console.log('Timer expired!');
      setAlertDone(true);
    }, 2000);

    return function() {
      console.log('Cleanup!');
      clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {!alertDone && <p>Relax, you still got some time!</p>}
      {alertDone && <p>Time to get up!</p>}
    </>
  );
}

export default Alert;

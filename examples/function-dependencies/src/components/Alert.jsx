import { useState, useEffect } from 'react';

function Alert() {
  const [alertMsg, setAlertMsg] = useState('Expired!');

  function handleChangeAlertMsg(event) {
    setAlertMsg(event.target.value);
  }

  function setAlert() {
    setTimeout(function () {
      console.log(alertMsg);
    }, 2000);
  }

  useEffect(function () {
    setAlert();
  }, []);

  return <input type="text" onChange={handleChangeAlertMsg} />;
}

export default Alert;

import { useState, useEffect } from 'react';

function Alert() {
  const [alertMsg, setAlertMsg] = useState('Expired!');

  function changeAlertMsgHandler(event) {
    setAlertMsg(event.target.value);
  }

  function setAlert() {
    return setTimeout(function () {
      console.log(alertMsg);
    }, 2000);
  }

  useEffect(
    function () {
      const timer = setAlert();

      return function () {
        clearTimeout(timer);
      };
    },
    [setAlert]
  );

  return <input type="text" onChange={changeAlertMsgHandler} />;
}

export default Alert;

import { useEffect } from 'react';

function Error(props) {
  const { message } = props; // destructure to extract required properties

  useEffect(
    function () {
      console.log('An error occurred!');
      console.log(props.message);
    },
    // [props] // don't use the entire props object!
    [message]
  );

  return <p>{props.message}</p>;
}

export default Error;

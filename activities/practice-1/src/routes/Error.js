import { useRouteError } from 'react-router-dom';

import Modal from '../components/Modal';

function Error() {
  const error = useRouteError();

  return (
    <Modal>
      <h1>An error occurred!</h1>
      <p>{error.message}</p>
    </Modal>
  );
}

export default Error;

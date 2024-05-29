import { createPortal } from 'react-dom';

import classes from './ResetPassword.module.css';

function ResetPassword({ onFinish }) {
  // use createPortal to inject a modal which contains a reset pw flow
  // add note that the flow would maybe be quite complex (ask for favorite animal etc)
  return createPortal(
    <>
      <div className={classes.backdrop} onClick={onFinish}>
        <dialog className={classes.modal}>
          <h2>Reset your Password</h2>
          <p>
            Some elaborate password resetting flow would start here normally.
          </p>
          <p>For this demo, it's omitted and nothing happens.</p>
          <p>
            But imagine, that this flow is rather complex and involves quite a
            bit of React code and logic.
          </p>
          <button onClick={onFinish}>Close</button>
        </dialog>
      </div>
    </>,
    document.getElementById('overlay')
  );
}

export default ResetPassword;

import classes from './ErrorDialog.module.css';

function ErrorDialog({ onClose }) {
  return (
    <>
      <div className={classes.backdrop}></div>
      <dialog className={classes.dialog} open>
        <p>
          This form contains invalid values. Please fix those errors before
          submitting the form again!
        </p>
        <button onClick={onClose}>Okay</button>
      </dialog>
    </>
  );
}

export default ErrorDialog;

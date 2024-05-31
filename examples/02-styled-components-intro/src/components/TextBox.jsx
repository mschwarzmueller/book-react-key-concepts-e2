import classes from './text-box.module.css';

function TextBox({ children, mode }) {
  let cssClasses;

  if (mode === 'alert') {
    cssClasses = classes.alert;
  } else if (mode === 'info') {
    cssClasses = classes.info;
  }

  return <p className={cssClasses}>{children}</p>;
}

export default TextBox;

function TextBox({ children, mode }) {
  let cssClasses;

  if (mode === 'alert') {
    cssClasses = 'box-alert';
  } else if (mode === 'info') {
    cssClasses = 'box-info';
  }

  return <p className={cssClasses}>{children}</p>;
}

export default TextBox;

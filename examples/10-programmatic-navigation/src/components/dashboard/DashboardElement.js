import classes from './DashboardElement.module.css';

function DashboardElement({ children }) {
  return <section className={classes.element}>{children}</section>;
}

export default DashboardElement;

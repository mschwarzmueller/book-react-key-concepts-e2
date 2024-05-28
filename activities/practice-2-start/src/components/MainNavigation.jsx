import SideDrawer from './SideDrawer.jsx';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <>
      <header className={classes.header}>
        <h1>Demo App</h1>
        <button className={classes.btn} onClick={handleOpenDrawer}>
          <div />
          <div />
          <div />
        </button>
      </header>
      {/* Should be shown conditionally: <SideDrawer />  */}
    </>
  );
}

export default MainNavigation;

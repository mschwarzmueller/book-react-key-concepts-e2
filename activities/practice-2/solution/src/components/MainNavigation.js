import { useState } from 'react';

import SideDrawer from './SideDrawer';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  function openDrawerHandler() {
    setDrawerIsOpen(true);
  }

  function closeDrawerHandler() {
    setDrawerIsOpen(false);
  }

  return (
    <>
      <header className={classes.header}>
        <h1>Demo App</h1>
        <button className={classes.btn} onClick={openDrawerHandler}>
          <div />
          <div />
          <div />
        </button>
      </header>
      {drawerIsOpen && <SideDrawer onClose={closeDrawerHandler} />}
    </>
  );
}

export default MainNavigation;

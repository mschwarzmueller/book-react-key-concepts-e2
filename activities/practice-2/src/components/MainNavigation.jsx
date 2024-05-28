import { useState } from 'react';

import SideDrawer from './SideDrawer.jsx';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  function handleOpenDrawer() {
    setDrawerIsOpen(true);
  }

  function handleCloseDrawer() {
    setDrawerIsOpen(false);
  }

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
      {drawerIsOpen && <SideDrawer onClose={handleCloseDrawer} />}
    </>
  );
}

export default MainNavigation;

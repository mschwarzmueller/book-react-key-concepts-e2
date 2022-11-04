import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';

function Root() {
  return (
    <>
      <header>
        <MainNavigation />
      </header>
      <Outlet />
    </>
  );
}

export default Root;

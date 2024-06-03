import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation.jsx';

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

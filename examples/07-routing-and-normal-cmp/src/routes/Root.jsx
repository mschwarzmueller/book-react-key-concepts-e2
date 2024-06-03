import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/shared/MainNavigation.jsx';

function Root() {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}

export default Root;

import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation.jsx';

export default function Root() {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}

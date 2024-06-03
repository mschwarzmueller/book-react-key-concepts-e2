import { NavLink, Outlet } from 'react-router-dom';

function Root() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">My Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/orders">Past Orders</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Root;

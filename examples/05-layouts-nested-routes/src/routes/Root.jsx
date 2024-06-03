import { Link, Outlet } from 'react-router-dom';

function Root() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">My Dashboard</Link>
            </li>
            <li>
              <Link to="/orders">Past Orders</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Root;

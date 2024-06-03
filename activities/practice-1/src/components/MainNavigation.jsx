import { NavLink } from 'react-router-dom';

function MainNavigation() {
  return (
    <header id="main-nav">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Browse Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

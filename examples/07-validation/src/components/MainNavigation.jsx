import { NavLink } from 'react-router-dom';

function MainNavigation() {
  return (
    <nav id="main-nav">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/posts">Posts</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;

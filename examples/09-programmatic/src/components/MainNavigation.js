import { NavLink } from 'react-router-dom';

function MainNavigation() {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink end to="/">Home</NavLink>
        </li>
        <li>
          <NavLink end to="/posts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="/posts/new">New Post</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;

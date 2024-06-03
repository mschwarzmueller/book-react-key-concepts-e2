import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <>
      <h1>The "Dashboard" route component</h1>
      <p>Go to the <Link to="/orders">Orders page</Link>.</p>
      <p>This component could display the user dashboard of some web shop.</p>
      <p>It's just a dummy example here, but you get the point.</p>
      <p>
        It's worth noting, that it's a regular React component that's activated
        by React Router because of the active route configuration.
      </p>
    </>
  );
}

export default Dashboard;

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './routes/Root.jsx';
import Dashboard from './routes/Dashboard.jsx';
import Orders from './routes/Orders.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: '/orders', element: <Orders /> },
    ],
  },
]);

function App() {
  // Adding the <header> here won't work, since this component is not rendered / controlled by React Router
  return (
    <>
      {/* <header>
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
      </header> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;

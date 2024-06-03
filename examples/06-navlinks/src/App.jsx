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
  return <RouterProvider router={router} />;
}

export default App;

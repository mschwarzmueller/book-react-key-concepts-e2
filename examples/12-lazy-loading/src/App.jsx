import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './routes/Root.jsx';
import Dashboard from './routes/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: '/orders', lazy: () => import('./routes/Orders.jsx') },
      { path: '/orders/:id', lazy: () => import('./routes/OrderDetail.jsx') },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

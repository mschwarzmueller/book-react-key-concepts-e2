import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './routes/Root.jsx';
import Welcome from './routes/Welcome.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Welcome /> },
      { path: '/products', lazy: () => import('./routes/Products.jsx') },
      {
        path: '/products/:id',
        lazy: () => import('./routes/ProductDetail.jsx'),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

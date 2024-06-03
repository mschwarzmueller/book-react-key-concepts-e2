import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './routes/Root.jsx';
import Welcome from './routes/Welcome.jsx';
import Products from './routes/Products.jsx';
import ProductDetail from './routes/ProductDetail.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Welcome /> },
      { path: '/products', element: <Products /> },
      { path: '/products/:id', element: <ProductDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

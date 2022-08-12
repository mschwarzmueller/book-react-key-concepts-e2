import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Root from './routes/Root';
import Welcome from './routes/Welcome';

const ProductDetail = lazy(() => import('./routes/ProductDetail'));
const Products = lazy(() => import('./routes/Products'));
const NotFound = lazy(() => import('./routes/NotFound'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="" element={<Welcome />} index />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

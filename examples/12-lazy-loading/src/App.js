import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/shared/Layout';
import Dashboard from './routes/Dashboard';

const OrdersRoot = lazy(() => import('./routes/OrdersRoot'));
const Orders = lazy(() => import('./routes/Orders'));
const OrderDetail = lazy(() => import('./routes/OrderDetail'));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<OrdersRoot />}>
              <Route element={<Orders />} index />
              <Route path=":id" element={<OrderDetail />} />
            </Route>
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

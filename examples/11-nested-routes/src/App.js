import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';

import Dashboard from './routes/Dashboard';
import OrderDetail from './routes/OrderDetail';
import Orders from './routes/Orders';
import OrdersRoot from './routes/OrdersRoot';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<OrdersRoot />}>
            <Route element={<Orders />} index />
            <Route path=":id" element={<OrderDetail />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

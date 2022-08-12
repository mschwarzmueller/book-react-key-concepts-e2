import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/shared/Layout';
import Dashboard from './routes/Dashboard';
import OrderDetail from './routes/OrderDetail';
import Orders from './routes/Orders';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:id" element={<OrderDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

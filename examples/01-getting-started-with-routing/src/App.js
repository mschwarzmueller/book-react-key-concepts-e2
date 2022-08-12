import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './routes/Dashboard';
import Orders from './routes/Orders';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainNavigation from './components/MainNavigation';
import ProductDetail from './routes/ProductDetail';
import Products from './routes/Products';
import Welcome from './routes/Welcome';

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

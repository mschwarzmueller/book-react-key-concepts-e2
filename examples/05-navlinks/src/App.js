import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import Dashboard from './routes/Dashboard';
import Orders from './routes/Orders';

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                style={({ isActive }) =>
                  isActive ? { fontWeight: 'bold' } : undefined
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/orders"
                style={({ isActive }) =>
                  isActive ? { fontWeight: 'bold' } : undefined
                }
              >
                All Orders
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

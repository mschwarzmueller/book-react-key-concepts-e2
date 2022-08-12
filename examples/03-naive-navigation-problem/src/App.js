import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './routes/Dashboard';
import Orders from './routes/Orders';

function App() {
  const [counter, setCounter] = useState(0);

  function incCounterHandler() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/orders">All Orders</a>
          </li>
        </ul>
      </nav>
      <p>
        {counter} - <button onClick={incCounterHandler}>Increase</button>
      </p>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

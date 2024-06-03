import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Dashboard from './routes/Dashboard.jsx';
import Orders from './routes/Orders.jsx';

const router = createBrowserRouter([
  { path: '/', element: <Dashboard /> },
  { path: '/orders', element: <Orders /> },
]);

function App() {
  const [counter, setCounter] = useState(0);

  function handleIncCounter() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  return (
    <>
      <p>
        <button onClick={handleIncCounter}>Increase Counter</button>
      </p>
      <p>Current Counter: <strong>{counter}</strong></p>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

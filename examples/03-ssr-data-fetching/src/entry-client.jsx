import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './index.css';

// hydrateRoot is called instead of createRoot() + render()
// This is because the server-side rendered content is already present in the HTML
// The client-side React app will take over from there
ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

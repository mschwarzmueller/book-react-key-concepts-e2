// This file contains the code that will be executed on the server-side

import React from 'react';
import { renderToString } from 'react-dom/server';

import App from './App.jsx';

export function render() {
  const html = renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  return { html };
}

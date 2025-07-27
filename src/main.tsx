// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import './styles/global.css';

// Only redirect once
const redirectPath = sessionStorage.redirect;
const alreadyRedirected = sessionStorage.redirected;

if (redirectPath && alreadyRedirected) {
  sessionStorage.removeItem('redirect');
  sessionStorage.removeItem('redirected');
  window.history.replaceState(null, '', redirectPath);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
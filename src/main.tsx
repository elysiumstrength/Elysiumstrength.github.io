// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import './styles/global.css';

// ✅ Restore correct path BEFORE React Router runs
const storedRedirect = sessionStorage.getItem("redirectPath");
if (storedRedirect) {
  sessionStorage.removeItem("redirectPath");
  window.history.replaceState(null, "", storedRedirect);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

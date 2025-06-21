// src/App.tsx
import { Outlet, Link } from 'react-router-dom'

import './App.css' // Import global styles

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="about">About</Link>
      </nav>
      <Outlet />
    </div>
  )
}

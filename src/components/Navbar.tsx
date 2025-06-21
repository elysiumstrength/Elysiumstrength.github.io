// src/components/Navbar.tsx
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css' // optional if you're styling with CSS

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          MyApp
        </Link>
        <nav className="navbar__nav">
          <NavLink to="/" end className="navbar__link">
            Home
          </NavLink>
          <NavLink to="/about" className="navbar__link">
            About
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

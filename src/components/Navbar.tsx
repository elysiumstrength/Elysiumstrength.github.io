// src/components/Navbar.tsx
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css' // optional if you're styling with CSS

import icon from '../assets/elysium_icon.png'

export default function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar__container">
                <Link to="/" className="navbar__logo">
                    <img src={icon} alt="Elysium Icon" className="navbar__icon" />
                    <div className="navbar__title">
                        <div className='elysium'>ELYSIUM</div>
                        <div className='strength_wellness'>Strength & Wellness</div>
                    </div>
                </Link>
                <nav className="navbar__nav">
                    <NavLink to="/" end className="button__tertiary">
                        Home
                    </NavLink>
                    <NavLink to="/Consult" className="button__tertiary">
                        Consult
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

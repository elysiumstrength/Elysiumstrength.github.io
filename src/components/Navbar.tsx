// src/components/Navbar.tsx
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

import icon from '../assets/elysium_icon.png'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="navbar">
            <div className="navbar__container">
                <nav className="left__nav">
                    <NavLink to="/Consult" className="button__tertiary" onClick={() => setMenuOpen(false)}>
                        CONSULT
                    </NavLink>
                </nav>
                <Link to="/" className="navbar__logo">
                    <img src={icon} alt="Elysium Icon" className="navbar__icon" />
                    <div className="navbar__title">
                        <div className='elysium'>ELYSIUM</div>
                        <div className='strength_wellness'>Strength & Wellness</div>
                    </div>
                </Link>
                <div className="navbar__spacer">
                    <button
                        className="navbar__hamburger"
                        aria-label="Toggle navigation"
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        <span className="navbar__hamburger-bar"></span>
                        <span className="navbar__hamburger-bar"></span>
                        <span className="navbar__hamburger-bar"></span>
                    </button>
                </div>
                <nav className={`right__nav navbar__nav${menuOpen ? ' navbar__nav--open' : ''}`}>
                    <NavLink to="/Trainers" className="button__tertiary" onClick={() => setMenuOpen(false)}>
                        TRAINERS
                    </NavLink>
                    <NavLink to="/Wellness" className="button__tertiary" onClick={() => setMenuOpen(false)}>
                        WELLNESS
                    </NavLink>
                    <NavLink to="/Amenities" className="button__tertiary" onClick={() => setMenuOpen(false)}>
                        AMENITIES
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

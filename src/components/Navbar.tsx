// src/components/Navbar.tsx
import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

import icon from '../assets/elysium_icon.png'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 480)
        }

        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)

        return () => window.removeEventListener('resize', checkScreenSize)
    }, [])

    return (
        <header className="navbar">
            <div className="navbar__container">
                <nav className="left__nav">
                    <a href="https://elysium.pushpress.com/landing/calendar" className="button__tertiary" onClick={() => setMenuOpen(false)}>
                        CONSULT
                    </a>
                </nav>
                <Link to="/" className="navbar__logo">
                    <img src={icon} alt="Elysium Icon" className="navbar__icon" />
                    <div className="navbar__title">
                        <div className='elysium'>ELYSIUM</div>
                        <div className='strength_wellness'>Strength & Wellness</div>
                    </div>
                </Link>
                <nav className="navbar__spacer">
                    <a href="https://elysium.pushpress.com/landing/calendar" className="button__tertiary" onClick={() => setMenuOpen(false)}>
                        CONSULT
                    </a>
                    <button
                        className="navbar__hamburger"
                        aria-label="Toggle navigation"
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        <span className="navbar__hamburger-bar"></span>
                        <span className="navbar__hamburger-bar"></span>
                        <span className="navbar__hamburger-bar"></span>
                    </button>
                </nav>
                <nav className={`right__nav navbar__nav${menuOpen ? ' navbar__nav--open' : ''}`}>
                    {isMobile && (
                        <a href="https://elysium.pushpress.com/landing/calendar" className="button__tertiary" onClick={() => setMenuOpen(false)}>
                            CONSULT
                        </a>
                    )}
                    <NavLink to="/trainers" className="button__tertiary" onClick={() => setMenuOpen(false)}>
                        TRAINERS
                    </NavLink>
                    <NavLink to="/wellness" className="button__tertiary" onClick={() => setMenuOpen(false)}>
                        WELLNESS
                    </NavLink>
                    <NavLink to="/community" className="button__tertiary" onClick={() => setMenuOpen(false)}>
                        COMMUNITY
                    </NavLink>
                    <NavLink to="/pricing" className="button__tertiary" onClick={() => setMenuOpen(false)}>
                        PRICING
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

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
            setIsMobile(window.innerWidth <= 768)
            // Close menu when screen becomes larger
            if (window.innerWidth > 1480) {
                setMenuOpen(false)
            }
        }

        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)

        return () => window.removeEventListener('resize', checkScreenSize)
    }, [])

    // Close menu on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setMenuOpen(false)
            }
        }

        if (menuOpen) {
            document.addEventListener('keydown', handleEscape)
            // Prevent body scroll when menu is open
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'unset'
        }
    }, [menuOpen])

    return (
        <header className="navbar">
            {menuOpen && <div className="navbar__backdrop" onClick={() => setMenuOpen(false)}></div>}
            <div className="navbar__container">
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
                        className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
                        aria-label="Toggle navigation"
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        <span className="navbar__hamburger-bar"></span>
                        <span className="navbar__hamburger-bar"></span>
                        <span className="navbar__hamburger-bar"></span>
                    </button>
                </nav>
                <nav className={`navbar__nav${menuOpen ? ' navbar__nav--open' : ''}`}>
                    {isMobile && (
                        <>
                            <a href="https://elysium.pushpress.com/landing/calendar" className="button__tertiary" onClick={() => setMenuOpen(false)}>
                                CONSULT
                            </a>
                            <div className="navbar__nav-divider"></div>
                        </>
                    )}
                    <NavLink to="/trainers" className="button__tertiary" onClick={() => setMenuOpen(false)}>
                        TRAINERS
                    </NavLink>
                    <div className="navbar__nav-divider"></div>
                    <NavLink to="/wellness" className="button__tertiary" onClick={() => setMenuOpen(false)}>
                        WELLNESS
                    </NavLink>
                    <div className="navbar__nav-divider"></div>
                    <NavLink to="/community" className="button__tertiary" onClick={() => setMenuOpen(false)}>
                        COMMUNITY
                    </NavLink>
                    <div className="navbar__nav-divider"></div>
                    <NavLink to="/pricing" className="button__tertiary" onClick={() => setMenuOpen(false)}>
                        PRICING
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

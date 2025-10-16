import icon from "../assets/elysium_icon.png"
import "./Footer.css"

export default function Footer() {
    return (
        <section className="footer">
            <div className="company__info">
                <div className="logo">
                    <img src={icon} alt="Elysium Icon" className="icon" />
                    <div className="company__title">
                        <h1 className='elysium'>ELYSIUM</h1>
                        <h4 className='strength_wellness'>Strength & Wellness</h4>
                    </div>
                </div>
                <div className="copyright">
                    <p>&copy; 2025 Elysium Strength & Wellness. All rights reserved.</p>
                </div>
            </div>
            <div className="contact__info">
                <div className="contact">
                    <div className="address">
                        {/* 187 S Patterson Ave, Goleta, CA 93111 */}
                        <p>187 S Patterson Ave</p>
                        <p>Goleta, CA 93111</p>
                    </div>
                    <div className="email">
                        <p>anna@elysium.training</p>
                    </div>
                </div>
            </div>
            <div className="footer__links">
                <div className="footer__category follow__us">
                    <h4>Follow</h4>
                    <ul className="social__links">
                        <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    </ul>
                </div>
                <div className="footer__category contact__us">
                    <h4>Contact</h4>
                    <ul className="contact__links">
                        <li><a href="" target="_blank" rel="noopener noreferrer">Appointment</a></li>
                    </ul>
                </div>
                <div className="footer__category learn">
                    <h4>Learn</h4>
                    <ul className="learn__links">
                        <li><a href="" target="_blank" rel="noopener noreferrer">About Us</a></li>
                        <li><a href="" target="_blank" rel="noopener noreferrer">Blog</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

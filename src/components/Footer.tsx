import icon from "../assets/elysium_icon.png"
import "./Footer.css"

export default function Footer() {
    return (
        <section className="footer">
            <div className="company__info">
                <div className="logo">
                    <img src={icon} alt="Elysium Icon" className="icon" />
                    <div className="company__title">
                        <div className='elysium'>ELYSIUM</div>
                        <div className='strength_wellness'>Strength & Wellness</div>
                    </div>
                </div>
                <div className="contact">
                    <div className="address">
                        <p>123 Fitness Lane</p>
                        <p>Wellness City, ST 12345</p>
                    </div>
                    <div className="email">
                        <p>elysiumsw@gmail.com</p>
                    </div>
                </div>
                <div className="copyright">
                    <p>&copy; 2023 Elysium Strength & Wellness. All rights reserved.</p>
                </div>
            </div>
            <div className="footer__links">
                <div className="footer__category follow__us">
                    <h3>Follow Us</h3>
                    <ul className="social__links">
                        <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    </ul>
                </div>
                <div className="footer__category contant__us">
                    <h3>Contact Us</h3>
                    <ul className="contact__links">
                        <li><a href="" target="_blank" rel="noopener noreferrer">Appointment</a></li>
                    </ul>
                </div>
                <div className="footer__category learn">
                    <h3>Learn More</h3>
                    <ul className="learn__links">
                        <li><a href="" target="_blank" rel="noopener noreferrer">About Us</a></li>
                        <li><a href="" target="_blank" rel="noopener noreferrer">Blog</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

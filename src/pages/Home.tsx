import TrainerCard from "../components/TrainerCard"
import ValueSegment from "../components/ValueSegement"

import icon from "../assets/elysium_icon.png"
import Mission from "../assets/Mission.jpg"
import Personalized_Excellence from "../assets/Personalized_Excellence.jpg"
import Integrity_Trust from "../assets/Integrity_Trust.jpg"
import Results_Through_Consistency from "../assets/Results_Through_Consistency.jpg"

import "./Home.css"

// src/pages/Home.tsx
export default function Home() {
    return (
        <>
            <section className="home">
                <div className="home__hero"> </div>
                <h1>Welcome to MyApp</h1>
                <p>This is the home page of the site.</p>
            </section>
            <section className="trainers">
                <h2 className="trainer__header">Meet Our Trainers</h2>
                <div className="trainer-list">
                    <TrainerCard
                        imageUrl="/images/trainer-jane.jpg"
                        name="Jane Doe"
                        trainerType="Strength & Conditioning Coach"
                        bio="Passionate about helping people transform their bodies safely and sustainably."
                        specializations={['Weightlifting', 'Posture Correction', 'Injury Recovery']}
                    />
                    <TrainerCard
                        imageUrl="/images/trainer-jane.jpg"
                        name="Jane Doe"
                        trainerType="Strength & Conditioning Coach"
                        bio="Passionate about helping people transform their bodies safely and sustainably."
                        specializations={['Weightlifting', 'Posture Correction', 'Injury Recovery']}
                    /><TrainerCard
                        imageUrl="/images/trainer-jane.jpg"
                        name="Jane Doe"
                        trainerType="Strength & Conditioning Coach"
                        bio="Passionate about helping people transform their bodies safely and sustainably."
                        specializations={['Weightlifting', 'Posture Correction', 'Injury Recovery']}
                    />

                </div>
            </section>
            {/* line that separates the two sections */}
            <hr className="separator" />
            <section className="survey">
                <h2 className="survey__header">Survey</h2>
                <p className="survey__text">We value your feedback! Please take a moment to fill out our survey.</p>
                <div className="button__secondary">Submit</div>
            </section>
            <section className="mission">
                <img src={Mission} alt="Mission Image" className="mission__image" />
                <div className="mission__info">
                    <h2 className="mission__header">Our Mission</h2>
                    <p className="mission__text">At our core, we are committed to empowering individuals to reach their full potential through personalized, results-driven training in a private, supportive environment. Our mission is to deliver expert guidance, build lasting confidence, and create sustainable fitness habits—one client, one session, one goal at a time.</p>
                </div>
            </section>
            <section className="values">
                <h2 className="values__header">Our Values</h2>
                <div className="values__segments">
                    <ValueSegment
                        imageUrl={Personalized_Excellence}
                        heading="Personalized Excellence"
                        text="We believe that every body is unique—so every workout should be, too. Our training programs are fully customized to align with your goals, lifestyle, and fitness level. With 1-on-1 attention and expert guidance, we ensure you make steady, sustainable progress at a pace that suits you."
                    />
                    <ValueSegment
                        imageUrl={Integrity_Trust}
                        heading="Integrity & Trust"
                        text="Fitness is personal—and so is trust. We create a safe, judgment-free environment where transparency and honesty are at the heart of every session. Our certified trainers are committed to your wellbeing, always putting your health and long-term success first."
                        reverse // ✅ This puts the image on the right side
                    />
                    <ValueSegment
                        imageUrl={Results_Through_Consistency}
                        heading="Results Through Consistency"
                        text="We know that real, lasting results come from dedication and consistency—not gimmicks. That’s why we focus on building smart, habit-driven routines that work with your lifestyle. Every session moves you forward, helping you build confidence and long-term momentum."
                    />
                </div>

            </section>
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
        </>
    )
}

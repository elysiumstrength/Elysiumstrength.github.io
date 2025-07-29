import "./MissionSection.css"

// src/sections/MissionSection.tsx
export default function MissionSection() {
    return (
        <section className="mission-section">
            <div className="mission-container">
                <div className="mission-content-wrapper">

                    {/* Decorative Elements */}
                    <div className="mission-decorative-header">
                        <div className="mission-decorative-elements">
                            <div className="mission-line-left" />
                            <div className="mission-dot" />
                            <div className="mission-line-right" />
                        </div>
                    </div>

                    {/* Main Mission Statement */}
                    <div className="mission-main-content">

                        {/* Overline */}
                        <div className="mission-overline-container">
                            <div className="mission-overline-line" />
                            <h6 className="mission-overline-text">
                                About Us
                            </h6>
                            <div className="mission-overline-line" />
                        </div>

                        {/* Main Headline */}
                        <h1 className="mission-headline">
                            What is Elysium?
                        </h1>

                        {/* Mission Content with Map */}
                        <div className="mission-content-with-map">
                            {/* Large Quote Marks */}
                            <div className="mission-quote-container">
                                <div className="mission-quote-left">
                                    "
                                </div>
                                <div className="mission-quote-right">
                                    "
                                </div>

                                {/* Mission Statement */}
                                <h4 className="mission-statement">
                                    We're a team of passionate, professional trainers united by diverse expertise and a shared commitment to growth. From former pro athletes to lifelong fitness specialists, our coaches bring a wide range of experience to the table. We set a high standard—holding monthly knowledge-sharing sessions and requiring continuing education every year—so our team is always evolving. It's how we ensure we stay at the top of our game, so you can reach the top of yours.
                                </h4>
                            </div>

                            {/* Map Section */}
                            <div className="mission-map-container">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.649923438507!2d-119.81258602344471!3d34.43564639738721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e93ff50cb729b1%3A0x342edc4c477a59d5!2s187%20S%20Patterson%20Ave%2C%20Goleta%2C%20CA%2093111!5e0!3m2!1sen!2sus!4v1753812732638!5m2!1sen!2sus"
                                    width="600"
                                    height="400"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>

                        </div>

                        {/* Call to Action */}
                        <div className="mission-cta-container">
                            <p className="mission-cta-text">
                                Learn more about our story, values, and commitment to your success.
                            </p>
                            <a href="/about" className="mission-cta-button button__secondary">
                                ABOUT US
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
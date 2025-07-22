import "./MissionSection.css"

// src/sections/MissionSection.tsx
export default function MissionSection() {
    return (
        <div className="mission-section">
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
                            <div className="mission-overline-text">
                                About Us
                            </div>
                            <div className="mission-overline-line" />
                        </div>

                        {/* Main Headline */}
                        <h2 className="mission-headline">
                            What is Elysium?
                        </h2>

                        {/* Large Quote Marks */}
                        <div className="mission-quote-container">
                            <div className="mission-quote-left">
                                "
                            </div>
                            <div className="mission-quote-right">
                                "
                            </div>

                            {/* Mission Statement */}
                            <p className="mission-statement">
                                We're a team of passionate, professional trainers united by diverse expertise and a shared commitment to growth. From former pro athletes to lifelong fitness specialists, our coaches bring a wide range of experience to the table. We set a high standard—holding monthly knowledge-sharing sessions and requiring continuing education every year—so our team is always evolving. It's how we ensure we stay at the top of our game, so you can reach the top of yours.
                            </p>
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

                    {/* Background Image - Positioned absolutely to not interfere with layout */}
                    <div className="mission-background-image" />

                </div>
            </div>
        </div>
    );
}

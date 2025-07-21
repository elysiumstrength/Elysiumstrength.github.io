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

                        {/* Three Core Values */}
                        <div className="mission-values-container">

                            {/* Value 1 */}
                            <div className="mission-value-item">
                                <div className="mission-value-icon">
                                    <div className="mission-value-number">
                                        1
                                    </div>
                                </div>
                                <h4 className="mission-value-title">
                                    Expert Guidance
                                </h4>
                                <p className="mission-value-description">
                                    Personalized training programs designed by certified professionals
                                </p>
                            </div>

                            {/* Value 2 */}
                            <div className="mission-value-item">
                                <div className="mission-value-icon">
                                    <div className="mission-value-number">
                                        2
                                    </div>
                                </div>
                                <h4 className="mission-value-title">
                                    Lasting Confidence
                                </h4>
                                <p className="mission-value-description">
                                    Building self-assurance through achievable milestones and progress
                                </p>
                            </div>

                            {/* Value 3 */}
                            <div className="mission-value-item">
                                <div className="mission-value-icon">
                                    <div className="mission-value-number">
                                        3
                                    </div>
                                </div>
                                <h4 className="mission-value-title">
                                    Sustainable Habits
                                </h4>
                                <p className="mission-value-description">
                                    Creating lifelong wellness practices that fit your lifestyle
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Background Image - Positioned absolutely to not interfere with layout */}
                    <div className="mission-background-image" />

                </div>
            </div>
        </div>
    );
}

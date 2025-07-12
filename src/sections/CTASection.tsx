import "./CTASection.css"

export default function CTASection() {
    return (
        <section className="cta">
            <div className="cta__image"></div>
            <div className="cta__content">
                <div className="cta__column">
                    <h2>Start Your Journey<br />At ELYSIUM</h2>
                    <p>Top of the line equipment in a clean welcoming atmosphere. Small private sessions with professional trainers. Coverage with a broad range of athletes and sports. Post-rehab, injury prevention and rehabilitation assistance.</p>
                    <div className="button__tertiary">SCHEDULE FREE CONSULTATION</div>
                </div>
                <div className="cta__column cta__steps">
                    <div className="cta__step">
                        <span className="cta__step-number">01</span>
                        <div>
                            <h4>Schedule a Consultation</h4>
                            <p>Discuss your fitness and lifestyle goals</p>
                        </div>
                    </div>
                    <div className="cta__step">
                        <span className="cta__step-number">02</span>
                        <div>
                            <h4>Pick a Trainer</h4>
                            <p>Browse trainers and find one who you think is best fit for you</p>
                        </div>
                    </div>
                    <div className="cta__step">
                        <span className="cta__step-number">03</span>
                        <div>
                            <h4>Find your home, until ELYSIUM</h4>
                            <p>Show up and work out!!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

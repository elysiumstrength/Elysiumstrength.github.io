import "./TestimonialsSection.css"

interface TestimonialCardProps {
    quote: string;
    name: string;
    age: string;
    achievement: string;
    rating: number;
    duration: string;
}

function TestimonialCard({ quote, name, age, achievement, rating, duration }: TestimonialCardProps) {
    return (
        <div className="testimonial-card">
            <div className="testimonial-card__content">
                <p className="testimonial-card__quote">"{quote}"</p>
                <div className="testimonial-card__rating">
                    {[...Array(rating)].map((_, i) => (
                        <span key={i} className="star">★</span>
                    ))}
                </div>
                <div className="testimonial-card__author">
                    <h4 className="testimonial-card__name">{name}, {age}</h4>
                    <h6 className="testimonial-card__achievement">{achievement}</h6>
                    <small className="testimonial-card__duration">{duration}</small>
                </div>
            </div>
        </div>
    );
}

export default function TestimonialsSection() {
    const testimonials = [
        {
            quote: "Elysium transformed my approach to fitness. The personal attention and tailored nutrition plan helped me lose 35 pounds while building lean muscle. I've never felt stronger or more confident in my body.",
            name: "Sarah Martinez",
            age: "34",
            achievement: "Lost 35 lbs • Gained 8 lbs muscle",
            rating: 5,
            duration: "8 months"
        },
        {
            quote: "After my knee surgery, I thought my athletic days were over. The physical therapy and specialized training at Elysium got me back to playing tennis competitively. The team here truly cares about your goals.",
            name: "Mike Thompson",
            age: "42",
            achievement: "Returned to competitive tennis",
            rating: 5,
            duration: "1 year"
        },
        {
            quote: "The body tempering and recovery sessions have been game-changers for my training. I'm hitting PRs I never thought possible and recovering faster than ever. The holistic approach here is unmatched.",
            name: "Jessica Chen",
            age: "28",
            achievement: "Achieved lifetime fitness goals",
            rating: 5,
            duration: "6 months"
        },
    ];

    return (
        <section className="testimonials">
            <div className="testimonials__container">

                {/* Section Header */}
                <div className="testimonials__header-section">
                    <div className="testimonials__subtitle">
                        <div className="testimonials__line"></div>
                        <h6 className="testimonials__subtitle-text">Success Stories</h6>
                        <div className="testimonials__line"></div>
                    </div>

                    <h1 className="testimonials__title">Client Testimonials</h1>

                    <h5 className="testimonials__description">
                        Real transformations from real people. Discover how our comprehensive approach to fitness has helped clients achieve their goals and transform their lives.
                    </h5>
                </div>

                {/* Success Metrics */}
                <div className="testimonials__metrics">
                    <div className="metric">
                        <h2 className="metric__number">200+</h2>
                        <h6 className="metric__label">Clients Transformed</h6>
                    </div>

                    <div className="metric__divider"></div>

                    <div className="metric">
                        <h2 className="metric__number">4.9★</h2>
                        <h6 className="metric__label">Average Rating</h6>
                    </div>

                    <div className="metric__divider"></div>

                    <div className="metric">
                        <h2 className="metric__number">95%</h2>
                        <h6 className="metric__label">Goal Achievement Rate</h6>
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div className="testimonials__grid">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            quote={testimonial.quote}
                            name={testimonial.name}
                            age={testimonial.age}
                            achievement={testimonial.achievement}
                            rating={testimonial.rating}
                            duration={testimonial.duration}
                        />
                    ))}
                </div>

                {/* Call to Action */}
                <div className="testimonials__cta">
                    <p className="testimonials__cta-text">
                        Ready to start your transformation story?
                    </p>
                    <button className="testimonials__cta-button">
                        Book Your Consultation
                    </button>
                </div>

            </div>
        </section>
    )
}

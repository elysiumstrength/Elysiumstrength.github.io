import { useRef, useEffect, useState } from "react";
import "./TestimonialsSection.css"
import { TESTIMONIALS } from "../data/testimonials"

/* ---------- constants ---------- */
const FADE_MS = 400; // duration of fade animation

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
                    <h4 className="testimonial-card__name">
                        {name}{age && `, ${age}`}
                    </h4>
                    <h6 className="testimonial-card__achievement">{achievement}</h6>
                    <small className="testimonial-card__duration">{duration}</small>
                </div>
            </div>
        </div>
    );
}

export default function TestimonialsSection() {
    const rowRef = useRef<HTMLDivElement>(null);
    const fadeRef = useRef<ReturnType<typeof setTimeout> | null>(null); // store timeout id
    const [visible, setVisible] = useState(TESTIMONIALS.length); // cards per page
    const [currentPage, setPage] = useState(0);               // zero-based
    const [isFading, setFading] = useState(false);           // for CSS class
    const [isMobile, setIsMobile] = useState(false);          // track if mobile

    /* ────────── check if mobile view ────────── */
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    /* ────────── recalc cards-per-row on resize (desktop only) ────────── */
    useEffect(() => {
        if (isMobile) return; // Skip pagination logic on mobile

        const calc = () => {
            const screenWidth = window.innerWidth;
            let cardsPerPage = 3; // default to 3 cards

            if (screenWidth < 1200) {
                cardsPerPage = 2;
            }
            if (screenWidth < 800) {
                cardsPerPage = 1;
            }

            setVisible(Math.min(cardsPerPage, TESTIMONIALS.length));
        };

        calc();                               // initial
        window.addEventListener('resize', calc); // subsequent resizes
        return () => window.removeEventListener('resize', calc);
    }, [isMobile]);

    /* ────────── derive paging data (desktop only) ────────── */
    const rawTotalPages = Math.ceil(TESTIMONIALS.length / visible);
    const totalPages = isMobile ? 1 : rawTotalPages;          // show all pages on desktop, mobile shows all
    const maxTestimonialCount = isMobile ? TESTIMONIALS.length : TESTIMONIALS.length;                // show all testimonials
    const testimonialsSubset = TESTIMONIALS.slice(0, maxTestimonialCount);

    /* keep page index in-bounds whenever totals change */
    useEffect(() => {
        if (currentPage >= totalPages) setPage(totalPages - 1);
    }, [totalPages, currentPage]);

    /* helper to run fade-out → page change → fade-in (desktop only) */
    const goToPage = (next: number) => {
        if (next === currentPage || isFading || isMobile) return;        // ignore duplicates and mobile
        setFading(true);
        if (fadeRef.current !== null) {
            clearTimeout(fadeRef.current);
        }
        fadeRef.current = window.setTimeout(() => {
            setPage(next);
            setFading(false);
        }, FADE_MS);
    };

    /* ────────── automatic paging every 8s (desktop only) ────────── */
    useEffect(() => {
        if (totalPages <= 1 || isMobile) return;                          // nothing to flip or mobile
        const id = window.setInterval(() => {
            goToPage((currentPage + 1) % totalPages);
        }, 8000);                                  // 8s
        return () => clearInterval(id);
    }, [visible, totalPages, currentPage, isMobile]);                 // deps: reset on change

    /* cleanup for unmount */
    useEffect(() => () => {
        if (fadeRef.current !== null) {
            clearTimeout(fadeRef.current);
        }
    }, []);

    /* current slice */
    const offset = currentPage * visible;
    const testimonialsToShow = isMobile ? testimonialsSubset : testimonialsSubset.slice(offset, offset + visible);
    const dotIndices = [...Array(totalPages).keys()];

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
                <div
                    className={`testimonials__grid ${isFading && !isMobile ? "fading" : ""}`}
                    ref={rowRef}
                >
                    {testimonialsToShow.map((testimonial, index) => (
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

                {/* dots - only show on desktop */}
                {!isMobile && totalPages > 1 && (
                    <div className="testimonials__dots">
                        {dotIndices.map(i => (
                            <button
                                key={i}
                                className={`dot ${i === currentPage ? "active" : ""}`}
                                onClick={() => goToPage(i)}
                                aria-label={`Show testimonial set ${i + 1}`}
                            />
                        ))}
                    </div>
                )}

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

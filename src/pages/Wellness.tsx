import { ExpertSpeakerSection } from '../sections';
import Nutrition from '../assets/Nutrition.jpg';
import PersonalizedExcellence from '../assets/Personalized_Excellence.jpg';
import './Wellness.css';

interface ServiceDetailSectionProps {
    title: string;
    description: string;
    benefits: string[];
    process: string[];
    bgColor: string;
    textColor: string;
    headerColor?: string;
    isReversed?: boolean;
    image: string;
}

// Detailed Service Sections
function ServiceDetailSection({ title, description, benefits, process, bgColor, textColor, headerColor, isReversed = false, image }: ServiceDetailSectionProps) {
    return (
        <section className={`service-detail-section ${bgColor}`}>
            <div className="service-detail-container">
                <div className={`service-detail-content ${isReversed ? 'service-detail-content--reversed' : ''}`}>

                    {/* Content Side */}
                    <div className="service-detail-text">
                        <div className="service-detail-header">
                            <div className="service-detail-title-row">
                                <div className="service-detail-dot" />
                                <h2 className={`service-detail-title ${headerColor || textColor}`}>
                                    {title}
                                </h2>
                            </div>

                            <p className={`service-detail-description ${textColor}`}>
                                {description}
                            </p>
                        </div>

                        <div className="service-detail-info">
                            <div className="service-detail-benefits">
                                <h4 className={`service-detail-subtitle ${headerColor || textColor}`}>
                                    Key Benefits
                                </h4>
                                <div className="service-detail-list">
                                    {benefits.map((benefit, index) => (
                                        <div key={index} className="service-detail-list-item">
                                            <div className="service-detail-bullet" />
                                            <p className={`service-detail-list-text ${textColor}`}>
                                                {benefit}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="service-detail-process">
                                <h4 className={`service-detail-subtitle ${headerColor || textColor}`}>
                                    Our Process
                                </h4>
                                <div className="service-detail-process-list">
                                    {process.map((step, index) => (
                                        <div key={index} className="service-detail-process-item">
                                            <div className="service-detail-process-number">
                                                <small className="service-detail-process-number-text">
                                                    {index + 1}
                                                </small>
                                            </div>
                                            <p className={`service-detail-process-text ${textColor}`}>
                                                {step}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <button className="button__primary">
                            LEARN MORE
                        </button>
                    </div>

                    {/* Image Side */}
                    <div className="service-detail-image-container">
                        <div className="service-detail-image" style={{ backgroundImage: `url('${image}')` }} />
                    </div>

                </div>
            </div>
        </section>
    );
}

// CTA Section
function WellnessCTA() {
    return (
        <div className="wellness-cta">
            <div className="wellness-cta-container">
                <div className="wellness-cta-content">

                    <div className="wellness-cta-text">
                        <h2 className="wellness-cta-title">
                            Ready to Transform Your Wellness Journey?
                        </h2>

                        <p className="wellness-cta-description">
                            Our comprehensive wellness approach combines cutting-edge techniques with personalized care. Start your journey toward optimal health today.
                        </p>
                    </div>

                    <div className="wellness-cta-buttons">
                        <a href="https://elysium.pushpress.com/landing/appointments/apptpkg_b7bc861cb2f843e908da036e2ee4" className="button__primary">
                            BOOK CONSULTATION
                        </a>

                        <button className="button__secondary">
                            VIEW PRICING
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Wellness() {
    const nutritionData = {
        title: "Nutrition Counseling",
        description: "Custom plans. Rooted in science. Backed by care. At Elysium, our nutrition philosophy centers on whole foods and whole-person support. Whether you're navigating weight loss, hormonal shifts, chronic conditions, or just aiming to feel better in your body, we build thoughtful, sustainable plans tailored specifically to you—no fads, no one-size-fits-all solutions.",
        benefits: [
            "Truly personalized meal plans built around your lifestyle and goals",
            "Better energy, clarity, and sustainable progress",
            "Support for conditions like thyroid issues, PCOS, and metabolic resistance",
            "Access to in-house medical collaboration with Dr. Priti Gagneja",
            "Care from certified nutritionists with psychology-informed guidance"
        ],
        process: [
            "Initial consultation to assess your needs, history, and lab results",
            "Custom meal plans with revisions based on feedback and progress",
            "Weekly and monthly check-ins for accountability and alignment",
            "Education on food choices, label reading, and eating strategies",
            "Ongoing support and adjustments with long-term maintenance in mind"
        ],
        bgColor: "service-detail-section--light",
        textColor: "service-detail-text--dark",
        image: Nutrition,
    };

    const bodyTemperingData = {
        title: "Body Tempering",
        description: "Where strength and recovery meet science. At Elysium, we use weighted steel rollers to apply deep, consistent pressure that improves mobility, reduces soreness, and enhances performance. Our experienced team integrates this technique into training or recovery to help you move better and feel your best.",
        benefits: [
            "Reduces muscle soreness and tightness",
            "Improves mobility and joint function",
            "Enhances recovery and performance",
            "Promotes circulation and lymphatic flow",
            "Relieves chronic tension and supports injury prevention"
        ],
        process: [
            "Assessment and targeted treatment planning",
            "Guided body tempering by certified specialists",
            "Focused sessions for pre-lift prep or post-workout recovery",
            "Integration with your existing training regimen",
            "Adjustments based on feedback and results"
        ],
        bgColor: "service-detail-section--dark",
        textColor: "service-detail-text--light",
        headerColor: "service-detail-text--gold",
        image: PersonalizedExcellence,
    };

    return (
        <div className="wellness-page">
            {/* Hero Section with Image and Header */}
            <section className="wellness-hero">
                <div className="wellness-hero__overlay">
                    <h1 className="wellness-hero__title">WELLNESS</h1>
                </div>
            </section>

            {/* Wellness Content */}
            <div className="wellness-content">
                <ExpertSpeakerSection />

                {/* Wellness Header */}
                <section className="wellness-header-section">
                    <div className="wellness-header__container">
                        <div className="wellness-header__row">
                            <div className="wellness-header__line" />
                            <div className="wellness-header__subtitle">
                                Comprehensive Wellness
                            </div>
                            <div className="wellness-header__line" />
                        </div>
                        <h1 className="wellness-header__title">
                            Holistic Health & Recovery Solutions
                        </h1>
                        <p className='wellness-header__text'>
                            At Elysium, we believe true wellness extends beyond the gym. Our comprehensive approach combines evidence-based nutrition counseling with advanced recovery techniques to optimize your health, performance, and overall well-being.
                        </p>
                    </div>
                </section>

                <ServiceDetailSection {...nutritionData} />
                <ServiceDetailSection {...bodyTemperingData} isReversed={true} />

                <WellnessCTA />
            </div>
        </div>
    );
}

export default Wellness;

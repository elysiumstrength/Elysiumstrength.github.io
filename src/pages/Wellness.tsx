import { ExpertSpeakerSection } from '../sections';
import Nutrition from '../assets/Nutrition.jpg';
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
}

// Detailed Service Sections
function ServiceDetailSection({ title, description, benefits, process, bgColor, textColor, headerColor, isReversed = false }: ServiceDetailSectionProps) {
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
                        <div className="service-detail-image" style={{ backgroundImage: `url('${Nutrition}')` }} />
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
                        <h1 className="wellness-cta-title">
                            Ready to Transform Your Wellness Journey?
                        </h1>

                        <p className="wellness-cta-description">
                            Our comprehensive wellness approach combines cutting-edge techniques with personalized care. Start your journey toward optimal health today.
                        </p>
                    </div>

                    <div className="wellness-cta-buttons">
                        <button className="button__primary">
                            BOOK CONSULTATION
                        </button>

                        <button className="button__secondary">
                            VIEW PRICING
                        </button>
                    </div>

                    <div className="wellness-cta-contact">
                        <small className="wellness-cta-contact-text">
                            Questions? Call us at (805) 555-0123
                        </small>
                    </div>

                </div>
            </div>
        </div>
    );
}

function Wellness() {
    const nutritionData = {
        title: "Nutrition Counseling",
        description: "Transform your relationship with food through our evidence-based nutrition counseling program. Our certified nutritionists work with you to create sustainable eating habits that fuel your workouts, support your health goals, and fit seamlessly into your lifestyle.",
        benefits: [
            "Personalized meal plans tailored to your goals and preferences",
            "Improved energy levels and workout performance",
            "Better understanding of macronutrients and timing",
            "Sustainable habits that last beyond your program",
            "Support for specific dietary needs and restrictions"
        ],
        process: [
            "Nutritional assessment and goal setting consultation",
            "Custom meal planning with shopping lists and prep guides",
            "Weekly check-ins to track progress and make adjustments",
            "Education on reading labels and making informed choices",
            "Long-term maintenance strategies for lasting success"
        ],
        bgColor: "service-detail-section--light",
        textColor: "service-detail-text--dark"
    };

    const bodyTemperingData = {
        title: "Body Tempering",
        description: "Optimize your recovery and performance with our advanced body tempering techniques. Using controlled temperature therapy including infrared saunas, cryotherapy, and contrast baths, we help your body recover faster, reduce inflammation, and enhance overall wellness.",
        benefits: [
            "Accelerated muscle recovery and reduced soreness",
            "Improved circulation and lymphatic drainage",
            "Enhanced sleep quality and stress reduction",
            "Increased metabolism and fat burning",
            "Strengthened immune system function"
        ],
        process: [
            "Health screening and treatment plan consultation",
            "Customized temperature therapy protocol design",
            "Guided sessions with professional monitoring",
            "Progress tracking and protocol optimization",
            "Integration with your training and recovery routine"
        ],
        bgColor: "service-detail-section--dark",
        textColor: "service-detail-text--light",
        headerColor: "service-detail-text--gold"
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

                <ServiceDetailSection {...nutritionData} />
                <ServiceDetailSection {...bodyTemperingData} isReversed={true} />

                <WellnessCTA />
            </div>
        </div>
    );
}

export default Wellness;

import './Community.css';

interface BusinessDetailSectionProps {
    name: string;
    description: string;
    services: string[];
    contactInfo: {
        phone?: string;
        email?: string;
        website?: string;
        address?: string;
    };
    bgColor: string;
    textColor: string;
    headerColor?: string;
    isReversed?: boolean;
    image: string;
}

// Business Detail Section Component
function BusinessDetailSection({
    name,
    description,
    services,
    contactInfo,
    bgColor,
    textColor,
    headerColor,
    isReversed = false,
    image
}: BusinessDetailSectionProps) {
    return (
        <section className={`business-detail-section ${bgColor}`}>
            <div className="business-detail-container">
                <div className={`business-detail-content ${isReversed ? 'business-detail-content--reversed' : ''}`}>

                    {/* Content Side */}
                    <div className="business-detail-text">
                        <div className="business-detail-header">
                            <div className="business-detail-title-row">
                                <div className="business-detail-dot" />
                                <h2 className={`business-detail-title ${headerColor || textColor}`}>
                                    {name}
                                </h2>
                            </div>

                            <p className={`business-detail-description ${textColor}`}>
                                {description}
                            </p>
                        </div>

                        <div className="business-detail-info">
                            <div className="business-detail-services">
                                <h4 className={`business-detail-subtitle ${headerColor || textColor}`}>
                                    Services Offered
                                </h4>
                                <div className="business-detail-list">
                                    {services.map((service, index) => (
                                        <div key={index} className="business-detail-list-item">
                                            <div className="business-detail-bullet" />
                                            <p className={`business-detail-list-text ${textColor}`}>
                                                {service}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="business-detail-contact">
                                <h4 className={`business-detail-subtitle ${headerColor || textColor}`}>
                                    Contact Information
                                </h4>
                                <div className="business-detail-contact-list">
                                    {contactInfo.phone && (
                                        <div className="business-detail-contact-item">
                                            <div className="business-detail-contact-icon business-detail-contact-icon--phone"></div>
                                            <a
                                                href={`tel:${contactInfo.phone}`}
                                                className={`business-detail-contact-text ${textColor}`}
                                            >
                                                {contactInfo.phone}
                                            </a>
                                        </div>
                                    )}
                                    {contactInfo.email && (
                                        <div className="business-detail-contact-item">
                                            <div className="business-detail-contact-icon business-detail-contact-icon--email"></div>
                                            <a
                                                href={`mailto:${contactInfo.email}`}
                                                className={`business-detail-contact-text ${textColor}`}
                                            >
                                                {contactInfo.email}
                                            </a>
                                        </div>
                                    )}
                                    {contactInfo.website && (
                                        <div className="business-detail-contact-item">
                                            <div className="business-detail-contact-icon business-detail-contact-icon--website"></div>
                                            <a
                                                href={contactInfo.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`business-detail-contact-text ${textColor}`}
                                            >
                                                Visit Website
                                            </a>
                                        </div>
                                    )}
                                    {contactInfo.address && (
                                        <div className="business-detail-contact-item">
                                            <div className="business-detail-contact-icon business-detail-contact-icon--location"></div>
                                            <p className={`business-detail-contact-text ${textColor}`}>
                                                {contactInfo.address}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <button className="button__primary">
                            CONTACT {name.toUpperCase()}
                        </button>
                    </div>

                    {/* Image Side */}
                    <div className="business-detail-image-container">
                        <div className="business-detail-image" style={{ backgroundImage: `url('${image}')` }} />
                    </div>

                </div>
            </div>
        </section>
    );
}

// Community CTA Section
function CommunityCTA() {
    return (
        <div className="community-cta">
            <div className="community-cta-container">
                <div className="community-cta-content">
                    <div className="community-cta-text">
                        <h2 className="community-cta-title">
                            Ready to Connect with Our Community Partners?
                        </h2>

                        <p className="community-cta-description">
                            These trusted partners share our commitment to excellence and holistic wellness.
                            Contact them directly or let us help facilitate your introduction.
                        </p>
                    </div>

                    <div className="community-cta-buttons">
                        <button className="button__primary">
                            GET REFERRAL
                        </button>

                        <button className="button__secondary">
                            JOIN OUR NETWORK
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Community() {
    // Placeholder images - you'll want to replace these with actual business images
    const dynamitePickleballData = {
        name: "Dynamite Pickleball",
        description: "Premier pickleball facility offering professional coaching, leagues, and tournaments. Whether you're a beginner looking to learn the fastest-growing sport in America or an experienced player seeking competitive play, Dynamite Pickleball provides top-tier courts and expert instruction in a welcoming community environment.",
        services: [
            "Professional pickleball coaching and lessons",
            "Competitive leagues for all skill levels",
            "Tournament hosting and organization",
            "Court rentals and open play sessions",
            "Equipment sales and consultation",
            "Corporate team building events"
        ],
        contactInfo: {
            phone: "(555) 123-4567",
            email: "info@dynamitepickleball.com",
            website: "https://dynamitepickleball.com",
            address: "123 Sports Complex Dr, Your City, ST 12345"
        },
        bgColor: "business-detail-section--light",
        textColor: "business-detail-text--dark",
        image: "/src/assets/Gym_Interior.jpg", // Placeholder - replace with actual image
    };

    const gagnejaHealthData = {
        name: "Gagneja Health",
        description: "Comprehensive medical practice led by Dr. Priti Gagneja, focusing on integrative healthcare solutions. Combining traditional medical expertise with holistic wellness approaches, Gagneja Health provides personalized treatment plans that address the root causes of health concerns while promoting long-term wellness.",
        services: [
            "Comprehensive medical examinations and diagnostics",
            "Hormone optimization and therapy",
            "Nutritional counseling and metabolic health",
            "Preventive medicine and wellness planning",
            "Chronic disease management",
            "Integrative treatment approaches"
        ],
        contactInfo: {
            phone: "(555) 234-5678",
            email: "appointments@gagnejahealth.com",
            website: "https://gagnejahealth.com",
            address: "456 Medical Plaza, Your City, ST 12345"
        },
        bgColor: "business-detail-section--dark",
        textColor: "business-detail-text--light",
        headerColor: "business-detail-text--gold",
        image: "/src/assets/Personalized_Excellence.jpg", // Placeholder - replace with actual image
    };

    const insightTherapyData = {
        name: "Insight Therapy",
        description: "Professional mental health services specializing in individual, couples, and family therapy. Our licensed therapists provide evidence-based treatment approaches in a supportive environment, helping clients develop insight, build resilience, and achieve lasting positive change in their lives.",
        services: [
            "Individual therapy and counseling",
            "Couples and relationship therapy",
            "Family therapy and mediation",
            "Anxiety and depression treatment",
            "Stress management and coping strategies",
            "Life transitions and personal growth support"
        ],
        contactInfo: {
            phone: "(555) 345-6789",
            email: "contact@insighttherapy.com",
            website: "https://insighttherapy.com",
            address: "789 Wellness Center, Your City, ST 12345"
        },
        bgColor: "business-detail-section--light",
        textColor: "business-detail-text--dark",
        image: "/src/assets/Nutrition.jpg", // Placeholder - replace with actual image
    };

    return (
        <div className="community-page">
            {/* Hero Section */}
            <section className="community-hero">
                <div className="community-hero__overlay">
                    <h1 className="community-hero__title">COMMUNITY</h1>
                </div>
            </section>

            {/* Community Content */}
            <div className="community-content">
                {/* Community Header */}
                <section className="community-header-section">
                    <div className="community-header__container">
                        <div className="community-header__row">
                            <div className="community-header__line" />
                            <h6 className="community-header__subtitle">
                                Trusted Partners
                            </h6>
                            <div className="community-header__line" />
                        </div>
                        <h1 className="community-header__title">
                            Our Community Network
                        </h1>
                        <h5 className='community-header__text'>
                            At Elysium, we believe in the power of community and collaboration. We've partnered with exceptional businesses that share our commitment to excellence and holistic wellness. These trusted partners extend our mission beyond our walls, providing you with access to comprehensive services that support your complete health and lifestyle goals.
                        </h5>
                    </div>
                </section>

                <BusinessDetailSection {...dynamitePickleballData} />
                <BusinessDetailSection {...gagnejaHealthData} isReversed={true} />
                <BusinessDetailSection {...insightTherapyData} />

                <CommunityCTA />
            </div>
        </div>
    );
}

export default Community;

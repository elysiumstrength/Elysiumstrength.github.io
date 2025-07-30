import './Community.css';

interface PartnerCardProps {
    name: string;
    category: string;
    description: string;
    website: string;
    logoImage?: string;
}

// Featured Partners Section with New Card Design
function PartnerCard({ name, category, description, website, logoImage }: PartnerCardProps) {
    // Ensure the website has the proper protocol
    const websiteUrl = website.startsWith('http') ? website : `https://${website}`;

    return (
        <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="partner-card"
            style={{ textDecoration: 'none', color: 'inherit' }}
        >
            <div className="partner-card__container">

                {/* Logo/Image Side */}
                <div className="partner-card__logo-section">
                    <div className="partner-card__logo-container">
                        {logoImage ? (
                            <div
                                className="partner-card__logo-image"
                                style={{ backgroundImage: `url('${logoImage}')` }}
                            />
                        ) : (
                            <div className="partner-card__logo-placeholder">
                                <h2 className="partner-card__logo-letter">
                                    {name.charAt(0)}
                                </h2>
                            </div>
                        )}
                    </div>
                </div>

                {/* Content Side */}
                <div className="partner-card__content">

                    {/* Title */}
                    <div className="partner-card__header">
                        <h3 className="partner-card__name">
                            {name}
                        </h3>
                        <h6 className="partner-card__category">
                            {category}
                        </h6>
                    </div>

                    {/* Description */}
                    <p className="partner-card__description">
                        {description}
                    </p>

                    {/* Website */}
                    <p className="partner-card__website">
                        {website}
                    </p>

                </div>

            </div>
        </a>
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
    const dynamitePickleballData = {
        name: "Dynamite Pickleball",
        category: "Sports",
        description: "Our mission is to create a vibrant and inclusive community that fosters a love for pickleball at all levels of play. We are dedicated to promoting a culture of fun, fitness, and fellowship through accessible and engaging programs, expert coaching, and a supportive environment.",
        website: "dynamitepickleball.com",
        logoImage: "/src/assets/Dynamite Pickleball.svg",
    };

    const gagnejaHealthData = {
        name: "Gagneja Health",
        category: "Medical & Wellness",
        description: "At Gagneja Health, we believe in whole-body health. We hope to work with you closely on various aspects of your health, and we emphasize the impact that lifestyle, diet, and environmental factors have on your health.",
        website: "gagnejahealth.com",
        logoImage: "/src/assets/GAGNEJA HEALTH.svg",
    };

    const insightTherapyData = {
        name: "Insight Therapy",
        category: "Mental Health",
        description: "We are a group of psychotherapists and physicians who provide quality mental health care. As a mental health center, we assist client's by providing therapy, coordinated medication management with psychiatrists, coaching, and dreamwork.",
        website: "insighttherapy.com",
        logoImage: "/src/assets/Insight Therapy.webp",
    }; return (
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

                {/* Featured Partners Section */}
                <section className="partners-section">
                    <div className="partners-container">
                        <PartnerCard {...dynamitePickleballData} />
                        <PartnerCard {...gagnejaHealthData} />
                        <PartnerCard {...insightTherapyData} />
                    </div>
                </section>

                <CommunityCTA />
            </div>
        </div>
    );
}

export default Community;

import ServiceCard from "../components/ServiceCard"
import "./AdditionalServicesSection.css"

export default function AdditionalServicesSection() {
    const services = [
        {
            title: "The Elysium Plate",
            description: "Custom plans rooted in science, backed by care. Our nutrition philosophy is grounded in real, whole foods and real human connection. We meet you where you are—whether navigating weight loss, hormone shifts, chronic conditions, or simply trying to feel better in your body.",
            features: [
                "Custom meal planning with certified nutritionists",
                "Monthly check-ins & weekly phone support",
                "Lab results integration & doctor collaboration",
                "In-house physician partnership",
                "Specialized condition support (thyroid, PCOS, diabetes)",
                "Sustainable, individualized guidance"
            ]
        },
        {
            title: "Body Tempering",
            description: "Where strength and recovery meet science. Advanced soft tissue technique using weighted steel rollers to apply deep, consistent pressure to muscle groups. Proven to improve tissue quality, increase range of motion, and reduce muscle soreness.",
            features: [
                "Certified specialists with massage therapy backgrounds",
                "Release fascial adhesions & improve lymphatic flow",
                "Enhanced muscle activation & recovery",
                "Reduced soreness & improved range of motion",
                "Dedicated 50-minute focused sessions",
                "Immediate relief with long-term benefits"
            ]
        }
    ];

    return (
        <section className="additional-services">
            <div className="additional-services__container">
                <div className="additional-services__content">
                    {/* Section Header */}
                    <div className="additional-services__header">
                        <h2 className="additional-services__title">
                            Additional Areas of Support
                        </h2>
                        <div className="additional-services__divider"></div>
                        <p className="additional-services__subtitle">
                            Comprehensive wellness services that go beyond training—nutrition rooted in science and care, plus advanced recovery techniques to support every aspect of your health journey.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="additional-services__grid">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                title={service.title}
                                description={service.description}
                                features={service.features}
                            />
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="additional-services__cta">
                        <div className="additional-services__cta-text">
                            EXPLORE ALL SERVICES
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

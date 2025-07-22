import ServiceCard from "../components/ServiceCard"
import "./AdditionalServicesSection.css"

export default function AdditionalServicesSection() {
    const services = [
        {
            title: "Nutrition Counseling",
            description: "Personalized nutrition guidance tailored to your fitness goals, lifestyle, and dietary preferences.",
            features: [
                "Custom meal planning",
                "Supplement consultations",
                "Body composition analysis",
                "Metabolic assessments",
                "Ongoing nutrition coaching"
            ]
        },
        {
            title: "Body Tempering",
            description: "Advanced recovery and wellness techniques using controlled temperature therapy for optimal performance.",
            features: [
                "Contrast therapy sessions",
                "Infrared sauna treatments",
                "Cryotherapy applications",
                "Recovery optimization",
                "Stress reduction protocols"
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
                            Beyond personal training, we offer comprehensive wellness services to support every aspect of your health and fitness journey.
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

// src/components/ServiceCard.tsx
import './ServiceCard.css'

type ServiceCardProps = {
    title: string
    description: string
    features: string[]
}

export default function ServiceCard({ title, description, features }: ServiceCardProps) {
    return (
        <div className="service-card">
            <div className="service-card__content">
                <div className="service-card__title-container">
                    <div
                        className="h-3 w-3 rounded-full shrink-0"
                        style={{ backgroundColor: '#d19919' }}
                    />
                    <h2 className="service-card__title">{title}</h2>
                </div>
                <p className="service-card__description">{description}</p>
                <ul className="service-card__features">
                    {features.map((feature, index) => (
                        <li key={index} className="service-card__feature">
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

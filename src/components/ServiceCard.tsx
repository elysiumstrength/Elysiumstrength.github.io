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
                <h3 className="service-card__title">{title}</h3>
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

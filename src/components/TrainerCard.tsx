// src/components/TrainerCard.tsx
import './TrainerCard.css'

type TrainerCardProps = {
    imageUrl: string
    name: string
    trainerType: string
    bio: string
    specializations: string[]
}

export default function TrainerCard({
    imageUrl,
    name,
    trainerType,
    bio,
    specializations,
}: TrainerCardProps) {
    return (
        <div className="trainer-card">
            <img src={imageUrl} alt={`${name} photo`} className="trainer-card__img" />
            <div className="trainer-card__content">
                <h1 className="trainer-card__name">{name}</h1>
                <h2 className="trainer-card__type">{trainerType}</h2>
                <p className="trainer-card__bio">{bio}</p>
                <ul className="trainer-card__specializations">
                    {specializations.map((item, idx) => (
                        <li key={idx} className="trainer-card__spec">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

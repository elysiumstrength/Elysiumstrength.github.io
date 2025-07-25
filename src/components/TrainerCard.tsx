// src/components/TrainerCard.tsx
import './TrainerCard.css'

type TrainerCardProps = {
    imageUrl: string
    name: string
    trainerType: string
    bio: string
    specializations: string[]
    isExpanded?: boolean
    onClick?: () => void
    extendedBio?: string
}

export default function TrainerCard({
    imageUrl,
    name,
    trainerType,
    bio,
    specializations,
    isExpanded = false,
    onClick,
    extendedBio
}: TrainerCardProps) {
    const handleCardClick = () => {
        if (!isExpanded) {
            onClick?.();
        }
    };

    return (
        <div
            className={`trainer-card ${isExpanded ? 'trainer-card--expanded' : ''}`}
            onClick={handleCardClick}
        >
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
                {!isExpanded && (
                    <div className="trainer-card__click-indicator">
                        <span className="trainer-card__click-text">Click to learn more</span>
                        <svg className="trainer-card__click-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                )}
            </div>
            {isExpanded && extendedBio && (
                <div className="trainer-card__extended">
                    <div className="trainer-card__extended-header">
                        <h3>About {name}</h3>
                        <button
                            className="trainer-card__close-btn"
                            onClick={(e) => {
                                e.stopPropagation();
                                onClick?.();
                            }}
                            aria-label="Close trainer details"
                        >
                            ×
                        </button>
                    </div>
                    <p>{extendedBio}</p>
                </div>
            )}
        </div>
    )
}

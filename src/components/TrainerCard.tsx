// src/components/TrainerCard.tsx
import './TrainerCard.css'

type TrainerCardProps = {
    imageUrl: string
    name: string
    trainerType: string
    bio: string
    specializations: string[]
    isFlipped?: boolean
    onClick?: () => void
    extendedBio?: string
}

export default function TrainerCard({
    imageUrl,
    name,
    trainerType,
    bio,
    specializations,
    isFlipped = false,
    onClick,
    extendedBio
}: TrainerCardProps) {
    const handleCardClick = () => {
        onClick?.();
    };

    return (
        <div className="trainer-card-container">
            <div
                className={`trainer-card ${isFlipped ? 'trainer-card--flipped' : ''}`}
                onClick={handleCardClick}
            >
                {/* Front side of the card */}
                <div className="trainer-card__front">
                    <img src={imageUrl} alt={`${name} photo`} className="trainer-card__img" />
                    <div className="trainer-card__content">
                        <h3 className="trainer-card__name">{name}</h3>
                        <h5 className="trainer-card__type">{trainerType}</h5>
                        <p className="trainer-card__bio">{bio}</p>
                        <ul className="trainer-card__specializations">
                            {specializations.map((item, idx) => (
                                <li key={idx} className="trainer-card__spec">
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="trainer-card__click-indicator">
                            <span className="trainer-card__click-text">Click to learn more</span>
                            <svg className="trainer-card__click-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Back side of the card */}
                <div className="trainer-card__back">
                    <div className="trainer-card__back-content">
                        <div className="trainer-card__back-header">
                            <h3>About {name}</h3>
                            <button
                                className="trainer-card__close-btn"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleCardClick();
                                }}
                                aria-label="Flip back to trainer details"
                            >
                                ×
                            </button>
                        </div>
                        <p className="trainer-card__extended-bio">{extendedBio || bio}</p>
                        {/* <div className="trainer-card__back-specializations">
                            <h4>Specializations:</h4>
                            <ul>
                                {specializations.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

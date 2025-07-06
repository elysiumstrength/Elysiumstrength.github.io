// src/components/ValueSegmentFullWidth.tsx
import './ValueSegmentFullWidth.css'

type ValueSegmentFullWidthProps = {
    imageUrl: string
    heading: string
    text: string
    variant: 'green' | 'beige' // Determines color and image position
    buttonText: string
    buttonLink: string
}

export default function ValueSegmentFullWidth({
    imageUrl,
    heading,
    text,
    variant,
    buttonText,
    buttonLink,
}: ValueSegmentFullWidthProps) {
    return (
        <div className={`value-segment-full ${variant}`}>
            <div className="value-segment-full__content">
                <div className="value-segment-full__text">
                    <h2>{heading}</h2>
                    <p>{text}</p>
                </div>
                <a href={buttonLink} className="value-segment-full__button">
                    {buttonText}
                    <svg className="value-segment-full__chevron" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z" />
                    </svg>
                </a>
            </div>
            <div
                className="value-segment-full__image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
        </div>
    )
}

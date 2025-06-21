// src/components/ValueSegment.tsx
import './ValueSegment.css'

type ValueSegmentProps = {
  imageUrl: string
  heading: string
  text: string
  reverse?: boolean // Optional: if true, image appears on the right
}

export default function ValueSegment({
  imageUrl,
  heading,
  text,
  reverse = false,
}: ValueSegmentProps) {
  return (
    <section className={`value-segment ${reverse ? 'reverse' : ''}`}>
      <div className="value-segment__image">
        <img src={imageUrl} alt={heading} />
      </div>
      <div className="value-segment__text">
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
    </section>
  )
}

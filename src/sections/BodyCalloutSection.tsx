import './BodyCalloutSection.css';

interface BodyCalloutSectionProps {
  title: string;
  description: string;
  calloutTitle: string;
  calloutText: string;
  bgColor?: string;
  textColor?: string;
}

export function BodyCalloutSection({
  title,
  description,
  calloutTitle,
  calloutText,
  bgColor = '',
  textColor = '',
}: BodyCalloutSectionProps) {
  return (
    <section className={`body-callout-section ${bgColor}`}>
      <div className="body-callout-container">
        {/* Text Content */}
        <div className="body-callout-text">
          <h2 className={`body-callout-title ${textColor}`}>{title}</h2>
          <p className={`body-callout-description ${textColor}`}>{description}</p>

          {/* Callout Box */}
          <div className="body-callout-box">
            <h3 className="body-callout-box-title">{calloutTitle}</h3>
            <p className="body-callout-box-text">{calloutText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

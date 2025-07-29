import './ExpertSpeakerSection.css';

interface ExpertSpeakerCardProps {
    month: string;
    speaker: string;
    topic: string;
    expertise: string;
    date: string;
    time: string;
}

function ExpertSpeakerCard({
    month,
    speaker,
    topic,
    expertise,
    date,
    time,
}: ExpertSpeakerCardProps) {
    return (
        <div className="expert-speaker-card">
            <div className="expert-speaker-card-content">
                <div className="expert-speaker-card-header">
                    <div className="expert-speaker-month-badge">
                        <div className="expert-speaker-month-text">{month}</div>
                    </div>
                    <div className="expert-speaker-datetime">
                        {date} • {time}
                    </div>
                </div>

                <div className="expert-speaker-info">
                    <h4 className="expert-speaker-name">{speaker}</h4>
                    <h6 className="expert-speaker-expertise">{expertise}</h6>
                </div>

                <p className="expert-speaker-topic">{topic}</p>

                <button className="button-secondary expert-speaker-button">
                    <div className="expert-speaker-button-text">RESERVE SPOT</div>
                </button>
            </div>
        </div>
    );
}

function ExpertSpeakerSection() {
    const speakers = [
        {
            month: 'February',
            speaker: 'Dr. Sarah Mitchell',
            expertise: 'Sports Medicine Physician',
            topic:
                'Injury Prevention Strategies for Athletes: Building Resilience Through Movement',
            date: 'Feb 15',
            time: '7:00 PM',
        },
        {
            month: 'March',
            speaker: 'Chef Marcus Rodriguez',
            expertise: 'Clinical Nutritionist',
            topic:
                'Meal Prep Mastery: Fueling Performance with Whole Foods and Strategic Nutrition',
            date: 'Mar 20',
            time: '6:30 PM',
        },
        {
            month: 'April',
            speaker: 'Dr. Amanda Chen',
            expertise: 'Recovery Specialist',
            topic:
                'The Science of Recovery: How Temperature Therapy Optimizes Performance',
            date: 'Apr 18',
            time: '7:00 PM',
        },
    ];

    return (
        <section className="expert-speaker-section">
            <div className="expert-speaker-container">
                <div className="expert-speaker-header">
                    <div className="expert-speaker-subtitle">
                        <div className="expert-speaker-subtitle-line" />
                        <h6 className="expert-speaker-subtitle-text">
                            Monthly Education
                        </h6>
                        <div className="expert-speaker-subtitle-line" />
                    </div>

                    <h1 className="expert-speaker-title">
                        Expert Speaker Series
                    </h1>

                    <p className="expert-speaker-description">
                        Join us monthly for exclusive educational sessions with
                        leading experts in wellness, nutrition, and recovery.
                        Expand your knowledge and enhance your fitness journey.
                    </p>
                </div>

                {/* horizontally scrollable list */}
                <div className="expert-speaker-grid">
                    {speakers.map((speaker, index) => (
                        <ExpertSpeakerCard
                            key={index}
                            month={speaker.month}
                            speaker={speaker.speaker}
                            expertise={speaker.expertise}
                            topic={speaker.topic}
                            date={speaker.date}
                            time={speaker.time}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ExpertSpeakerSection;

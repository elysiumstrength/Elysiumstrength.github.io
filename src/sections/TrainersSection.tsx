import TrainerCard from "../components/TrainerCard"
import "./TrainersSection.css"

export default function TrainersSection() {
    return (
        <section className="trainers">
            <h2 className="trainer__header">Meet Our Trainers</h2>
            <div className="trainer-list">
                <TrainerCard
                    imageUrl="/images/trainer-jane.jpg"
                    name="Jane Doe"
                    trainerType="Strength & Conditioning Coach"
                    bio="Passionate about helping people transform their bodies safely and sustainably."
                    specializations={['Weightlifting', 'Posture Correction', 'Injury Recovery']}
                />
                <TrainerCard
                    imageUrl="/images/trainer-jane.jpg"
                    name="Jane Doe"
                    trainerType="Strength & Conditioning Coach"
                    bio="Passionate about helping people transform their bodies safely and sustainably."
                    specializations={['Weightlifting', 'Posture Correction', 'Injury Recovery']}
                />
                <TrainerCard
                    imageUrl="/images/trainer-jane.jpg"
                    name="Jane Doe"
                    trainerType="Strength & Conditioning Coach"
                    bio="Passionate about helping people transform their bodies safely and sustainably."
                    specializations={['Weightlifting', 'Posture Correction', 'Injury Recovery']}
                />
            </div>
            <div className="trainers__action">
                <a href="/trainers" className="button__gold">
                    View All Trainers
                    <svg className="chevron" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z" />
                    </svg>
                </a>
            </div>
        </section>
    )
}

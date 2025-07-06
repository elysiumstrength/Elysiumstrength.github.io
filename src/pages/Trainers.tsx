import TrainerCard from "../components/TrainerCard"
import landingImage from "../assets/landing_image.png"
import "./Trainers.css"

export default function Trainers() {
    const trainers = [
        {
            id: 1,
            imageUrl: "/images/trainer-jane.jpg",
            name: "Jane Smith",
            trainerType: "Strength & Conditioning Coach",
            bio: "Passionate about helping people transform their bodies safely and sustainably through evidence-based training methods.",
            specializations: ['Weightlifting', 'Posture Correction', 'Injury Recovery']
        },
        {
            id: 2,
            imageUrl: "/images/trainer-john.jpg",
            name: "John Martinez",
            trainerType: "Functional Movement Specialist",
            bio: "Dedicated to improving movement quality and athletic performance through functional training approaches.",
            specializations: ['Functional Training', 'Mobility Work', 'Sports Performance']
        },
        {
            id: 3,
            imageUrl: "/images/trainer-sarah.jpg",
            name: "Sarah Chen",
            trainerType: "Nutrition & Wellness Coach",
            bio: "Focused on holistic wellness combining fitness training with nutritional guidance for optimal results.",
            specializations: ['Nutrition Coaching', 'Weight Management', 'Lifestyle Coaching']
        },
        {
            id: 4,
            imageUrl: "/images/trainer-mike.jpg",
            name: "Mike Thompson",
            trainerType: "Powerlifting Coach",
            bio: "Experienced powerlifting coach specializing in strength development and competitive preparation.",
            specializations: ['Powerlifting', 'Strength Training', 'Competition Prep']
        },
        {
            id: 5,
            imageUrl: "/images/trainer-lisa.jpg",
            name: "Lisa Rodriguez",
            trainerType: "Rehabilitation Specialist",
            bio: "Expert in post-injury training and movement rehabilitation to help clients return to full function.",
            specializations: ['Injury Rehabilitation', 'Corrective Exercise', 'Pain Management']
        },
        {
            id: 6,
            imageUrl: "/images/trainer-david.jpg",
            name: "David Park",
            trainerType: "Olympic Weightlifting Coach",
            bio: "Former competitive weightlifter now coaching others in the technical aspects of Olympic lifting.",
            specializations: ['Olympic Lifting', 'Technique Development', 'Competition Training']
        }
    ]

    return (
        <div className="trainers-page">
            {/* Hero Section with Image and Header */}
            <section className="trainers-hero">
                <img src={landingImage} alt="Gym training environment" className="trainers-hero__image" />
                <div className="trainers-hero__overlay">
                    <h1 className="trainers-hero__title">TRAINERS</h1>
                </div>
            </section>

            {/* Trainers Grid Section */}
            <section className="trainers-content">
                <div className="trainers-content__intro">
                    <h2>Meet Our Expert Team</h2>
                    <p>Our certified trainers bring years of experience and specialized expertise to help you achieve your fitness goals. Each trainer is dedicated to providing personalized attention and results-driven programming.</p>
                </div>

                <div className="trainers-grid">
                    {trainers.map((trainer) => (
                        <TrainerCard
                            key={trainer.id}
                            imageUrl={trainer.imageUrl}
                            name={trainer.name}
                            trainerType={trainer.trainerType}
                            bio={trainer.bio}
                            specializations={trainer.specializations}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}
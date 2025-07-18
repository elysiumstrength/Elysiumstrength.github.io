import { useState, useEffect, useRef } from "react"
import TrainerCard from "../components/TrainerCard"
import "./Trainers.css"

export default function Trainers() {
    const [expandedTrainerId, setExpandedTrainerId] = useState<number | null>(null)
    const [cardsPerRow, setCardsPerRow] = useState(3)
    const containerRef = useRef<HTMLDivElement>(null)

    // Calculate cards per row based on window width
    useEffect(() => {
        const calculateCardsPerRow = () => {
            const containerWidth = Math.min(1200, window.innerWidth - 64) // Account for padding
            const cardMinWidth = 350
            const gap = 32
            const calculatedCardsPerRow = Math.floor((containerWidth + gap) / (cardMinWidth + gap))
            setCardsPerRow(Math.max(1, calculatedCardsPerRow))
        }

        calculateCardsPerRow()
        window.addEventListener('resize', calculateCardsPerRow)

        return () => window.removeEventListener('resize', calculateCardsPerRow)
    }, [])

    // Handle click outside to close expanded card
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (expandedTrainerId !== null && containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setExpandedTrainerId(null)
            }
        }

        if (expandedTrainerId !== null) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [expandedTrainerId])

    const trainers = [
        {
            id: 1,
            imageUrl: "/images/trainer-jane.jpg",
            name: "Jane Smith",
            trainerType: "Strength & Conditioning Coach",
            bio: "Passionate about helping people transform their bodies safely and sustainably through evidence-based training methods.",
            extendedBio: "With over 8 years of experience in the fitness industry, Jane holds certifications from NASM and NSCA. She specializes in creating comprehensive strength training programs that not only build muscle but also improve functional movement patterns. Jane's approach combines traditional strength training with modern recovery techniques and biomechanical analysis. She has worked with athletes from various sports and helped countless individuals overcome chronic pain through corrective exercise protocols. Her philosophy centers around building a strong foundation first, then progressively advancing clients toward their specific goals.",
            specializations: ['Weightlifting', 'Posture Correction', 'Injury Recovery']
        },
        {
            id: 2,
            imageUrl: "/images/trainer-john.jpg",
            name: "John Martinez",
            trainerType: "Functional Movement Specialist",
            bio: "Dedicated to improving movement quality and athletic performance through functional training approaches.",
            extendedBio: "John brings a unique blend of sports science and practical application to his training methodology. As a former collegiate athlete and certified Functional Movement Screen practitioner, he understands the intricate relationship between mobility, stability, and performance. His programs focus on movement patterns that translate directly to real-world activities and sport-specific demands. John has worked extensively with professional athletes in baseball, basketball, and soccer, helping them prevent injuries and optimize their performance. His attention to detail in movement mechanics has earned him recognition as one of the premier movement specialists in the region.",
            specializations: ['Functional Training', 'Mobility Work', 'Sports Performance']
        },
        {
            id: 3,
            imageUrl: "/images/trainer-sarah.jpg",
            name: "Sarah Chen",
            trainerType: "Nutrition & Wellness Coach",
            bio: "Focused on holistic wellness combining fitness training with nutritional guidance for optimal results.",
            extendedBio: "Sarah's comprehensive approach to health and wellness sets her apart in the industry. With a Master's degree in Nutrition Science and certifications in both personal training and health coaching, she bridges the gap between exercise and nutrition seamlessly. Her programs are designed to create sustainable lifestyle changes rather than quick fixes. Sarah has helped hundreds of clients achieve lasting weight management success through her evidence-based nutrition protocols and personalized exercise prescriptions. She specializes in working with busy professionals who need practical solutions that fit their demanding schedules while still delivering exceptional results.",
            specializations: ['Nutrition Coaching', 'Weight Management', 'Lifestyle Coaching']
        },
        {
            id: 4,
            imageUrl: "/images/trainer-mike.jpg",
            name: "Mike Thompson",
            trainerType: "Powerlifting Coach",
            bio: "Experienced powerlifting coach specializing in strength development and competitive preparation.",
            extendedBio: "Mike's journey in powerlifting spans over 15 years, from competitive athlete to renowned coach. He has competed at the national level and holds multiple state records in his weight class. His coaching philosophy emphasizes technical precision, progressive overload, and mental fortitude. Mike has guided numerous athletes to national competitions and helped recreational lifters achieve personal bests they never thought possible. His programs are meticulously planned, incorporating periodization principles and individualized recovery protocols. Whether you're a beginner looking to learn proper technique or an experienced lifter aiming for competition, Mike's expertise will elevate your performance to new heights.",
            specializations: ['Powerlifting', 'Strength Training', 'Competition Prep']
        },
        {
            id: 5,
            imageUrl: "/images/trainer-lisa.jpg",
            name: "Lisa Rodriguez",
            trainerType: "Rehabilitation Specialist",
            bio: "Expert in post-injury training and movement rehabilitation to help clients return to full function.",
            extendedBio: "Lisa's background in physical therapy and corrective exercise makes her uniquely qualified to work with clients recovering from injuries or dealing with chronic pain conditions. She holds advanced certifications in corrective exercise, postural restoration, and pain management techniques. Her rehabilitation programs are designed in collaboration with healthcare providers to ensure safe and effective recovery. Lisa has successfully helped clients return to activity after surgeries, overcome chronic back pain, and prevent re-injury through targeted strengthening and mobility work. Her compassionate approach and deep understanding of anatomy and physiology provide clients with confidence in their recovery journey.",
            specializations: ['Injury Rehabilitation', 'Corrective Exercise', 'Pain Management']
        },
        {
            id: 6,
            imageUrl: "/images/trainer-david.jpg",
            name: "David Park",
            trainerType: "Olympic Weightlifting Coach",
            bio: "Former competitive weightlifter now coaching others in the technical aspects of Olympic lifting.",
            extendedBio: "David's expertise in Olympic weightlifting comes from years of dedicated training and competition at the elite level. He represented his country in international competitions and has since transitioned into coaching with the same passion and precision he brought to his athletic career. His technical knowledge of the snatch and clean & jerk is unparalleled, and his ability to break down complex movements into teachable progressions has made him highly sought after. David's coaching extends beyond technique to include competition strategy, mental preparation, and long-term athlete development. His athletes consistently achieve personal records and many have gone on to compete at national and international levels.",
            specializations: ['Olympic Lifting', 'Technique Development', 'Competition Training']
        }
    ]

    const handleTrainerClick = (trainerId: number) => {
        if (expandedTrainerId === trainerId) {
            setExpandedTrainerId(null) // Collapse if already expanded
        } else {
            setExpandedTrainerId(trainerId) // Expand the clicked trainer
        }
    }

    return (
        <div className="trainers-page">
            {/* Hero Section with Image and Header */}
            <section className="trainers-hero">
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

                <div className="trainers-grid-container" ref={containerRef}>
                    {(() => {
                        if (expandedTrainerId === null) {
                            // No expanded card, show normal grid
                            return (
                                <div className="trainers-grid">
                                    {trainers.map((trainer) => (
                                        <TrainerCard
                                            key={trainer.id}
                                            imageUrl={trainer.imageUrl}
                                            name={trainer.name}
                                            trainerType={trainer.trainerType}
                                            bio={trainer.bio}
                                            specializations={trainer.specializations}
                                            isExpanded={false}
                                            onClick={() => handleTrainerClick(trainer.id)}
                                            extendedBio={trainer.extendedBio}
                                        />
                                    ))}
                                </div>
                            )
                        }

                        // Find the expanded trainer and its index
                        const expandedTrainerIndex = trainers.findIndex(t => t.id === expandedTrainerId)
                        const expandedTrainer = trainers[expandedTrainerIndex]

                        // Determine which row the expanded card should be in
                        const expandedRow = Math.floor(expandedTrainerIndex / cardsPerRow)

                        // Split trainers into rows
                        const rows = []
                        for (let i = 0; i < trainers.length; i += cardsPerRow) {
                            rows.push(trainers.slice(i, i + cardsPerRow))
                        }

                        return (
                            <div className="trainers-grid-with-expanded">
                                {rows.map((row, rowIndex) => (
                                    <div key={rowIndex}>
                                        {/* Render row cards if not the expanded row */}
                                        {rowIndex !== expandedRow && (
                                            <div className="trainers-grid">
                                                {row.map((trainer) => (
                                                    <TrainerCard
                                                        key={trainer.id}
                                                        imageUrl={trainer.imageUrl}
                                                        name={trainer.name}
                                                        trainerType={trainer.trainerType}
                                                        bio={trainer.bio}
                                                        specializations={trainer.specializations}
                                                        isExpanded={false}
                                                        onClick={() => handleTrainerClick(trainer.id)}
                                                        extendedBio={trainer.extendedBio}
                                                    />
                                                ))}
                                            </div>
                                        )}

                                        {/* Render expanded row */}
                                        {rowIndex === expandedRow && (
                                            <>
                                                {/* Non-expanded cards in the same row */}
                                                {row.filter(t => t.id !== expandedTrainerId).length > 0 && (
                                                    <div className="trainers-grid">
                                                        {row.filter(t => t.id !== expandedTrainerId).map((trainer) => (
                                                            <TrainerCard
                                                                key={trainer.id}
                                                                imageUrl={trainer.imageUrl}
                                                                name={trainer.name}
                                                                trainerType={trainer.trainerType}
                                                                bio={trainer.bio}
                                                                specializations={trainer.specializations}
                                                                isExpanded={false}
                                                                onClick={() => handleTrainerClick(trainer.id)}
                                                                extendedBio={trainer.extendedBio}
                                                            />
                                                        ))}
                                                    </div>
                                                )}

                                                {/* Expanded card takes full width */}
                                                <div className="trainers-expanded-container">
                                                    <TrainerCard
                                                        key={expandedTrainer.id}
                                                        imageUrl={expandedTrainer.imageUrl}
                                                        name={expandedTrainer.name}
                                                        trainerType={expandedTrainer.trainerType}
                                                        bio={expandedTrainer.bio}
                                                        specializations={expandedTrainer.specializations}
                                                        isExpanded={true}
                                                        onClick={() => handleTrainerClick(expandedTrainer.id)}
                                                        extendedBio={expandedTrainer.extendedBio}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )
                    })()}
                </div>
            </section>
        </div>
    )
}
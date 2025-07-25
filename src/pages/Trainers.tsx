import { useState, useEffect, useRef } from "react"
import TrainerCard from "../components/TrainerCard"
import { TRAINERS } from "../data/trainers"
import "./Trainers.css"

export default function Trainers() {
    const [flippedTrainerId, setFlippedTrainerId] = useState<number | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    // Handle click outside to close flipped card
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (flippedTrainerId !== null && containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setFlippedTrainerId(null)
            }
        }

        if (flippedTrainerId !== null) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [flippedTrainerId])

    const handleTrainerClick = (trainerId: number) => {
        if (flippedTrainerId === trainerId) {
            setFlippedTrainerId(null) // Flip back if already flipped
        } else {
            setFlippedTrainerId(trainerId) // Flip the clicked trainer
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
                    <div className="trainers-grid">
                        {TRAINERS.map((trainer) => (
                            <TrainerCard
                                key={trainer.id}
                                imageUrl={trainer.imageUrl}
                                name={trainer.name}
                                trainerType={trainer.trainerType}
                                bio={trainer.bio}
                                specializations={trainer.specializations}
                                isFlipped={flippedTrainerId === trainer.id}
                                onClick={() => handleTrainerClick(trainer.id)}
                                extendedBio={trainer.extendedBio}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
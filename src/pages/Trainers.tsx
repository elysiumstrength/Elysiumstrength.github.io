import { useState, useEffect, useRef } from "react"
import TrainerCard from "../components/TrainerCard"
import { TRAINERS } from "../data/trainers"
import "./Trainers.css"

export default function Trainers() {
    const [flippedTrainerIds, setFlippedTrainerIds] = useState<Set<number>>(new Set())
    const containerRef = useRef<HTMLDivElement>(null)

    // Handle click outside to close flipped cards
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (flippedTrainerIds.size > 0 && containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setFlippedTrainerIds(new Set())
            }
        }

        if (flippedTrainerIds.size > 0) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [flippedTrainerIds])

    const handleTrainerClick = (trainerId: number) => {
        setFlippedTrainerIds(prev => {
            const newSet = new Set(prev)
            if (newSet.has(trainerId)) {
                newSet.delete(trainerId) // Flip back if already flipped
            } else {
                newSet.add(trainerId) // Add to flipped trainers
            }
            return newSet
        })
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
                                isFlipped={flippedTrainerIds.has(trainer.id)}
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
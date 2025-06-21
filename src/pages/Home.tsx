import TrainerCard from "../components/TrainerCard"
import "./Home.css"

// src/pages/Home.tsx
export default function Home() {
    return (
        <>
            <section className="home">
                <div className="home__hero"> </div>
                <h1>Welcome to MyApp</h1>
                <p>This is the home page of the site.</p>
            </section>
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
                    /><TrainerCard
                        imageUrl="/images/trainer-jane.jpg"
                        name="Jane Doe"
                        trainerType="Strength & Conditioning Coach"
                        bio="Passionate about helping people transform their bodies safely and sustainably."
                        specializations={['Weightlifting', 'Posture Correction', 'Injury Recovery']}
                    />

                </div>
            </section>
            <section className="survey">

            </section>
            <section className="mission"> 

            </section>
            <section className="values">

            </section>
            <section className="footer">
                
            </section>
        </>
    )
}

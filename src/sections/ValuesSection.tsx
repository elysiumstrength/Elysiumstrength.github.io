import ValueSegmentFullWidth from "../components/ValueSegmentFullWidth"

import Mission from "../assets/Mission.jpg"
import Personalized_Excellence from "../assets/Personalized_Excellence.jpg"
import Integrity_Trust from "../assets/Integrity_Trust.jpg"
import Results_Through_Consistency from "../assets/Results_Through_Consistency.jpg"

import "./ValuesSection.css"

export default function ValuesSection() {
    return (
        <section className="values-full-width">
            <ValueSegmentFullWidth
                imageUrl={Mission}
                heading="Our Mission"
                text="At our core, we are committed to empowering individuals to reach their full potential through personalized, results-driven training in a private, supportive environment. Our mission is to deliver expert guidance, build lasting confidence, and create sustainable fitness habits—one client, one session, one goal at a time."
                variant="green"
                buttonText="Learn More"
                buttonLink="/about"
                imagePosition="left"
            />
            <ValueSegmentFullWidth
                imageUrl={Personalized_Excellence}
                heading="Personalized Excellence"
                text="We believe that every body is unique—so every workout should be, too. Our training programs are fully customized to align with your goals, lifestyle, and fitness level. With 1-on-1 attention and expert guidance, we ensure you make steady, sustainable progress at a pace that suits you."
                variant="beige"
                buttonText="Learn More"
                buttonLink="/about"
                imagePosition="right"
            />
            <ValueSegmentFullWidth
                imageUrl={Integrity_Trust}
                heading="Integrity & Trust"
                text="Fitness is personal—and so is trust. We create a safe, judgment-free environment where transparency and honesty are at the heart of every session. Our certified trainers are committed to your wellbeing, always putting your health and long-term success first."
                variant="green"
                buttonText="Our Trainers"
                buttonLink="/trainers"
                imagePosition="left"
            />
            <ValueSegmentFullWidth
                imageUrl={Results_Through_Consistency}
                heading="Results Through Consistency"
                text="We know that real, lasting results come from dedication and consistency—not gimmicks. That's why we focus on building smart, habit-driven routines that work with your lifestyle. Every session moves you forward, helping you build confidence and long-term momentum."
                variant="beige"
                buttonText="Get Started"
                buttonLink="/consult"
                imagePosition="right"
            />
        </section>
    )
}

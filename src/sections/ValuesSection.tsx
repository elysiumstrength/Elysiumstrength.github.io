import ValueSegmentFullWidth from "../components/ValueSegmentFullWidth"

import Personalized_Excellence from "../assets/Personalized_Excellence.jpg"
import Nutrition from "../assets/Nutrition.jpg"
import Landing_Image from "../assets/landing_image.png"

import "./ValuesSection.css"

export default function ValuesSection() {
    return (
        <section className="values-full-width">
            <ValueSegmentFullWidth
                imageUrl={Personalized_Excellence}
                heading="Results Through Consistency"
                text="At Elysium, we believe consistency thrives on real results. That's why every member gets more than just expert training—we provide full access to our professional programming app. Track every custom workout, rep, set, and the weight you've moved over time. With clear, measurable progress and built-in accountability, you'll stay focused, motivated, and confident—knowing you're getting stronger every session."
                variant="beige"
                buttonText="Schedule a Consultation"
                buttonLink="https://elysium.pushpress.com/landing/calendar"
                imagePosition="right"
            />
            <ValueSegmentFullWidth
                imageUrl={Nutrition}
                heading={`Fuel Your Body,\n Empower Your Life`}
                text="At Elysium, we go beyond nutrition fads. Our certified experts create personalized plans grounded in real food, psychology-informed support, and your unique lifestyle. Whether you're managing chronic conditions or simply seeking better health, our approach blends science, empathy, and sustainability—because feeling good starts with being seen, heard, and nourished."
                variant="green"
                buttonText="Explore Nutrition"
                buttonLink="/nutrition"
                imagePosition="left"
            />
            <ValueSegmentFullWidth
                imageUrl={Landing_Image}
                heading={`Locally Connected,\n Invested In You`}
                text="At Elysium, we believe in the power of community—and Goleta is a word-of-mouth town. We proudly partner with a trusted network of local professionals we believe in: doctors, therapists, physical therapists, massage therapists, sports leagues, beauty professionals, and more. These are real relationships built on shared values and a commitment to whole-person wellness."
                variant="beige"
                buttonText="Join Our Community"
                buttonLink="/community"
                imagePosition="right"
            />
        </section>
    )
}

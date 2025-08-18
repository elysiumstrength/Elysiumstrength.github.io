import ValueSegmentFullWidth from "../components/ValueSegmentFullWidth"

import Personalized_Excellence from "../assets/Personalized_Excellence.jpg"
import Gym_Interior from "../assets/Gym_Interior.jpg"
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
                buttonLink="https://elysium.pushpress.com/landing/appointments/apptpkg_b7bc861cb2f843e908da036e2ee4"
                imagePosition="right"
            />
            <ValueSegmentFullWidth
                imageUrl={Gym_Interior}
                heading={`Integrity and Trust`}
                text="At Elysium, we believe strength should last a lifetime. Fitness is deeply personal, and we're here to honor that. Our team of expert trainers and wellness professionals brings integrity, experience, and genuine care to every session— combining proven sports performance methods with a commitment to longevity and injury prevention. We value your privacy and strive to make every step of your journey feel safe, supportive, and empowering. At Elysium, we're not just a gym. We're your trusted partners in building a resilient, thriving body you can rely on for years to come."
                variant="green"
                buttonText="Meet Your Trainers"
                buttonLink="/trainers"
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

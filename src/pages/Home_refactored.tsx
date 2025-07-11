import HeroSection from "../sections/HeroSection"
import CTASection from "../sections/CTASection"
import TrainersSection from "../sections/TrainersSection"
import ValuesSection from "../sections/ValuesSection"
import TestimonialsSection from "../sections/TestimonialsSection"

import "./Home.css"

// src/pages/Home.tsx
export default function Home() {
    return (
        <>
            <HeroSection />
            <CTASection />
            <TrainersSection />
            <ValuesSection />
            <TestimonialsSection />
        </>
    )
}

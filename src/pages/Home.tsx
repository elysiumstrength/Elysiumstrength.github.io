import {
    HeroSection,
    CTASection,
    TrainersSection,
    ValuesSection,
    TestimonialsSection
} from "../sections"

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

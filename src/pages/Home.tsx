import { Helmet } from "react-helmet"

import {
    HeroSection,
    CTASection,
    TrainersSection,
    MissionSection,
    AdditionalServicesSection,
    // ValuesSection,
    TestimonialsSection
} from "../sections"

import "./Home.css"

// src/pages/Home.tsx
export default function Home() {
    return (
        <>
            <Helmet>
                <title>
                    Personal Trainer in Goleta CA | Elysium Strength & Wellness
                </title>
                <meta
                    name="description"
                    content="Looking for an expert personal trainer in Goleta CA? Get customized fitness plans, strength training, and professional coaching to reach your goals."
                />
            </Helmet>

            <HeroSection />
            <CTASection />
            <MissionSection />
            <TrainersSection />
            <AdditionalServicesSection />
            {/* <ValuesSection /> */}
            <TestimonialsSection />
        </>
    )
}
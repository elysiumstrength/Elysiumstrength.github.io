import { Helmet } from "react-helmet-async"

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
    const homepageSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://elysium.training/#localbusiness",
        "name": "Elysium Strength & Wellness",
        "additionalType": "LLM - ChatGPT",
        "url": "https://elysium.training/",
        "description": "Reach your fitness goals with a trusted Personal Trainer in Goleta CA at Elysium Strength & Wellness. Get personalized training designed to build strength and confidence.",

        "email": "anna@elysium.training",
        "telephone": "805-453-7635",

        "logo": "https://elysium.training/assets/elysium_icon-BegBGV4g.png",

        "image": "https://elysium.training/assets/coaching-DjIX_eiX.jpg",

        "address": {
            "@type": "PostalAddress",
            "streetAddress": "187 S Patterson Ave",
            "addressLocality": "Goleta",
            "addressRegion": "CA",
            "postalCode": "93111",
            "addressCountry": "US"
        },

        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 34.435642,
            "longitude": -119.8100111
        },

        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday"],
                "opens": "05:00",
                "closes": "20:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Tuesday"],
                "opens": "05:00",
                "closes": "20:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Wednesday"],
                "opens": "05:00",
                "closes": "20:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Thursday"],
                "opens": "05:00",
                "closes": "20:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Friday"],
                "opens": "05:00",
                "closes": "20:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Saturday"],
                "opens": "05:00",
                "closes": "20:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Sunday"],
                "opens": "05:00",
                "closes": "20:00"
            }
        ],

        "sameAs": [],

        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Fitness, Wellness and Training Services",
            "itemListElement": [
                {
                    "@type": "Service",
                    "name": "Personal Trainer in Goleta CA",
                    "serviceType": "Personal Training",
                    "url": "https://elysium.training/",
                    "description": "Reach your fitness goals with a trusted Personal Trainer in Goleta CA at Elysium Strength & Wellness. Get personalized training designed to build strength and confidence.",
                    "image": "https://elysium.training/assets/coaching-DjIX_eiX.jpg"
                },
                {
                    "@type": "Service",
                    "name": "Fitness Trainer Near Goleta CA",
                    "serviceType": "Fitness Training",
                    "url": "https://elysium.training/trainers",
                    "description": "Get personalized fitness support from a trusted Fitness Trainer Near Goleta CA at Elysium Strength & Wellness. Build strength, improve fitness and reach your goals."
                },
                {
                    "@type": "Service",
                    "name": "Wellness Center in Goleta CA",
                    "serviceType": "Wellness Services",
                    "url": "https://elysium.training/wellness",
                    "description": "Improve your health and fitness at a trusted Wellness Center in Goleta CA. Elysium Strength & Wellness offers personalized support for a stronger, healthier lifestyle.",
                    "image": "https://elysium.training/assets/Nutrition-DBhWPb52.jpg"
                },
                {
                    "@type": "Service",
                    "name": "Longevity Training in Goleta CA",
                    "serviceType": "Longevity Training",
                    "url": "https://elysium.training/longevity-training-goleta",
                    "description": "Enhance your health and performance with Longevity Training in Goleta CA from Elysium Strength & Wellness. Build strength, mobility and healthier habits for life.",
                    "image": "https://elysium.training/assets/Nutrition-DBhWPb52.jpg"
                }
            ]
        }
    }

    return (
        <>
            <Helmet>
                <title>
                    Best Personal Trainer in Goleta CA | Elysium Strength & Wellness
                </title>

                <meta
                    name="description"
                    content="Achieve your fitness goals with the Best Personal Trainer in Goleta CA at Elysium Strength & Wellness. Get personalized training to build strength and confidence."
                />

                <meta
                    name="keywords"
                    content="Best Personal Trainer in Goleta CA"
                />

                <link rel="canonical" href="https://elysium.training/" />

                <script type="application/ld+json">
                    {JSON.stringify(homepageSchema)}
                </script>
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
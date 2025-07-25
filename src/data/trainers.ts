export interface Trainer {
    id: number;
    imageUrl: string;
    name: string;
    trainerType: string;
    bio: string;
    extendedBio: string;
    specializations: string[];
}

export const TRAINERS: Trainer[] = [
    {
        id: 1,
        imageUrl: "/images/trainer-jane.jpg",
        name: "Jane Smith",
        trainerType: "Strength & Conditioning",
        bio: "8+ years helping clients build strength through evidence-based training and corrective exercise.",
        extendedBio: "With 8+ years of experience, Jane holds NASM and NSCA certifications. She specializes in comprehensive strength training programs that build muscle and improve functional movement patterns. Her approach combines traditional strength training with modern recovery techniques, helping athletes and individuals overcome chronic pain through corrective exercise protocols.",
        specializations: ['Weightlifting', 'Posture', 'Rehabilitation']
    },
    {
        id: 2,
        imageUrl: "/images/trainer-john.jpg",
        name: "John Martinez",
        trainerType: "Functional Movement",
        bio: "Former collegiate athlete specializing in movement quality and athletic performance optimization.",
        extendedBio: "As a former collegiate athlete and certified Functional Movement Screen practitioner, John understands the relationship between mobility, stability, and performance. His programs focus on movement patterns that translate to real-world activities and sport-specific demands. He has worked with professional athletes in baseball, basketball, and soccer, earning recognition as a premier movement specialist.",
        specializations: ['Movement', 'Mobility', 'Performance']
    },
    {
        id: 3,
        imageUrl: "/images/trainer-sarah.jpg",
        name: "Sarah Chen",
        trainerType: "Wellness Coach",
        bio: "Master's in Nutrition Science with expertise in sustainable lifestyle changes and weight management.",
        extendedBio: "With a Master's in Nutrition Science and certifications in personal training and health coaching, Sarah bridges exercise and nutrition seamlessly. Her programs create sustainable lifestyle changes rather than quick fixes. She has helped hundreds achieve lasting weight management success through evidence-based protocols, specializing in practical solutions for busy professionals.",
        specializations: ['Nutrition', 'Weight Loss', 'Lifestyle']
    },
    {
        id: 4,
        imageUrl: "/images/trainer-mike.jpg",
        name: "Mike Thompson",
        trainerType: "Powerlifting Coach",
        bio: "15+ years competitive powerlifter and coach with multiple state records and national experience.",
        extendedBio: "Mike's 15+ year journey spans from competitive athlete to renowned coach. He competed nationally, holds multiple state records, and emphasizes technical precision and progressive overload. Mike has guided numerous athletes to national competitions and helped recreational lifters achieve personal bests through meticulously planned programs with individualized recovery protocols.",
        specializations: ['Powerlifting', 'Strength', 'Competition']
    },
    {
        id: 5,
        imageUrl: "/images/trainer-lisa.jpg",
        name: "Lisa Rodriguez",
        trainerType: "Rehabilitation Specialist",
        bio: "Physical therapy background specializing in injury recovery and corrective exercise protocols.",
        extendedBio: "Lisa's physical therapy and corrective exercise background makes her uniquely qualified for injury recovery and chronic pain conditions. She holds advanced certifications in corrective exercise and pain management. Her rehabilitation programs are designed with healthcare providers to ensure safe recovery, helping clients return to activity after surgeries and overcome chronic pain.",
        specializations: ['Rehabilitation', 'Corrective', 'Pain Relief']
    },
    {
        id: 6,
        imageUrl: "/images/trainer-david.jpg",
        name: "David Park",
        trainerType: "Weightlifting Coach",
        bio: "Elite-level competitor turned coach with international experience in Olympic weightlifting.",
        extendedBio: "David's Olympic weightlifting expertise comes from years of elite-level training and international competition. He represented his country internationally and transitioned to coaching with the same passion and precision. His technical knowledge of the snatch and clean & jerk is unparalleled, with an ability to break down complex movements into teachable progressions for competition strategy and athlete development.",
        specializations: ['Olympic Lifting', 'Technique', 'Competition']
    }
];

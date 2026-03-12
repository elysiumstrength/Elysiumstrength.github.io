import trainerAnna from "../assets/trainer-anna.jpg";
import trainerAddi from "../assets/trainer-addi.jpg";
import jesse from "../assets/Jesse.jpeg";
import dolan from "../assets/dolan.jpg";
import jaron from "../assets/Jaron.jpg";

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
        imageUrl: trainerAnna,
        name: "Anna Carroll",
        trainerType: "Founder | Strength Coach",
        bio: "15-year athletics veteran and hormone-aware strength coach empowering women to build lasting strength.",
        extendedBio: `With over 15 years of experience in athletics and more than 8 years as a certified trainer, Anna Carroll brings a powerful blend of expertise, empathy, and precision to every session. A former competitive powerlifter, Anna trained under some of the best minds in the field — sharpening her eye for technique, programming, and long-term performance.

After facing her own struggles with hormonal imbalance, Anna shifted her focus to women's health. She has since dedicated her career to understanding how hormones impact training, nutrition, and recovery — particularly through menopause and beyond. Her specialty lies in building bone density, improving energy, and helping women feel strong in every phase of life.

Anna has owned and operated a private gym since 2021, creating a space where personalized coaching, smart science, and whole-body wellness come together. Whether you're new to lifting, navigating midlife shifts, or looking to train with intention, Anna is committed to helping you move better, feel stronger, and live empowered.`,
        specializations: ["Hormone-Aware Training", "Bone Density", "Women's Health"]
    },

//     {
//         id: 2,
//         imageUrl: trainerAddi,
//         name: "Addi Zerrenner",
//         trainerType: "Endurance Coach",
//         bio: "Olympic-Trials marathoner turned coach empowering clients with endurance-driven personal and group fitness experiences.",
//         extendedBio: `Born and raised in Santa Barbara, Addi Zerrenner brings over six years of experience as a personal trainer and group fitness instructor. With a deep-rooted passion for movement and human potential, Addi's journey in fitness began on the soccer field and running track and evolved into a lifelong pursuit of health, performance, and purpose.

// A former competitive runner, Addi competed at the highest levels of the sport—from high-school and collegiate competition to racing professionally. One of her proudest achievements was qualifying for and competing in the 2020 U.S. Olympic Marathon Trials, a testament to her dedication, discipline, and love for the grind.

// Today, Addi channels that same drive into helping others discover their own strength—both physically and mentally. Whether coaching a high-energy class or working one-on-one with clients, she leads with empathy, enthusiasm, and the belief that fitness can be transformative. Outside the gym, Addi stays connected to nature and movement through beach volleyball, surfing, hiking, and, of course, getting in a good workout.

// Her mission is simple: empower others to push past their limits, find joy in the process, and become the strongest version of themselves.`,
//         specializations: ["Endurance Training", "Running Technique", "Mindset Coaching"]
//     },

    {
        id: 2,
        imageUrl: jaron,
        name: "Jaron Williams",
        trainerType: "Strength Coach",
        bio: "Helping clients feel strong, supported, and confident in everyday life.",
        extendedBio: `I’m all about helping you feel strong, supported, and fired up for whatever life throws at you. We train in a way that fits your vibe, building the power and confidence you need for the activities you love — whether that’s playing sports, hitting the trails, or being more active with your kids.

If you're dealing with injuries or aches, I’ll teach smart active recovery techniques so you can heal and still feel capable. My mission is simple: make fitness feel like a journey you actually enjoy, with plenty of wins along the way.`,
        specializations: ["Strength Training", "Functional Fitness", "Active Recovery"]
    },

    {
        id: 3,
        imageUrl: dolan,
        name: "Dolan Ingraham",
        trainerType: "Fat Loss | Muscle Gain",
        bio: "Helping everyday people achieve body transformations they once thought were impossible.",
        extendedBio: `Dolan's mission is simple: help people achieve goals that feel impossible — especially if you're new to the gym or unsure if real change is possible.

An ACE-certified personal trainer specializing in fat loss and muscle gain, Dolan builds personalized programs that actually stick. Working with him feels less like hiring a trainer and more like having a knowledgeable friend who knows exactly how to get you there.`,
        specializations: ["Fat Loss", "Muscle Gain"]
    },

    {
        id: 4,
        imageUrl: jesse,
        name: "Jesse",
        trainerType: "Strength & Conditioning Coach",
        bio: "Goal-oriented coach building durable strength and endurance.",
        extendedBio: `I’m a fun, goal-oriented strength and conditioning coach who specializes in building durable strength, endurance, and real work capacity for long-term performance.

With over eight years of coaching experience, I’ve worked with clients across many fitness levels and built my foundation at one of the top functional training gyms in the United States.`,
        specializations: ["Strength Training", "Endurance", "Performance"]
    }
];
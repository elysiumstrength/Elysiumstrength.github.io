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
        id: 1, // update if this ID is already taken
        imageUrl: "/images/trainer-anna.jpg",
        name: "Anna Carroll",
        trainerType: "Founder | Strength Coach",
        bio: "15-year athletics veteran and hormone-aware strength coach empowering women to build bone density and lasting strength.",
        extendedBio: `With over 15 years of experience in athletics and more than 8 years as a certified trainer, Anna Carroll brings a powerful blend of expertise, empathy, and precision to every session. A former competitive powerlifter, Anna trained under some of the best minds in the field — sharpening her eye for technique, programming, and long-term performance.

        After facing her own struggles with hormonal imbalance, Anna shifted her focus to women's health. She has since dedicated her career to understanding how hormones impact training, nutrition, and recovery — particularly through menopause and beyond. Her specialty lies in building bone density, improving energy, and helping women feel strong in every phase of life.

        Anna has owned and operated a private gym since 2021, creating a space where personalized coaching, smart science, and whole-body wellness come together. Whether you're new to lifting, navigating midlife shifts, or looking to train with intention, Anna is committed to helping you move better, feel stronger, and live empowered.`,
        specializations: ["Hormone-Aware Training", "Bone Density", "Women's Health"]
    },
    {
        id: 2, // update if needed
        imageUrl: "/images/trainer-dorny.jpg",
        name: "Coach Dorny",
        trainerType: "Certified Personal Trainer",
        bio: "Certified trainer with 6 years' experience crafting technique-driven, motivational programs that build lasting strength and confidence.",
        extendedBio: `Hey, I'm Coach Dorny, a Certified Personal Trainer with a deep passion for fitness and helping others achieve their goals. Over the past 6 years I've dedicated thousands of hours to mastering proper technique, smart programming, and, just as importantly, staying consistent and motivated through every season of life. I've learned what works, what doesn't, and how to tailor training to real people with real lives.

        My approach is about more than just sets and reps—it's about building a mindset and routine that lasts. Whether you're just starting out or looking to break through a plateau, I'll meet you where you are and help you build a stronger, more confident version of yourself.

        Let's get to work.`,
        specializations: ["Technique Coaching", "Program Design", "Mindset & Motivation"]

    },
    {
        id: 3, // update if this slot is taken
        imageUrl: "/images/trainer-addi.jpg",
        name: "Addi Zerrenner",
        trainerType: "Endurance Coach",
        bio: "Olympic-Trials marathoner turned coach empowering clients with endurance-driven, joyful training rooted in six years of personal and group fitness experience.",
        extendedBio: `Born and raised in Santa Barbara, Addi Zerrenner brings over six years of experience as a personal trainer and group fitness instructor. With a deep-rooted passion for movement and human potential, Addi's journey in fitness began on the soccer field and running track and evolved into a lifelong pursuit of health, performance, and purpose.

        A former competitive runner, Addi competed at the highest levels of the sport—from high-school and collegiate competition to racing professionally. One of her proudest achievements was qualifying for and competing in the 2020 U.S. Olympic Marathon Trials, a testament to her dedication, discipline, and love for the grind.

        Today, Addi channels that same drive into helping others discover their own strength—both physically and mentally. Whether coaching a high-energy class or working one-on-one with clients, she leads with empathy, enthusiasm, and the belief that fitness can be transformative. Outside the gym, Addi stays connected to nature and movement through beach volleyball, surfing, hiking, and, of course, getting in a good workout.

        Her mission is simple: empower others to push past their limits, find joy in the process, and become the strongest version of themselves.`,
        specializations: ["Endurance Training", "Running Technique", "Mindset Coaching"]
    },
    {
        id: 4, // change if this slot is already taken
        imageUrl: "/images/trainer-coach-g.jpg",
        name: "Coach G",
        trainerType: "Certified Nutritionist",
        bio: "Holistic nutritionist specializing in sustainable weight loss and metabolic health through individualized, evidence-based guidance.",
        extendedBio: `As a certified nutritionist, I take a holistic and individualized approach to health and wellness. I don't believe in one-size-fits-all diets or quick fixes. My philosophy is grounded in evidence-based, sustainable strategies that promote long-term success and a healthy relationship with food.

        I emphasize whole, nutrient-dense foods, balanced eating, and realistic lifestyle shifts — not restrictions. My goal is to help you feel empowered, nourished, and in control of your health journey.

        While I specialize in weight loss, I'm also experienced in supporting clients with a range of conditions, including PCOS, diabetes, thyroid issues, and metabolic resistance. Every client is unique, and I'm here to provide education, structure, and support tailored to your needs.

        Nutrition should feel good, make sense, and fit into your life — and that's exactly what I help you create.`,
        specializations: ["Weight Loss", "Metabolic Health", "Lifestyle Coaching"]
    },
];

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
        extendedBio: `With over 15 years in athletics and more than 8 years as a certified trainer, Anna Carroll brings a powerful blend of expertise, empathy, and precision to every session. A former competitive powerlifter trained under top coaches, Anna redirected her focus to women's health after overcoming her own hormonal imbalance. She now specializes in training that supports bone density, energy, and confidence through menopause and beyond. Since opening her private gym in 2021, Anna has created a space where individualized coaching, smart science, and whole-body wellness come together—helping every client move better, feel stronger, and live empowered.`,
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
        id: 3, // adjust if this slot is taken
        imageUrl: "/images/trainer-reggie.jpg",
        name: "Reggie Stovell",
        trainerType: "Performance Coach",
        bio: "18-year coach and ex-pro basketball player delivering dynamic, functional workouts for athletes and everyday clients.",
        extendedBio: `Reggie Stovell brings over 18 years of fitness coaching and training experience to Elysium. Originally from Chicago, he spent 3 years as an overseas professional basketball player in Germany, France, and Sweden, and has held basketball clinics worldwide—including Indonesia, Spain, Japan, China, the Maldives, Greece, and Singapore. Reggie also served as a group fitness instructor at the White House Athletic Center during the Obama administration, teaching spin, HIIT, core, and boot-camp classes.

        Variation is his specialty: he blends classic methods with functional movements and tempo work to maximize results. Reggie has coached middle-school and varsity teams in Washington, D.C., trained athletes for Swedish clubs, and launched an AAU program in Savannah, GA. At Elysium, he aims to help athletes elevate their performance while guiding everyday clients of all ages to stay engaged, fit, and ready for action.

        Looking forward to the challenge!`,
        specializations: ["Functional Training", "Basketball Skills", "Group Fitness"]
    },
    {
        id: 4, // update if this slot is taken
        imageUrl: "/images/trainer-addi.jpg",
        name: "Addi Zerrenner",
        trainerType: "Endurance Coach & Group Fitness Instructor",
        bio: "Olympic-Trials marathoner turned coach empowering clients with endurance-driven, joyful training rooted in six years of personal and group fitness experience.",
        extendedBio: `Born and raised in Santa Barbara, Addi Zerrenner brings over six years of experience as a personal trainer and group fitness instructor. With a deep-rooted passion for movement and human potential, Addi's journey in fitness began on the soccer field and running track and evolved into a lifelong pursuit of health, performance, and purpose.

        A former competitive runner, Addi competed at the highest levels of the sport—from high-school and collegiate competition to racing professionally. One of her proudest achievements was qualifying for and competing in the 2020 U.S. Olympic Marathon Trials, a testament to her dedication, discipline, and love for the grind.

        Today, Addi channels that same drive into helping others discover their own strength—both physically and mentally. Whether coaching a high-energy class or working one-on-one with clients, she leads with empathy, enthusiasm, and the belief that fitness can be transformative. Outside the gym, Addi stays connected to nature and movement through beach volleyball, surfing, hiking, and, of course, getting in a good workout.

        Her mission is simple: empower others to push past their limits, find joy in the process, and become the strongest version of themselves.`,
        specializations: ["Endurance Training", "Running Technique", "Mindset Coaching"]
    },
    {
        id: 5, // change if this slot is already taken
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

    {
        id: 6, // adjust if this slot is taken
        imageUrl: "/images/trainer-marcus.jpg",
        name: "Marcus Almanza",
        trainerType: "Personal Trainer & Body Tempering Specialist",
        bio: "10-year trainer and body-tempering expert blending massage-therapy insight and patient coaching to ease pain, restore mobility, and build lasting strength.",
        extendedBio: `Hello, my name is Marcus Almanza. I'm a dedicated personal trainer and body tempering specialist with over 10 years of experience and a lifelong background in athletics, including basketball and martial arts.

        Years ago, I suffered a severe back injury that changed my approach to health and recovery. Determined to walk again pain-free, I immersed myself in learning how the body heals. I attended multiple massage therapy programs, gaining over 600 hours of hands-on training, with a special focus on reflexology—my greatest passion in bodywork.

        This massage background makes me especially effective at body tempering. I know how to listen to the body and apply the right techniques to release tension, improve mobility, and ease pain so clients can move and train with confidence.

        I also love working with people who feel new or uncomfortable in gym settings. My years as an early-childhood education teacher have given me patience and compassion, and I strive to create a welcoming, supportive space where everyone feels safe and cared for.

        My mission is to help you build strength, recover fully, and enjoy a healthy, pain-free life outside the gym. I look forward to working with you on your journey to better movement and long-term wellness.`,
        specializations: ["Body Tempering", "Injury Recovery", "Beginner Coaching"]
    },

];

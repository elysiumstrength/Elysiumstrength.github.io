export interface Partner {
    id: number;
    name: string;
    category: string;
    description: string;
    website: string;
    logoImage?: string;
}

export const PARTNERS: Partner[] = [
    {
        id: 1,
        name: "Gagneja Health",
        category: "Medical & Wellness",
        description:
            "At Gagneja Health, we believe in whole-body health. We hope to work with you closely on various aspects of your health, and we emphasize the impact that lifestyle, diet, and environmental factors have on your health.",
        website: "gagnejahealth.com",
        logoImage: "/src/assets/GAGNEJA HEALTH.svg",
    },
    {
        id: 2,
        name: "Insight Therapy",
        category: "Mental Health",
        description:
            "We are a group of psychotherapists and physicians who provide quality mental health care. As a mental health center, we assist client's by providing therapy, coordinated medication management with psychiatrists, coaching, and dreamwork.",
        website: "insighttherapy.com",
        logoImage: "/src/assets/Insight Therapy.webp",
    },
];

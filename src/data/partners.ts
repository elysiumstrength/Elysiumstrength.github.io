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
        website: "https://gagnejahealth.com",
        logoImage: "/src/assets/GAGNEJA HEALTH.svg",
    },
    {
        id: 2,
        name: "Insight Therapy",
        category: "Mental Health",
        description:
            "We are a group of psychotherapists and physicians who provide quality mental health care. As a mental health center, we assist client's by providing therapy, coordinated medication management with psychiatrists, coaching, and dreamwork.",
        website: "https://www.insighttherapy.center/",
        logoImage: "/src/assets/Insight Therapy.webp",
    },
    {
        id: 3,
        name: "Vital Motion Chiropractic",
        category: "Chiropractic",
        description:
            "Dr. Alex is a National Board Certified Doctor of Chiropractic who wants to help you take control of your body wellness. She loves helping active individuals optimize performance and be pain free through diversified chiropractic adjustments, professional level body work and personalized rehab programs.",
        website: "https://linktr.ee/camarillochiropractic",
        logoImage: "/src/assets/Vital_Motion_Chiropractic.webp",
    },
    {
        id: 4,
        name: "Bissell Clinic",
        category: "Physical Therapy",
        description:
            "At Bissell Clinic, we also offer individualized plans of care for physical therapy. Whether you are recovering from an injury, rehabbing after surgery, or just want to develop more strength and flexibility, our expert Physical Therapists can help.",
        website: "https://www.bissellclinic.com/",
        logoImage: "/src/assets/Bissell_Clinic.png",
    }
];

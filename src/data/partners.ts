export interface Partner {
    id: number;
    name: string;
    category: string;
    description: string;
    website: string;
    logoImage?: string;
}

import gagnejaLogo from '../assets/Gagneja_Health.png';
import insightLogo from '../assets/Insight_Therapy.webp';
import bissellLogo from '../assets/Bissell_Clinic.png';
import cernyLogo from '../assets/Cerny_Performance.webp';

export const PARTNERS: Partner[] = [
    {
        id: 1,
        name: "Gagneja Health",
        category: "Medical & Wellness",
        description:
            "At Gagneja Health, we believe in whole-body health. We hope to work with you closely on various aspects of your health, and we emphasize the impact that lifestyle, diet, and environmental factors have on your health.",
        website: "https://gagnejahealth.com",
        logoImage: gagnejaLogo,
    },
    {
        id: 2,
        name: "Insight Therapy",
        category: "Mental Health",
        description:
            "We are a group of psychotherapists and physicians who provide quality mental health care. As a mental health center, we assist client's by providing therapy, coordinated medication management with psychiatrists, coaching, and dreamwork.",
        website: "https://www.insighttherapy.center/",
        logoImage: insightLogo,
    },
    {
        id: 3,
        name: "Bissell Clinic",
        category: "Physical Therapy",
        description:
            "At Bissell Clinic, we also offer individualized plans of care for physical therapy. Whether you are recovering from an injury, rehabbing after surgery, or just want to develop more strength and flexibility, our expert Physical Therapists can help.",
        website: "https://www.bissellclinic.com/",
        logoImage: bissellLogo,
    },
    {
        id: 4,
        name: "Cerny Performance",
        category: "Athletic Training",
        description:
            "Cerny Performance helps leaders and teams get unstuck so they can perform at their best. Founded by Air Force Special Operations veteran Cody Cerny, we combine military discipline, martial arts focus, and enterprise consulting to unlock breakthroughs in leadership and teamwork. From executive coaching to team workshops and keynotes, we equip organizations across Santa Barbara and beyond to eliminate friction, build trust, and achieve results that matter most.",
        website: "https://cernyperformance.com/",
        logoImage: cernyLogo,
    },
];

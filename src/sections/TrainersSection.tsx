import { useRef, useEffect, useState } from "react";
import TrainerCard from "../components/TrainerCard";
import "./TrainersSection.css";

/* ---------- constants must match the CSS ---------- */
const CARD = 300;   // px  – width in .trainer-card
const GAP = 32;    // px  – 4 rem gap in .trainer-list
const FADE_MS = 400; // duration of fade animation

/* ---------- trainer data ---------- */
const TRAINERS = [
	{
		id: 1,
		imageUrl: "/images/trainer-jane.jpg",
		name: "Jane Smith",
		trainerType: "Strength & Conditioning Coach",
		bio: "Passionate about helping people transform their bodies safely and sustainably through evidence-based training methods.",
		specializations: ['Weightlifting', 'Posture Correction', 'Injury Recovery']
	},
	{
		id: 2,
		imageUrl: "/images/trainer-john.jpg",
		name: "John Martinez",
		trainerType: "Functional Movement Specialist",
		bio: "Dedicated to improving movement quality and athletic performance through functional training approaches.",
		specializations: ['Functional Training', 'Mobility Work', 'Sports Performance']
	},
	{
		id: 3,
		imageUrl: "/images/trainer-sarah.jpg",
		name: "Sarah Chen",
		trainerType: "Nutrition & Wellness Coach",
		bio: "Focused on holistic wellness combining fitness training with nutritional guidance for optimal results.",
		specializations: ['Nutrition Coaching', 'Weight Management', 'Lifestyle Coaching']
	},
	{
		id: 4,
		imageUrl: "/images/trainer-mike.jpg",
		name: "Mike Thompson",
		trainerType: "Powerlifting Coach",
		bio: "Experienced powerlifting coach specializing in strength development and competitive preparation.",
		specializations: ['Powerlifting', 'Strength Training', 'Competition Prep']
	},
	{
		id: 5,
		imageUrl: "/images/trainer-lisa.jpg",
		name: "Lisa Rodriguez",
		trainerType: "Rehabilitation Specialist",
		bio: "Expert in post-injury training and movement rehabilitation to help clients return to full function.",
		specializations: ['Injury Rehabilitation', 'Corrective Exercise', 'Pain Management']
	},
	{
		id: 6,
		imageUrl: "/images/trainer-david.jpg",
		name: "David Park",
		trainerType: "Olympic Weightlifting Coach",
		bio: "Former competitive weightlifter now coaching others in the technical aspects of Olympic lifting.",
		specializations: ['Olympic Lifting', 'Technique Development', 'Competition Training']
	}
	/* add more trainers as needed */
];


export default function TrainersSection() {
	const rowRef = useRef<HTMLDivElement>(null);
	const fadeRef = useRef<number>();            // store timeout id
	const [visible, setVisible] = useState(TRAINERS.length); // cards per page
	const [currentPage, setPage] = useState(0);               // zero-based
	const [isFading, setFading] = useState(false);           // for CSS class

	/* ────────── recalc cards-per-row on resize ────────── */
	useEffect(() => {
		const calc = () => {
			const el = rowRef.current;
			if (!el) return;
			const fit = Math.floor((el.clientWidth + GAP) / (CARD + GAP));
			setVisible(Math.max(Math.min(fit, TRAINERS.length), 1));
		};

		calc();                               // initial
		const ro = new ResizeObserver(calc);  // subsequent resizes
		rowRef.current && ro.observe(rowRef.current);
		return () => ro.disconnect();
	}, []);

	/* ────────── derive paging data ────────── */
	const rawTotalPages = Math.ceil(TRAINERS.length / visible);
	const totalPages = Math.min(rawTotalPages, 3);          // cap at 3
	const maxTrainerCount = totalPages * visible;                // trainers exposed
	const trainersSubset = TRAINERS.slice(0, maxTrainerCount);

	/* keep page index in-bounds whenever totals change */
	useEffect(() => {
		if (currentPage >= totalPages) setPage(totalPages - 1);
	}, [totalPages, currentPage]);

	/* helper to run fade-out → page change → fade-in */
	const goToPage = (next: number) => {
		if (next === currentPage || isFading) return;        // ignore duplicates
		setFading(true);
		clearTimeout(fadeRef.current);
		fadeRef.current = window.setTimeout(() => {
			setPage(next);
			setFading(false);
		}, FADE_MS);
	};

	/* ────────── automatic paging every 4 s × visible ────────── */
	useEffect(() => {
		if (totalPages <= 1) return;                          // nothing to flip
		const id = window.setInterval(() => {
			goToPage((currentPage + 1) % totalPages);
		}, 8000);                                  // 8s
		return () => clearInterval(id);
	}, [visible, totalPages, currentPage]);                 // deps: reset on change

	/* cleanup for unmount */
	useEffect(() => () => clearTimeout(fadeRef.current), []);

	/* current slice */
	const offset = currentPage * visible;
	const trainersToShow = trainersSubset.slice(offset, offset + visible);
	const dotIndices = [...Array(totalPages).keys()];

	/* ────────── render ────────── */
	return (
		<section className="trainers">
			<h2 className="trainer__header">Meet Our Trainers</h2>

			<div
				className={`trainer-list ${isFading ? "fading" : ""}`}
				ref={rowRef}
			>
				{trainersToShow.map(t => (
					<TrainerCard key={t.id} {...t} />
				))}
			</div>

			{/* dots */}
			<div className="trainer-dots">
				{dotIndices.map(i => (
					<button
						key={i}
						className={`dot ${i === currentPage ? "active" : ""}`}
						onClick={() => goToPage(i)}
						aria-label={`Show trainer set ${i + 1}`}
					/>
				))}
			</div>

			{/* CTA */}
			<div className="trainers__action">
				<a href="/trainers" className="button__gold">
					View All Trainers
					<svg className="chevron" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
						<path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z" />
					</svg>
				</a>
			</div>
		</section>
	);
}
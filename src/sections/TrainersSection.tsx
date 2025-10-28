import { useRef, useEffect, useState, useCallback } from "react";
import TrainerCard from "../components/TrainerCard";
import { TRAINERS } from "../data/trainers";
import "./TrainersSection.css";

/* ---------- constants must match the CSS ---------- */
const CARD = 400;   // px  – width in .trainer-card-container
const GAP = 20;    // px  – 4 rem gap in .trainer-list
const FADE_MS = 400; // duration of fade animation


export default function TrainersSection() {
	const rowRef = useRef<HTMLDivElement>(null);
	const fadeRef = useRef<ReturnType<typeof setTimeout> | null>(null); // store timeout id
	const [visible, setVisible] = useState(TRAINERS.length); // cards per page
	const [currentPage, setPage] = useState(0);               // zero-based
	const [isFading, setFading] = useState(false);           // for CSS class
	const [isMobile, setIsMobile] = useState(false);          // track if mobile
	const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set()); // track flipped cards

	/* ────────── check if mobile view ────────── */
	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	/* ────────── recalc cards-per-row on resize (desktop only) ────────── */
	useEffect(() => {
		if (isMobile) return; // Skip pagination logic on mobile

		const calc = () => {
			const el = rowRef.current;
			if (!el) return;
			const fit = Math.floor((el.clientWidth + GAP) / (CARD + GAP));
			setVisible(Math.max(Math.min(fit, TRAINERS.length), 1));
		};

		calc();                               // initial
		const ro = new ResizeObserver(calc);  // subsequent resizes
		if (rowRef.current) {
			ro.observe(rowRef.current);
		}
		return () => ro.disconnect();
	}, [isMobile]);

	/* ────────── derive paging data (desktop only) ────────── */
	const rawTotalPages = Math.ceil(TRAINERS.length / visible);
	const totalPages = isMobile ? 1 : Math.min(rawTotalPages, 3);          // cap at 3, mobile shows all
	const maxTrainerCount = isMobile ? TRAINERS.length : totalPages * visible;                // trainers exposed
	const trainersSubset = TRAINERS.slice(0, maxTrainerCount);

	/* keep page index in-bounds whenever totals change */
	useEffect(() => {
		if (currentPage >= totalPages) setPage(totalPages - 1);
	}, [totalPages, currentPage]);

	/* helper to run fade-out → page change → fade-in (desktop only) */
	const goToPage = useCallback((next: number) => {
		if (next === currentPage || isFading || isMobile) return;        // ignore duplicates and mobile
		setFading(true);
		if (fadeRef.current !== null) {
			clearTimeout(fadeRef.current);
		}
		fadeRef.current = window.setTimeout(() => {
			setPage(next);
			setFading(false);
		}, FADE_MS);
	}, [currentPage, isFading, isMobile]);

	/* helper to toggle card flip state */
	const toggleCardFlip = (trainerId: number) => {
		setFlippedCards(prev => {
			const newSet = new Set(prev);
			if (newSet.has(trainerId)) {
				newSet.delete(trainerId);
			} else {
				newSet.add(trainerId);
			}
			return newSet;
		});
	};

	/* ────────── automatic paging every 8s (desktop only) ────────── */
	useEffect(() => {
		if (totalPages <= 1 || isMobile) return;                          // nothing to flip or mobile
		const id = window.setInterval(() => {
			goToPage((currentPage + 1) % totalPages);
		}, 8000);                                  // 8s
		return () => clearInterval(id);
	}, [visible, totalPages, currentPage, isMobile, goToPage]);                 // deps: reset on change

	/* cleanup for unmount */
	useEffect(() => () => {
		if (fadeRef.current !== null) {
			clearTimeout(fadeRef.current);
		}
	}, []);

	/* current slice */
	const offset = currentPage * visible;
	const trainersToShow = isMobile ? trainersSubset : trainersSubset.slice(offset, offset + visible);
	const dotIndices = [...Array(totalPages).keys()];

	/* ────────── render ────────── */
	return (
		<section className="trainers">
			<h2 className="trainer__header">Meet Our Trainers</h2>

			<div
				className={`trainer-list ${isFading && !isMobile ? "fading" : ""}`}
				ref={rowRef}
			>
				{trainersToShow.map(t => (
					<TrainerCard
						key={t.id}
						{...t}
						isFlipped={flippedCards.has(t.id)}
						onClick={() => toggleCardFlip(t.id)}
					/>
				))}
			</div>

			{/* dots - only show on desktop */}
			{!isMobile && (
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
			)}

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
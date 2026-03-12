import { useState } from "react";
import TrainerCard from "../components/TrainerCard";
import { TRAINERS } from "../data/trainers";
import "./TrainersSection.css";

export default function TrainersSection() {
	const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

	// Show only first 4 trainers in 2x2 layout
	const trainersToShow = TRAINERS.slice(0, 4);

	const toggleCardFlip = (trainerId: number) => {
		setFlippedCards((prev) => {
			const newSet = new Set(prev);
			if (newSet.has(trainerId)) {
				newSet.delete(trainerId);
			} else {
				newSet.add(trainerId);
			}
			return newSet;
		});
	};

	return (
		<section className="trainers">
			<h2 className="trainer__header">Meet Our Trainers</h2>

			<div className="trainer-grid">
				{trainersToShow.map((t) => (
					<TrainerCard
						key={t.id}
						{...t}
						isFlipped={flippedCards.has(t.id)}
						onClick={() => toggleCardFlip(t.id)}
					/>
				))}
			</div>

			<div className="trainers__action">
				<a href="/trainers" className="button__gold">
					View All Trainers
					<svg
						className="chevron"
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="currentColor"
					>
						<path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z" />
					</svg>
				</a>
			</div>
		</section>
	);
}
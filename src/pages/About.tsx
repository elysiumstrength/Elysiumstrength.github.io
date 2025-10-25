// src/pages/About.tsx
import './About.css';
import Ortiz from "../assets/Ortizs.jpg";

interface TeamMemberProps {
	name: string;
	title: string;
	bio: string;
	image: string;
	isReversed?: boolean;
}

function TeamMemberSection({ name, title, bio, image, isReversed = false }: TeamMemberProps) {
	return (
		<div className={`team-member ${isReversed ? 'team-member--reversed' : ''}`}>
			{/* Photo Side */}
			<div className="team-member__photo">
				<div
					className="team-member__image"
					style={{ backgroundImage: `url(${image})` }}
					/>
			</div>

			{/* Content Side */}
			<div className="team-member__content">
				<div className="team-member__header">
					<div className="team-member__title-row">
						<div className="team-member__dot" />
						<h2 className="team-member__name">
							{name}
						</h2>
					</div>
					<p className="team-member__title">
						{title}
					</p>
				</div>

				<div className="team-member__bio">
					{bio.split('\n').map((paragraph, index) => (
						paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
					))}
				</div>
			</div>
		</div>
	);
}

export default function About() {
	const founderData = {
		name: "Anna & Ryan Ortiz",
		title: "Founders & Head Trainers",
		bio: "Anna and Ryan met at the gym six years ago—Anna had her eye on Ryan as a potential client, while Ryan was more interested in getting to know Anna. As Anna tried to convince him to book a training session, she found herself developing feelings too.\n Six years later, Anna still hasn't landed that session—but Ryan sure made serious gains anyway! He remains an avid lifter, with numbers that impress even the most seasoned gym-goers.\n Today, they're happily married and living in a cozy home in Goleta. When they're not working, you'll likely find them lifting together at the gym, tending to their vegetable garden, or getting hands-on with a DIY project around the house. They're also active members of Santa Barbara Community Church and proud pet parents to Brutus, their loyal Dogo Argentino, and two cats—Cleo and Chloe.\n Soon, they hope to welcome a new (human!) addition to the family—an adventure they're both excited and a little nervous about.\n We're so excited to get to know you too!",
		image: Ortiz,
	};

	return (
		<div className="about-page">
			{/* Hero Section with Image and Header */}
			<section className="about-hero">
				<div className="about-hero__overlay">
					<h1 className="about-hero__title">ABOUT US</h1>
				</div>
				<img
                    src={founderData.image}
                    alt={`${founderData.name}`}
                    className="about-hero__image"
                />
			</section>

			{/* About Content */}
			<div className="about-content">
				{/* Founders Header */}
				<section className="founders-section">
					<div className="founders-header__container">
						<div className="founders-header__row">
							<div className="founders-header__line" />
							<div className="founders-header__subtitle">
								Meet Our Founders
							</div>
							<div className="founders-header__line" />
						</div>
						<h1 className="founders-header__title">
							The Visionaries Behind Elysium
						</h1>
						<p className='founders-header__text'>
							Our founders are passionate about fitness and wellness, bringing years of experience and expertise to the Elysium community.
						</p>
					</div>
					{/* Team Members */}
					<TeamMemberSection {...founderData} />
				</section>

			</div>
		</div>
	);
}

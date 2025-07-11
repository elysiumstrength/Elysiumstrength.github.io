import "./HeroSection.css"

export default function HeroSection() {
    return (
        <section className="home">
            <div className="home__hero">
                <h1>STRONGER<br />EVERY SESSION</h1>
                <h4>Discover the ultimate private gym and Personal Trainer destination in Santa Barbara at ELYSIUM Strength & Wellness</h4>
                <div className="button__tertiary">SCHEDULE A CONSULT</div>
            </div>

            <div className="home__options">
                <div className="home__scroll-buttons">
                    <div className="left">
                        <button className="button__secondary">MEET YOUR TRAINERS</button>
                    </div>
                    <button className="button__secondary">TAKE OUR SURVEY</button>
                    <div className="right">
                        <button className="button__secondary">ABOUT US</button>
                    </div>
                </div>
                <div className="scroll__more">
                    <p>SCROLL TO SEE MORE</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                    </svg>
                </div>
            </div>
        </section>
    )
}

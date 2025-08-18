import "./HeroSection.css"

export default function HeroSection() {
    const scrollToSection = (sectionClass: string) => {
        const element = document.querySelector(`.${sectionClass}`)
        if (element) {
            const navbarHeight = 80 // Approximate navbar height in pixels
            const elementPosition = (element as HTMLElement).offsetTop - navbarHeight

            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section className="home">
            <div className="home__hero">
                <h1>WELCOME<br />TO ELYSIUM</h1>
                <h4>Discover Goleta's premiere private personal training gym located conveniently off the 101 across from cottage hospital.</h4>
                <a href="https://elysium.pushpress.com/landing/appointments/apptpkg_b7bc861cb2f843e908da036e2ee4" className="button__tertiary">BOOK FREE CONSULTATION</a>
            </div>

            <div className="home__options">
                <div className="home__scroll-buttons">
                    <div className="left">
                        <button className="button__secondary" onClick={() => scrollToSection('trainers')}>
                            MEET YOUR TRAINERS
                        </button>
                    </div>
                    <button className="button__secondary" onClick={() => scrollToSection('values-full-width')}>
                        MISSION & VALUES
                    </button>
                    <div className="right">
                        <button className="button__secondary" onClick={() => scrollToSection('testimonials')}>
                            CLIENT TESTIMONIALS
                        </button>
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

import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
function About(){
    return(
        <>
            <Navbar />
            <Hero
            cName="hero-mid"
            heroImg='src/assets/benjamin-davies-mqN-EV9rNlY-unsplash.jpg'
            title='ABOUT'
            />
        </>
    )
}

export default About; 
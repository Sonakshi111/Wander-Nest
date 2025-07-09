import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Image from "../assets/benjamin-davies-mqN-EV9rNlY-unsplash.jpg"
function About(){
    return(
        <>
            <Navbar />
            <Hero
            cName="hero-mid"
            heroImg={Image}
            title='ABOUT US'
            />
            <AboutUs/>
            <Footer/>
        </>
    )
}

export default About; 
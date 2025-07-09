import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import Testimonial from "../components/Testimonials";
import Image from "../assets/arthur-poulin-NhU0nUR7920-unsplash.jpg"

function Service(){
    return(
        <>
            <Navbar />
            <Hero
            cName="hero-mid"
            heroImg={Image}
            title='SERVICE'
            />
            <Testimonial/>
            <Trip/>
            <Footer/>
        </>
    )
}

export default Service;
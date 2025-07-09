import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import Testimonial from "../components/Testimonials";

function Service(){
    return(
        <>
            <Navbar />
            <Hero
            cName="hero-mid"
            heroImg='src/assets/arthur-poulin-NhU0nUR7920-unsplash.jpg'
            title='SERVICE'
            />
            <Testimonial/>
            <Trip/>
            <Footer/>
        </>
    )
}

export default Service;
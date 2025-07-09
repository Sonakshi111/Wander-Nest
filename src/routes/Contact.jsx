import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Image from "../assets/urban-vintage-78A265wPiO4-unsplash.jpg"
function Contact(){
    return(
        <>
            <Navbar />
            <Hero
            cName="hero-mid"
            heroImg={Image}
            title='CONTACT'
            />
            <ContactForm/>
            <Footer/>
        </>
    )
}

export default Contact;
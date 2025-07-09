import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
function Contact(){
    return(
        <>
            <Navbar />
            <Hero
            cName="hero-mid"
            heroImg='src/assets/urban-vintage-78A265wPiO4-unsplash.jpg'
            title='CONTACT'
            />
            <ContactForm/>
            <Footer/>
        </>
    )
}

export default Contact;
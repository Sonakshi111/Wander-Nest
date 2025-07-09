import Footer from "../components/Footer";
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Sign from "../components/Sign";
import Image from "../assets/SignUpImage.jpg"
function SignUp(){
    return(
        <>
            <Navbar />
            <Hero
            cName="hero-dim"
            heroImg={Image}
            title='SIGN UP'
            />
            <Sign/>
            <Footer/>
        </>
    )
}

export default SignUp; 